const axios = require("axios")
const cheerio = require('cheerio')
const { JSDOM } = require('jsdom')

async function igdwn (url) {
	return new Promise(async (resolve, reject) => {
		try {
			const getToken = await axios.get('https://downloadgram.org/', {
			    headers: {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
					"cookie": "PHPSESSID=914a5et39uur28e84t9env0378; popCookie=1; prefetchAd_4301805=true"
					}		
			})
			let config = {
				'url': url,
				'submit': ''
			}
			const post = await axios('https://downloadgram.org/', {
				method: 'POST',
				//data: 'url=' + encodeURIComponent(url) + 'token' + token,
				data: new URLSearchParams(Object.entries(config)),
				headers: {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
					"cookie": "PHPSESSID=914a5et39uur28e84t9env0378; popCookie=1; prefetchAd_4301805=true"
				}
			})
			.then(({ data }) => {
				const $ = cheerio.load(data)
				resolve({
					thumb: $('div.dlsection > video').attr('poster'),
					link: $('div.dlsection > a').attr('href')
				})
			})
		} catch(error) {
			console.log(error);
		}
	})
	}

async function fbdwn (link){
	return new Promise(async (resolve, reject) => {
	try {
		const anu = await axios.get('https://getmyfb.com/', {
			headers: {
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
				"cookie": "PHPSESSID=914a5et39uur28e84t9env0378; popCookie=1; prefetchAd_4301805=true"
			}
		})
		let config = {
			'id': link,
			'locale': 'id'
		} 
		const post = await axios('https://getmyfb.com/process', {
				method: 'POST',
				//data: 'url=' + encodeURIComponent(url) + 'token' + token,
				data: new URLSearchParams(Object.entries(config)),
				headers: {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
					"cookie": "PHPSESSID=914a5et39uur28e84t9env0378; popCookie=1; prefetchAd_4301805=true"
				}
		})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			hasil = []
			thumb = $('div.container > div.results-item > div.results-item-image-wrapper').find('img').attr('src')
			judul = $('div.container > div.results-item > div.results-item-text').text().trim()
			$('div.container > div.results-download > ul > li').each(function (i, a) {
				hasil.push({
					link: $(a).find('a').attr('href')
				})
			}) 
		})
		resolve({
			from: judul,
			thumb: thumb,
			HD: hasil[0],
			SD: hasil[1]
		})
	} catch(error) {
		console.log(error);
	}
})
}

function joox(query) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(new Date() / 1000)
        axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
            .then(({ data }) => {
                let result = []
                let hasil = []
                let promoses = []
                let ids = []
                data.itemlist.forEach(result => {
                    ids.push(result.songid)
                });
                for (let i = 0; i < data.itemlist.length; i++) {
                    const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
                    promoses.push(
                        axios.get(get, {
                            headers: {
                                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                            }
                        })
                            .then(({ data }) => {
                                const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
                                hasil.push({
                                    lagu: res.msong,
                                    album: res.malbum,
                                    penyanyi: res.msinger,
                                    publish: res.public_time,
                                    img: res.imgSrc,
                                    mp3: res.mp3Url
                                })
                                Promise.all(promoses).then(() => resolve({
                                    creator: global.wm,
                                    status: true,
                                    data: hasil,
                                }))
                            }).catch(reject)
                    )
                }
            }).catch(reject)
    })
}

async function tiktok (url) {
	return new Promise(async (resolve, reject) => {
	try {
		const getToken = await axios.get('https://ttdownloader.com/', {
			headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0",
				"cookie": "PHPSESSID=914a5et39uur28e84t9env0378; popCookie=1; prefetchAd_4301805=true"
				}
			})
		let dom = new JSDOM(getToken.data).window.document
		let a = dom.querySelector('div.input-container').innerHTML
		token = /<input type="hidden" id="token" name="token" value="(.*?)">/g.exec(a)[1]
		let config = {
			'url': url,
			'format': '',
			'token': token
		}
		const post = await axios('https://ttdownloader.com/search/', {
			method: 'POST',
			//data: 'url=' + encodeURIComponent(url) + 'token' + token,
			data: new URLSearchParams(Object.entries(config)),
			headers: {
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0",
				"cookie": "PHPSESSID=914a5et39uur28e84t9env0378; popCookie=1; prefetchAd_4301805=true"
			}
		})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			    resolve({
			    nowm: $('div:nth-child(2) > div.download > a').attr('href'),
			    wm: $('div:nth-child(3) > div.download > a').attr('href'),
			    audio: $('div:nth-child(4) > div.download > a').attr('href')
			    })
		})
	} catch(error) {
		console.log(error);
	}
})
}

async function twdwn (url) {
	return new Promise(async (resolve, reject) => {
		try {
			const getToken = await axios.get('https://twdown.net/', {
			    headers: {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
					"cookie": "PHPSESSID=914a5et39uur28e84t9env0378; popCookie=1; prefetchAd_4301805=true"
					}		
			})
			let config = {
				'URL': url
			}
			const post = await axios('https://twdown.net/download.php', {
				method: 'POST',
				//data: 'url=' + encodeURIComponent(url) + 'token' + token,
				data: new URLSearchParams(Object.entries(config)),
				headers: {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
					"cookie": "PHPSESSID=914a5et39uur28e84t9env0378; popCookie=1; prefetchAd_4301805=true"
				}
			})
			.then(({ data }) => {
				const $ = cheerio.load(data)
				hasil = []
				$('div.col-md-8.col-md-offset-2 > table > tbody > tr > td').each(function (a, b) {
					hasil.push({
						link: $(b).find('a').attr('href')
					})
				})
				let anu = hasil[hasil.length - 1]
				resolve({
					mp4x1280: hasil[3],
					mp4x640: hasil[7],
					mp4x480: hasil[11],
					audio: `https://twdown.net/${anu}`
				})
			})
		} catch(error) {
			console.log(error);
		}
	})
	}

function styletext(teks) {
	return new Promise((resolve, reject) => {
		axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
		.then(({ data }) => {
			let $ = cheerio.load(data)
			let hasil = []
			$('table > tbody > tr').each(function (a, b) {
				hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
			})
			resolve(hasil)
		})
	})
}

function ringtone(title) {
    return new Promise((resolve, reject) => {
        axios.get('https://meloboom.com/en/search/'+title)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let hasil = []
            $('#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li').each(function (a, b) {
                hasil.push({ title: $(b).find('h4').text(), source: 'https://meloboom.com/'+$(b).find('a').attr('href'), audio: $(b).find('audio').attr('src') })
            })
            resolve(hasil)
        })
    })
}

function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

function wallpaper(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('div.grid-item').each(function (a, b) {
                hasil.push({
                    title: $(b).find('div.info > a > h3').text(),
                    type: $(b).find('div.info > a:nth-child(2)').text(),
                    source: 'https://www.besthdwallpaper.com/'+$(b).find('div > a:nth-child(3)').attr('href'),
                    image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')]
                })
            })
            resolve(hasil)
        })
    })
}

function wikimedia(title) {
    return new Promise((resolve, reject) => {
        axios.get(`https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let hasil = []
            $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
                hasil.push({
                    title: $(b).find('img').attr('alt'),
                    source: $(b).attr('href'),
                    image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src')
                })
            })
            resolve(hasil)
        })
    })
}

function musically(URL) {
	return new Promise((resolve, rejecet) => {
        axios.get('https://musicaldown.com/id', {
            headers: {
                'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            }
        }).then(res => {
            const $ = cheerio.load(res.data)
            const url_name = $("#link_url").attr("name")
            const token_name = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("name")
            const token_ = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("value")
            const verify = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(3)").attr("value")
            let data = {
                [`${url_name}`]: URL,
                [`${token_name}`]: token_,
                verify: verify
            }
        axios.request({
            url: 'https://musicaldown.com/id/download',
            method: 'post',
            data: new URLSearchParams(Object.entries(data)),
            headers: {
                'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
                'cookie': res.headers["set-cookie"]
            }
        }).then(respon => {
            const ch = cheerio.load(respon.data)
        axios.request({
            url: 'https://musicaldown.com/id/mp3',
            method: 'post',
            headers: {
                'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
                'cookie': res.headers["set-cookie"]
            }
        }).then(resaudio => { 
            const hc = cheerio.load(resaudio.data)       
            const result = {
				thumb: ch('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4 > img').attr('src'),
                video: ch('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(5)').attr('href'),
                audio: hc('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(5)').attr('href'),
                video_original: ch('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(9)').attr('href'),
                audio_original: hc('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(9)').attr('href')
            }
        resolve(result)
        })
    })
    })
    })
	
}

function pinterest(querry){
	return new Promise(async(resolve,reject) => {
		 axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
			headers: {
			"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
		}
			}).then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		const hasil = [];
   		 $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
		});
   		result.forEach(v => {
		 if(v == undefined) return
		 hasil.push(v.replace(/236/g,'736'))
			})
			hasil.shift();
		resolve(hasil)
		})
	})
}

async function dBinary(str) {
    var newBin = str.split(" ")
    var binCode = []
    for (i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
      }
    return binCode.join("")
    }
    
async function eBinary(str = ''){    
    let res = ''
    res = str.split('').map(char => {       
    return char.charCodeAt(0).toString(2);  
     }).join(' ')
    return res
    }

function jadwaltv(query) {
        return new Promise(async (resolve, reject) => {
                   try {
                        // const tv_switch = stasiun[0]
                        axios.get("https://www.jadwaltv.net/channel/" + query)
                             .then(({
                                  data
                             }) => {
                                  const $ = cheerio.load(data);
                                  let isitable1 = [];
                                  let isitable2 = [];
                                  $("div > div > table:nth-child(3) > tbody > tr").each(function (
                                       i,
                                       result
                                  ) {
                                       isitable1.push({
                                            jam: result.children[0].children[0].data,
                                            tayang: result.children[1].children[0].data,
                                       });
                                  });
                                  // console.log(isitable1)
                                  $("div > div > table:nth-child(5) > tbody > tr").each(function (
                                       i,
                                       result
                                  ) {
                                       isitable2.push({
                                            jam: result.children[0].children[0].data,
                                            tayang: result.children[1].children[0].data,
                                       });
                                  });
                                  const semuatable = [];
    
                                  for (let i = 0;i < isitable1.length;i++) {
                                       semuatable.push(isitable1[i]);
                                  }
                                  for (let i = 0;i < isitable2.length;i++) {
                                       semuatable.push(isitable2[i]);
                                  }
                                  // console.log(semuatable)
                                  let daftartay = `*Menampilkan daftar tayang channel ${query}*\n\n`;
                                  for (let i = 0;i < semuatable.length;i++) {
                                       daftartay += `${semuatable[i].jam}  ${semuatable[i].tayang}\n`;
                                  }
                                  resolve(daftartay);
                                  // console.log(semuatable)
                             })
                             .catch((e) => {
                                  console.log(e)
                             });
                   } catch (e) {
                        console.log(e);
                   }
        })
    }

module.exports = {
	igdwn,
	fbdwn,
	joox,
	tiktok,
	twdwn,
	styletext,
	ringtone,
	quotesAnime,
	wallpaper,
	wikimedia,
	musically,
	pinterest,
	dBinary,
	eBinary,
	jadwaltv
}
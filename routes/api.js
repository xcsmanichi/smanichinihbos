__path = process.cwd();
var express = require("express");

var creator = "@Xorizn";
var router = express.Router();
var secure = require('ssl-express-www');
var cors = require('cors');
var cheerio = require('cheerio');
var fetch = require("node-fetch");
var request = require("request");
var cheerio = require("cheerio");
var y2 = require("y2mate-api");
var ytsd = require("ytsr");
var yz = require("yuzzu-api");
var zrapi = require("zrapi");
var Canvas = require("discord-canvas");
var ling = require("knights-canvas");
var gis = require("g-i-s");
var googleIt = require("google-it");
var translate = require("@vitalets/google-translate-api");

var { color, bgcolor } = require(__path + "/lib/color.js");
var { fetchJson } = require(__path + "/lib/fetcher.js");
var options = require(__path + "/lib/options.js");

var { igdwn, fbdwn, joox, tiktok, twdwn, styletext, ringtone, quotesAnime, wallpaper, wikimedia, musically, pinterest, dBinary, eBinary, jadwaltv } = require("./../lib/dwn.js");
var { Vokal, Base, Searchnabi, Gempa } = require("./../lib");
const { query, text } = require("express");

var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

errer = {
  notparam: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: "masukan parameter apikey",
    getApikey: "Apikey??? Contact Me On WhatsApp",
  },
  notsrc: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: "masukan parameter search",
    getApikey: "Apikey??? Contact Me On WhatsApp",
  },
  notjudul: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: "masukan parameter search",
    getApikey: "Apikey??? Contact Me On WhatsApp",
  },
  notkey: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: "masukan parameter key",
  },
  noturl: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: "masukan parameter url",
  },
  notkata: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: "masukan parameter kata",
  },
  nottext: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: "masukan parameter text",
  },
  nottext2: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: "masukan parameter text2",
  },
  notnabi: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: "masukan parameter nabi",
  },
  nottext3: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: "masukan parameter text3",
  },
  nottheme: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: "masukan parameter theme",
  },
  notusername: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: "masukan parameter username",
  },
  notvalue: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: "masukan parameter value",
  },
  notheme: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message:
      "theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi",
  },
  invalidKey: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: "Apikey??? Contact Me On WhatsApp",
  },
  invalidlink: {
    status: false,
    creator: `${creator}`,
    message: "error, mungkin link anda tidak valid.",
  },
  invalidkata: {
    status: false,
    creator: `${creator}`,
    message: "error, mungkin kata tidak ada dalam api.",
  },
  notAddApiKey: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message:
      "masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp",
  },
  error: {
    status: false,
    creator: `${creator}`,
    message: "404 not result",
  },
};

router.get("/styletext", async (req, res, next) => {
  text = req.query.text;
  if (!text) return res.json(errer.nottext);
  styletext(text)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/binary", async (req, res, next) => {
  text = req.query.text;
  if (!text) return res.json(errer.nottext);
  eBinary(text)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/dbinary", async (req, res, next) => {
  text = req.query.text;
  if (!text) return res.json(errer.nottext);
  dBinary(text)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/ringtone", async (req, res, next) => {
  judul = req.query.judul;
  if (!judul) return res.json(errer.notjudul);
  wikimedia(judul)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/pinterest", async (req, res, next) => {
  judul = req.query.judul;
  if (!judul) return res.json(errer.notjudul);
  pinterest(judul)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/ringtone", async (req, res, next) => {
  judul = req.query.judul;
  if (!judul) return res.json(errer.notjudul);
  ringtone(judul)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/wallpaper", async (req, res, next) => {
  judul = req.query.judul;
  if (!judul) return res.json(errer.notjudul);
  wallpaper(judul)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/quotesanime", async (req, res, next) => {
  quotesAnime()
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/igdwn", async (req, res, next) => {
  url = req.query.url;
  if (!url) return res.json(errer.noturl);
  igdwn(url)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/fbdwn", async (req, res, next) => {
  url = req.query.url;
  if (!url) return res.json(errer.noturl);
  fbdwn(url)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/tiktod2", async (req, res, next) => {
  url = req.query.url;
  if (!url) return res.json(errer.noturl);
  tiktok(url)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/tiktod1", async (req, res, next) => {
  url = req.query.url;
  if (!url) return res.json(errer.noturl);
  musically(url)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/twitter", async (req, res, next) => {
  url = req.query.url;
  if (!url) return res.json(errer.noturl);
  twdwn(url)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/joox", async (req, res, next) => {
  search = req.query.search;
  if (!search) return res.json(errer.notsrc);
  joox(search)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});
router.get("/ytmp4", async (req, res, next) => {
  url = req.query.url;
  if (!url) return res.json(errer.noturl);
  y2.GetVideo(url)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});
router.get("/ytmp3", async (req, res, next) => {
  url = req.query.url;
  if (!url) return res.json(errer.noturl);
  y2.GetAudio(url)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/yts", async (req, res, next) => {
  judul = req.query.judul;
  if (!judul)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter judul",
    });
  const filter1 = await ytsd.getFilters(`${judul}`);
  const filters1 = filter1.get("Type").get("Video");
  const { items } = await ytsd(filters1.url, { limit: 10 })
    .then((data) => {
      var result = data.items;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/mediafire", async (req, res, next) => {
  link = req.query.link;
  if (!link)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter link",
    });

  yz.mediafire(`${link}`)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

//BASE

router.get("/base", async (req, res, next) => {
  var type = req.query.type,
    encode = req.query.encode,
    decode = req.query.decode;
  if (!type)
    return res.json({
      status: false,
      creator: `${creator}`,
      code: 404,
      message: "masukan parameter type, type yang tersedia : base64 , base32",
    });
  if (type == "base64" && encode) {
    Base("b64enc", encode).then((result) => {
      res.json({
        status: true,
        creator: `${creator}`,
        result,
      });
    });
  } else if (type == "base64" && decode) {
    Base("b64dec", decode).then((result) => {
      res.json({
        status: true,
        creator: `${creator}`,
        result,
      });
    });
  } else if (type == "base32" && encode) {
    Base("b32enc", encode).then((result) => {
      res.json({
        status: true,
        creator: `${creator}`,
        result,
      });
    });
  } else if (type == "base32" && decode) {
    Base("b32dec", decode).then((result) => {
      res.json({
        status: true,
        creator: `${creator}`,
        result,
      });
    });
  } else if (!(encode || decode)) {
    res.json({
      status: false,
      creator: `${creator}`,
      message: "tambahkan parameter encode/decode",
    });
  } else {
    res.json(errer.error);
  }
});

/* == Text Pro == */

// Maker 1 text
router.get("/textpro/blackpink", async (req, res, next) => {
  text1 = req.query.text;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  zrapi.textpro(
    "https://textpro.me/create-blackpink-logo-style-online-1001.html",
    [`${text1}`]
  )
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro/waterpipe", async (req, res, next) => {
  text1 = req.query.text;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  zrapi.textpro(
    "https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html",
    [`${text1}`]
  )
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro/skeleton", async (req, res, next) => {
  text1 = req.query.text;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  zrapi.textpro(
    "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html",
    [`${text1}`]
  )
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro/pencil", async (req, res, next) => {
  text1 = req.query.text;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  zrapi.textpro(
    "https://textpro.me/create-a-sketch-text-effect-online-1044.html",
    [`${text1}`]
  )
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro/circuit", async (req, res, next) => {
  text1 = req.query.text;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  zrapi.textpro(
    "https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html",
    [`${text1}`]
  )
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro/fiction", async (req, res, next) => {
  text1 = req.query.text;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  zrapi.textpro(
    "https://textpro.me/create-science-fiction-text-effect-online-free-1038.html",
    [`${text1}`]
  )
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro/thunder", async (req, res, next) => {
  text1 = req.query.text;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  zrapi.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${text1}`,
  ])
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro/magma", async (req, res, next) => {
  text1 = req.query.text;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  zrapi.textpro(
    "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
    [`${text1}`]
  )
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro/green-neon", async (req, res, next) => {
  text1 = req.query.text;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  zrapi.textpro("https://textpro.me/green-neon-text-effect-874.html", [`${text1}`])
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro/neon-futuristic", async (req, res, next) => {
  text1 = req.query.text;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  zrapi.textpro(
    "https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
    [`${text1}`]
  )
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

//Maker 2 text1
router.get("/textpro2/horror", async (req, res, next) => {
  var text1 = req.query.text,
    text2 = req.query.text2;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  if (!text2)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text2",
    });

  zrapi.textpro(
    "https://textpro.me/create-a-cinematic-horror-text-effect-1045.html",
    [`${text1}`, `${text2}`]
  )
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro2/glitch-2", async (req, res, next) => {
  var text1 = req.query.text,
    text2 = req.query.text2;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  if (!text2)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text2",
    });

  zrapi.textpro(
    "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",
    [`${text1}`, `${text2}`]
  )
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro2/space-3d", async (req, res, next) => {
  var text1 = req.query.text,
    text2 = req.query.text2;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  if (!text2)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text2",
    });

  zrapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${text1}`,
    `${text2}`,
  ])
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro2/avengers", async (req, res, next) => {
  var text1 = req.query.text,
    text2 = req.query.text2;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  if (!text2)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text2",
    });

  zrapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${text1}`,
    `${text2}`,
  ])
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro2/steel-text", async (req, res, next) => {
  var text1 = req.query.text,
    text2 = req.query.text2;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  if (!text2)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text2",
    });

  zrapi.textpro("https://textpro.me/3d-steel-text-effect-877.html", [
    `${text1}`,
    `${text2}`,
  ])
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro2/layered-text", async (req, res, next) => {
  var text1 = req.query.text,
    text2 = req.query.text2;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  if (!text2)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text2",
    });

  zrapi.textpro("https://textpro.me/create-layered-text-effects-online-free-1032.html",
    [`${text1}`, `${text2}`]
  )
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro2/captain-america", async (req, res, next) => {
  var text1 = req.query.text,
    text2 = req.query.text2;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  if (!text2)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text2",
    });

  zrapi.textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html",
    [`${text1}`, `${text2}`]
  )
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro2/marvel-studio", async (req, res, next) => {
  var text1 = req.query.text,
    text2 = req.query.text2;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  if (!text2)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text2",
    });

  zrapi.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html",
    [`${text1}`, `${text2}`]
  )
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro2/pornhub", async (req, res, next) => {
  var text1 = req.query.text,
    text2 = req.query.text2;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  if (!text2)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text2",
    });

  zrapi.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
    [`${text1}`, `${text2}`]
  )
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/textpro2/glitch", async (req, res, next) => {
  var text1 = req.query.text,
    text2 = req.query.text2;
  if (!text1)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  if (!text2)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text2",
    });

  zrapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
    [`${text1}`, `${text2}`]
  )
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

//////////////////============//////
//FUNNN

router.get("/darkjokes", async (req, res, next) => {
  fetch(encodeURI(`https://raw.githubusercontent.com/Xorizn/database-api/main/meme/darkjokes.json`))
    .then((response) => response.json())
    .then((data) => {
      var result = data;
      var result = data[Math.floor(Math.random() * data.length)];
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/simi", async (req, res, next) => {
  text = req.query.text;
  if (!text)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });

  fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=id`))
    .then((response) => response.json())
    .then((data) => {
      var result = data.success;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/caklontong", async (req, res, next) => {
  fetch(encodeURI(`https://raw.githubusercontent.com/Xorizn/database-api/main/fun/caklontong.json`))
    .then((response) => response.json())
    .then((data) => {
      var result = data.result;
      var result = data[Math.floor(Math.random() * data.length)];
      res.json({
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/tebakgambar", async (req, res, next) => {
  fetch(encodeURI(`https://raw.githubusercontent.com/Xorizn/database-api/main/fun/tebakgambar.json`))
    .then((response) => response.json())
    .then((data) => {
      var result = data.result;
      var result = data[Math.floor(Math.random() * data.length)];
      res.json({
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

//NEWSSSS

router.get("/news/infogempa", async (req, res, next) => {
  Gempa()
    .then((result) => {
      res.json({
        creator: creator,
        result,
      });
    })
    .catch((e) => {
      console.log("Error :", color(e, "red"));
      res.json(errer.error);
    });
});

router.get("/news/covidworld", async (req, res, next) => {
  fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
    .then((response) => response.json())
    .then((data) => {
      var result = data;
      res.json({
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/news/cnn", async (req, res, next) => {
  fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news`))
    .then((response) => response.json())
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/news/cnbc", async (req, res, next) => {
  fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news`))
    .then((response) => response.json())
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/news/republika", async (req, res, next) => {
  fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news/`))
    .then((response) => response.json())
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/news/tempo", async (req, res, next) => {
  fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news`))
    .then((response) => response.json())
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/news/antara", async (req, res, next) => {
  fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news`))
    .then((response) => response.json())
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/news/kumparan", async (req, res, next) => {
  fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
    .then((response) => response.json())
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/jadwaltv", async (req, res, next) => {
  var jadwal = req.query.jadwal

  if (!jadwal)
    return res.json({
      status: false,
      creator: `${creator}`,
      code: 404,
      message: "masukan parameter jadwal, jadwal yang tersedia : rcti, nettv, antv, gtv, indosiar, inewstv, kompastv, metrotv, mnctv, rtv, sctv, trans7, transtv, tvone, tvri",
    });
  if (jadwal == "rcti") {
    jadwaltv('rcti')
      .then((data) => {
        var result = data;
        res.json({
          author: `${creator}`,
          result,
        });
      })
  } else if (jadwal == "nettv") {
    jadwaltv('nettv')
      .then((data) => {
        var result = data;
        res.json({
          author: `${creator}`,
          result,
        });
      })
  } else if (jadwal == "antv") {
    jadwaltv('antv')
      .then((data) => {
        var result = data;
        res.json({
          author: `${creator}`,
          result,
        });
      })
  } else if (jadwal == "gtv") {
    jadwaltv('gtv')
      .then((data) => {
        var result = data;
        res.json({
          author: `${creator}`,
          result,
        });
      })
  } else if (jadwal == "indosiar") {
    jadwaltv('indosiar')
      .then((data) => {
        var result = data;
        res.json({
          author: `${creator}`,
          result,
        });
      })
  } else if (jadwal == "inewstv") {
    jadwaltv('inewstv')
      .then((data) => {
        var result = data;
        res.json({
          author: `${creator}`,
          result,
        });
      })
  } else if (jadwal == "kompastv") {
    jadwaltv('kompastv')
      .then((data) => {
        var result = data;
        res.json({
          author: `${creator}`,
          result,
        });
      })
  } else if (jadwal == "metrotv") {
    jadwaltv('metrotv')
      .then((data) => {
        var result = data;
        res.json({
          author: `${creator}`,
          result,
        });
      })
  } else if (jadwal == "mnctv") {
    jadwaltv('mnctv')
      .then((data) => {
        var result = data;
        res.json({
          author: `${creator}`,
          result,
        });
      })
  } else if (jadwal == "rtv") {
    jadwaltv('rtv')
      .then((data) => {
        var result = data;
        res.json({
          author: `${creator}`,
          result,
        });
      })
  } else if (jadwal == "sctv") {
    jadwaltv('sctv')
      .then((data) => {
        var result = data;
        res.json({
          author: `${creator}`,
          result,
        });
      })
  } else if (jadwal == "trans7") {
    jadwaltv('trans7')
      .then((data) => {
        var result = data;
        res.json({
          author: `${creator}`,
          result,
        });
      })
  } else if (jadwal == "transtv") {
    jadwaltv('transtv')
      .then((data) => {
        var result = data;
        res.json({
          author: `${creator}`,
          result,
        });
      })
  } else if (jadwal == "tvone") {
    jadwaltv('tvone')
      .then((data) => {
        var result = data;
        res.json({
          author: `${creator}`,
          result,
        });
      })
  } else if (jadwal == "tvri") {
    jadwaltv('tvri')
      .then((data) => {
        var result = data;
        res.json({
          author: `${creator}`,
          result,
        });
      })
  } else {
    res.json(errer.error);
  }
});

//OTHER

router.get("/shorturl", async (req, res, next) => {
  url = req.query.url;
  if (!url) return res.json(loghandler.noturl);
  request(`https://tinyurl.com/api-create.php?url=${url}`,
    function (error, response, body) {
      try {
        res.json({
          status: true,
          creator: `${creator}`,
          result: {
            link: `${body}`,
          },
          message: `Eror? lapor ke owner ${creator}`,
        });
      } catch (e) {
        console.log("Error :", color(e, "red"));
        res.json(loghandler.invalidlink);
      }
    }
  );
});

router.get("/kbbi", async (req, res, next) => {
  kata = req.query.kata;
  if (!kata)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter kata",
    });
  fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
    .then((response) => response.json())
    .then((data) => {
      var result = data;
      res.json({
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/kodepos", async (req, res, next) => {
  kota = req.query.kota;
  if (!kota)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter kota",
    });

  fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
    .then((response) => response.json())
    .then((data) => {
      var result = data;
      res.json({
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

//WELCOME
router.get("/welcome2", async (req, res, next) => {
  if (!req.query.name)
    return res.json({ status: 404, error: "masukkan param name" });
  if (!req.query.mem)
    return res.json({ status: 404, error: "masukkan param mem" });
  if (!req.query.gcname)
    return res.json({ status: 404, error: "masukkan param gcname" });
  if (!req.query.picurl)
    return res.json({ status: 404, error: "masukkan param picurl" });
  if (!req.query.bgurl)
    return res.json({ status: 404, error: "masukkan param bgurl" });
  if (!req.query.gcicon)
    return res.json({ status: 404, error: "masukkan param gcicon" });

  const welcomer = await new ling.Welcome()
    .setUsername(req.query.name)
    .setGuildIcon(req.query.gcicon)
    .setGuildName(req.query.gcname)
    .setAvatar(req.query.picurl)
    .setMemberCount(req.query.mem)
    .setAvatar(req.query.picurl)
    .setBackground(req.query.bgurl)
    .toAttachment();
  const base64 = `${welcomer.toBuffer().toString("base64")}`;
  buffer = Buffer.from(base64, "base64");
  res.type("png");
  res.send(buffer);
});

router.get("/goodbye2", async (req, res, next) => {
  if (!req.query.name)
    return res.json({ status: 404, error: "masukkan param name" });
  if (!req.query.mem)
    return res.json({ status: 404, error: "masukkan param mem" });
  if (!req.query.gcname)
    return res.json({ status: 404, error: "masukkan param gcname" });
  if (!req.query.picurl)
    return res.json({ status: 404, error: "masukkan param picurl" });
  if (!req.query.bgurl)
    return res.json({ status: 404, error: "masukkan param bgurl" });
  if (!req.query.gcicon)
    return res.json({ status: 404, error: "masukkan param gcicon" });

  const welcomer = await new ling.Goodbye()
    .setUsername(req.query.name)
    .setGuildIcon(req.query.gcicon)
    .setGuildName(req.query.gcname)
    .setAvatar(req.query.picurl)
    .setMemberCount(req.query.mem)
    .setAvatar(req.query.picurl)
    .setBackground(req.query.bgurl)
    .toAttachment();
  const base64 = `${welcomer.toBuffer().toString("base64")}`;
  buffer = Buffer.from(base64, "base64");
  res.type("png");
  res.send(buffer);
});

router.get("/rank", async (req, res, next) => {
  if (!req.query.icon)
    return res.json({ status: 404, error: "masukkan param icon" });
  if (!req.query.user)
    return res.json({ status: 404, error: "masukkan param user" });
  if (!req.query.bgurl)
    return res.json({ status: 404, error: "masukkan param background" });
  if (!req.query.needxp)
    return res.json({ status: 404, error: "masukkan param NeedXp" });
  if (!req.query.currxp)
    return res.json({ status: 404, error: "masukkan param CurrXp" });
  if (!req.query.level)
    return res.json({ status: 404, error: "masukkan param Level" });
  if (!req.query.rank)
    return res.json({ status: 404, error: "masukkan param Rank" });

  const ranger = await new ling.Rank()
    .setAvatar(req.query.icon)
    .setUsername(req.query.user)
    .setBg(req.query.bgurl)
    .setNeedxp(req.query.needxp)
    .setCurrxp(req.query.currxp)
    .setLevel(req.query.level)
    .setRank(req.query.rank)
    .toAttachment();
  const base64 = `${ranger.toBuffer().toString("base64")}`;
  buffer = Buffer.from(base64, "base64");
  res.type("png");
  res.send(buffer);
});

router.get("/level", async (req, res, next) => {
  if (!req.query.icon)
    return res.json({ status: 404, error: "masukkan param icon" });
  const leveltod = await new ling.Up().setAvatar(req.query.icon).toAttachment();
  const base64 = `${leveltod.toBuffer().toString("base64")}`;
  buffer = Buffer.from(base64, "base64");
  res.type("png");
  res.send(buffer);
});

router.get("/welcome", async (req, res, next) => {
  if (!req.query.icon)
    return res.json({ status: 404, error: "masukkan param icon" });
  if (!req.query.name)
    return res.json({ status: 404, error: "masukkan param name" });
  if (!req.query.bgurl)
    return res.json({ status: 404, error: "masukkan param background" });
  if (!req.query.gcname)
    return res.json({ status: 404, error: "masukkan param gcname" });
  if (!req.query.mem)
    return res.json({ status: 404, error: "masukkan param jumlah mem" });

  const welcomer2 = await new ling.Welcome2()
    .setAvatar(req.query.icon)
    .setUsername(req.query.name)
    .setBg(req.query.bgurl)
    .setGroupname(req.query.gcname)
    .setMember(req.query.mem)
    .toAttachment();
  const base64 = `${welcomer2.toBuffer().toString("base64")}`;
  buffer = Buffer.from(base64, "base64");
  res.type("png");
  res.send(buffer);
});

router.get("/goodbye", async (req, res, next) => {
  if (!req.query.icon)
    return res.json({ status: 404, error: "masukkan param icon" });
  if (!req.query.name)
    return res.json({ status: 404, error: "masukkan param name" });
  if (!req.query.bgurl)
    return res.json({ status: 404, error: "masukkan param background" });
  if (!req.query.gcname)
    return res.json({ status: 404, error: "masukkan param gcname" });
  if (!req.query.mem)
    return res.json({ status: 404, error: "masukkan param jumlah mem" });

  const good2 = await new ling.Goodbye2()
    .setAvatar(req.query.icon)
    .setUsername(req.query.name)
    .setBg(req.query.bgurl)
    .setGroupname(req.query.gcname)
    .setMember(req.query.mem)
    .toAttachment();
  const base64 = `${good2.toBuffer().toString("base64")}`;
  buffer = Buffer.from(base64, "base64");
  res.type("png");
  res.send(buffer);
});

router.get("/goodbye3", async (req, res, next) => {
  if (!req.query.user)
    return res.json({ status: 404, error: "masukkan param user" });
  if (!req.query.iminator)
    return res.json({ status: 404, error: "masukkan param iminator" });
  if (!req.query.mem)
    return res.json({ status: 404, error: "masukkan param mem" });
  if (!req.query.gcname)
    return res.json({ status: 404, error: "masukkan param gcname" });
  if (!req.query.avatar)
    return res.json({ status: 404, error: "masukkan param jumlah avatar" });
  if (!req.query.bgurl)
    return res.json({ status: 404, error: "masukkan param jumlah bgurl" });

  const goodbye3 = await new Canvas.Goodbye()
    .setUsername(req.query.user)
    .setDiscriminator(req.query.iminator)
    .setMemberCount(req.query.mem)
    .setGuildName(req.query.gcname)
    .setAvatar(req.query.avatar)
    .setColor("border", "#FFFEDC")
    .setColor("username-box", "#FFFEDC")
    .setColor("discriminator-box", "#FFFEDC")
    .setColor("message-box", "#FFFEDC")
    .setColor("title", "#FFFEDC")
    .setColor("avatar", "#FFFEDC")
    .setBackground(req.query.bgurl)
    .toAttachment();
  const base64 = `${goodbye3.toBuffer().toString("base64")}`;
  buffer = Buffer.from(base64, "base64");
  res.type("png");
  res.send(buffer);
});

router.get("/welcome3", async (req, res, next) => {
  if (!req.query.user)
    return res.json({ status: 404, error: "masukkan param user" });
  if (!req.query.iminator)
    return res.json({ status: 404, error: "masukkan param iminator" });
  if (!req.query.mem)
    return res.json({ status: 404, error: "masukkan param mem" });
  if (!req.query.gcname)
    return res.json({ status: 404, error: "masukkan param gcname" });
  if (!req.query.avatar)
    return res.json({ status: 404, error: "masukkan param jumlah avatar" });
  if (!req.query.bgurl)
    return res.json({ status: 404, error: "masukkan param jumlah bgurl" });

  const welcomer3 = await new Canvas.Welcome()
    .setUsername(req.query.user)
    .setDiscriminator(req.query.iminator)
    .setMemberCount(req.query.mem)
    .setGuildName(req.query.gcname)
    .setAvatar(req.query.avatar)
    .setColor("border", "#FFFEDC")
    .setColor("username-box", "#FFFEDC")
    .setColor("discriminator-box", "#FFFEDC")
    .setColor("message-box", "#FFFEDC")
    .setColor("title", "#FFFEDC")
    .setColor("avatar", "#FFFEDC")
    .setBackground(req.query.bgurl)
    .toAttachment();
  const base64 = `${welcomer3.toBuffer().toString("base64")}`;
  buffer = Buffer.from(base64, "base64");
  res.type("png");
  res.send(buffer);
});

//SEARCh
router.get("/wiki", async (req, res, next) => {
  judul = req.query.judul;
  if (!judul)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter judul",
    });

  yz.wiki(`${judul}`)
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/translate", async (req, res, next) => {
  var text = req.query.text,
    to = req.query.to;
  if (!text)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter text",
    });
  if (!to)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter to",
    });

  translate(`${text}`, { to: `${to}` })
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

//MEDIAAAAAAAAA
router.get("/github/stalk", async (req, res, next) => {
  username = req.query.username;
  if (!username)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter username",
    });

  fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/detailuser?q=${username}`))
    .then((response) => response.json())
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});
router.get("/repository/stalk", async (req, res, next) => {
  username = req.query.username;
  if (!username)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan nama repository yang ingin kamu cari",
    });

  fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/searchrepo?q=${username}`))
    .then((response) => response.json())
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/infonpm", async (req, res, next) => {
  query = req.query.query;
  if (!query)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter query",
    });

  fetch(encodeURI(`https://registry.npmjs.org/${query}`))
    .then((response) => response.json())
    .then((data) => {
      var result = data;
      res.json({
        status: true,
        creator: `${creator}`,
        result,
        message: `Eror? lapor ke owner ${creator}`,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

//ANIMEEEEEE

router.get("/couple", async (req, res, next) => {
  fetch(encodeURI(`https://raw.githubusercontent.com/Xorizn/database-api/main/fun/couple.js`))
    .then((response) => response.json())
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/waifu", async (req, res, next) => {
  fetch(encodeURI(`https://api.waifu.pics/nsfw/waifu`))
    .then((response) => response.json())
    .then((data) => {
      var result = data.url;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/googles", async (req, res, next) => {
  query = req.query.query;
  if (!query)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter query",
    });
  googleIt({ query: `${query}` })
    .then((data) => {
      var result = data;
      res.json({
        author: `${creator}`,
        result,
      });
    })
    .catch((e) => {
      res.json(errer.error);
    });
});

router.get("/gis", async (req, res, next) => {
  query = req.query.query;
  if (!query)
    return res.json({
      status: false,
      creator: `${creator}`,
      message: "masukan parameter query",
    });
  gis(`${query}`, logResults);
  function logResults(error, results) {
    if (error) {
      res.json(errer.error);
    } else {
      var hasil = JSON.stringify(results, null, "  ");
      res.json({
        author: `${creator}`,
        hasil,
      });
    }
  }
});

module.exports = router

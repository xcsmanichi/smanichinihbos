__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/home', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/anime', (req, res) => {
    res.sendFile(__path + '/views/anime.html')
})

router.get('/download', (req, res) => {
    res.sendFile(__path + '/views/download.html')
})

router.get('/fun', (req, res) => {
    res.sendFile(__path + '/views/fun.html')
})

router.get('/info', (req, res) => {
    res.sendFile(__path + '/views/info.html')
})

router.get('/media', (req, res) => {
    res.sendFile(__path + '/views/media.html')
})

router.get('/other', (req, res) => {
    res.sendFile(__path + '/views/other.html')
})

router.get('/photooxy', (req, res) => {
    res.sendFile(__path + '/views/photooxy.html')
})

router.get('/baseenc', (req, res) => {
    res.sendFile(__path + '/views/base.html')
})

router.get('/profile', (req, res) => {
    res.sendFile(__path + '/views/pages-profile.html')
})
//download=============>>>>>>>>>>><><><<<≤<<<<<<
router.get('/instagram', (req, res) => {
    res.sendFile(__path + '/views/ig.html')
})

router.get('/twitter', (req, res) => {
    res.sendFile(__path + '/views/twitter.html')
})

router.get('/tik-tok', (req, res) => {
    res.sendFile(__path + '/views/tiktok.html')
})

router.get('/ytmp4', (req, res) => {
    res.sendFile(__path + '/views/ytmp4.html')
})

router.get('/ytmp3', (req, res) => {
    res.sendFile(__path + '/views/ytmp3.html')
})

module.exports = router

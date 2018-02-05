const express = require('express')
const eventproxy = require('eventproxy')
const superagent = require('superagent')
const cheerio = require('cheerio')

// url 模块是 Node.js 标准库里面的
// http://nodejs.org/api/url.html
const url = require('url')
const cnodeUrl = 'https://cnodejs.org/'
const ep = new eventproxy()
const app = express()

app.get('/', function (req,res) {
    superagent.get(cnodeUrl)
        .end(function (err, res) {
            if (err) {
                return console.error(err)
            }
            let topicUrls = []
            let $ = cheerio.load(res.text)
            // 获取首页所有链接
            $('#topic_list .topic_title').each(function (idx, element) {
                let $element = $(element)
                // $element.attr('href') 本来的样子是 /topic/542acd7d5d28233425538b04
                // 我们用 url.resolve 来自动推断出完整 url，变成
                // https://cnodejs.org/topic/542acd7d5d28233425538b04 的形式
                // 具体请看 http://nodejs.org/api/url.html#url_url_resolve_from_to 的示例
                let href = url.resolve(cnodeUrl, $element.attr('href'))
                topicUrls.push(href)
            })
            console.log(topicUrls)
           

            ep.after('topic_html', topicUrls.length, function (topics) {
                topics = topics.map(function (topicPair) {
                    let topicUrl = topicPair[0]
                    let topicHtml = topicPair[1]
                    let $ = cheerio.load(topicHtml)
                    return ({
                        title: $('.topic_full_title').text().trim(),
                        href: topicUrl,
                        comment1: $('.reply_content').eq(0).text().trim(),
                    })
                })
                console.log('final:')
                console.log(topics)
            })

            topicUrls.forEach(function (topicUrl) {
                superagent.get(topicUrl)
                    .end(function (err, res) {
                        console.log('fetch ' + topicUrl + ' successful')
                        ep.emit('topic_html', [topicUrl, res.text])
                    })
            })
        })
})


app.listen(3000, function (req, res) {
    console.log('run 3000')
})
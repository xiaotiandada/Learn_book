const express = require('express')
const app = express()

const superagent = require('superagent');
const cheerio = require('cheerio')

app.get('/',function(req,res,next){
    // 用superagent 去抓取内容
    superagent.get('https://cnodejs.org/')
        .end(function(err, sres){
            // 处理常见的错误
            if(err){
                return next(err)
            }

            // sres.text 储存着网页的html内容 传给cheerio.load
            // 得到一个实现jq接口的变量, 命名为$
            let $ = cheerio.load(sres.text)
            let items = []
            $('#topic_list .topic_title').each(function(idx, element){
                let $element = $(element)
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                })
            })

            res.send(items)
        })
})

app.listen(3000,function(req,res){
    console.log('app run 3000')
})
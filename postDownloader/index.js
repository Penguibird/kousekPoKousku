const fetch = require('node-fetch')
const HTMLParser = require('node-html-parser');
const fs = require('fs');

let html

const folder = '../content/prispevky'

fetch('http://www.kousekpokousku.cz/')
    .then(res => res.text())
    .then(res => {
        html = res


        let root = HTMLParser.parse(html);
        root.querySelectorAll('.news').forEach(el => {
            const post = {
                title: el.querySelector('h2').innerText,
                body: Array.from(el.querySelectorAll('.news-info p')).map(_ => _.innerText)
            }
            await new Promise((res, rej) => { request(uri).pipe(fs.createWriteStream(filename)).on('close', res) });
            fs.mkdirSync(path.join(folder, post.title))
            
        })
    });
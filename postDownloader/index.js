const fetch = require('node-fetch')
const HTMLParser = require('node-html-parser');
const fs = require('fs');
const { EOL } = require('os');
const path = require('path');
const http = require('http');
const Stream = require('stream').Transform;
const moment = require('moment')

let html;

const folder = '../content/aktuality'

fetch('http://www.kousekpokousku.cz/')
    .then(res => res.text())
    .then(res => {
        html = res

        const date = new Date();
        const dateFormat = 'DD-MM-YYYY';
        let root = HTMLParser.parse(html);
        let counter = [];

        root.querySelectorAll('.news').forEach(async (el, i) => {
            const _ = el.querySelector('img').getAttribute('src').split('/');
            const imageFileName = _[_.length - 1];
            const post = {
                title: el.querySelector('h2').innerText.trim(),
                body: Array.from(el.querySelectorAll('.news-info p')).map(_ => _.innerText.trim()).filter(_ => _ && _ != ''),
                link: el.querySelector('a')?.getAttribute('href'),
                date: moment().subtract(i, 'days').format(dateFormat),
                image: {
                    image: imageFileName,
                    imageAlt: el.querySelector('img').getAttribute('alt'),
                }
            }
            el.querySelectorAll('a').length > 0 ? counter.push(post.title) : void (0);
            const postFolder = path.join(folder, post.title.trim().split(' ').join('-'));
            fs.mkdirSync(postFolder);
            const content = `---
name: ${post.title}${post.link ? `${EOL}link: ${post.link}` : ''}
date: ${post.date}
image:
    image: ${imageFileName}
    imageAlt: ${post.image.imageAlt}
---
${post.body.join(EOL + EOL)}
`
            console.log(content)
            fs.writeFileSync(path.join(postFolder, 'index.md'), content, { encoding: 'utf-8' })

            http.request(`http://www.kousekpokousku.cz/${el.querySelector('img').getAttribute('src')}`, function (response) {
                var data = new Stream();

                response.on('data', function (chunk) {
                    data.push(chunk);
                });

                response.on('end', function () {
                    fs.writeFileSync(path.join(postFolder, imageFileName), data.read());
                });
            }).end();
        });
        setTimeout(() => {
            console.log(counter);
        }, 2000)

    });
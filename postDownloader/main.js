const projekty = require('./projekty');
const { v4 } = require('uuid');
const fs = require('fs');
const { EOL } = require('os');
const path = require('path');
const http = require('http');
const Stream = require('stream').Transform;
const moment = require('moment')
const filenamify = require('filenamify');


// {
//     "name": "Magdaléna Feilhauerová Studium střední uměleckoprůmyslové školy\na studium na zahraniční škole",
//     "price": "30 000",
//     "year": 2014,
//     "description": "Tento kousek Magdaléně Feilhauerové navazuje na již tradiční podporu Nadačního fondu talentovaných jedinců z našeho regionu, kteří se navíc aktivně zapojují do místního komunitního života. Díky tomuto příspěvku získá Magdaléna lepší materiální podmínky pro své studium na Střední uměleckoprůmyslové škole v Uherském Hradišti, a bude tak moci zase někdy výtvarně oživit například další zastávku.",
//     "kouskovani": false,
//     "locationname": "Děrné",
//     "lat": 49.0682441047274,
//     "lng": ", 17.46553589838146"
// },

const folder = '../content/projekty'

projekty.forEach((projekt, i) => {
  const postFolder = path.join(folder, filenamify(projekt.name.trim().split(' ').join('-')));
  try {
    fs.mkdirSync(postFolder);

  } catch (error) {
    fs.mkdirSync(postFolder + v4().slice(0, 5));

  }

  const content = `---
id: ${v4()}
title: "${projekt.name.trim().replace("\"", "").replace("'", "")}"
price: ${Number.parseInt(projekt.price.toString().replace(" ", ""))}
year: ${projekt.year.toString().trim()}
description: "${projekt.description?.replace('"', "'")}"
kouskovani: ${!!projekt.kouskovani}
locationName: ${projekt.locationName}
position:
  lng: ${Number.parseFloat(projekt.lng.toString().replace(",", "").trim())}
  lat: ${Number.parseFloat(projekt.lat.toString().replace(",", "").trim())}
---`
  fs.writeFileSync(path.join(postFolder, 'index.md'), content, { encoding: 'utf-8' })

})


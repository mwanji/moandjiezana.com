const fs = require('fs');
const htmlRss = require('../html-rss/index.js');

const rss = htmlRss({ baseUrl: 'https://moandjiezana.com' });
fs.writeFileSync('feed.xml', rss);

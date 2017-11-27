require('babel-register');
const router = require('./siteMapRouter').default;
const Sitemap = require('react-router-sitemap').default;

(
  new Sitemap(router)
    .build('https://servus.vn.ua')
    .save('./sitemap.xml')
);
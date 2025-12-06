/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://юристкемерово.рф",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: "./public",
  // Дополнительные настройки
  changefreq: "daily",
  priority: 1,
  // Альтернативные языки (если используется i18n)
  // i18n: {
  //   locales: ['en', 'ru'],
  //   defaultLocale: 'en',
  // },
};

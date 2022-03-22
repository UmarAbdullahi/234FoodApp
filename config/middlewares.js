module.exports = [
<<<<<<< HEAD
  'strapi::errors',
  {
    name: 'strapi::security',
=======
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
>>>>>>> 6928b0dcff0b37541573ea3df3624fa9b8da0a99
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
<<<<<<< HEAD
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
=======
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
>>>>>>> 6928b0dcff0b37541573ea3df3624fa9b8da0a99
          upgradeInsecureRequests: null,
        },
      },
    },
  },
<<<<<<< HEAD
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
=======
>>>>>>> 6928b0dcff0b37541573ea3df3624fa9b8da0a99
];

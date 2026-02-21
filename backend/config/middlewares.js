module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  { resolve: './src/middlewares/admin-redirect' },
  // { resolve: './src/middlewares/fast-build' },
  {
    name: 'strapi::body',
    config: {
      patchKoa: true,
      multipart: true,
      formLimit: '256mb',
      jsonLimit: '256mb',
      textLimit: '256mb',
      formidable: {
        keepExtensions: true,
      },
    },
  },
];

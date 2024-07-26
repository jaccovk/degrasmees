module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'localhost',
        port: 25,
        ignoreTLS: true,
      },
      settings: {
        defaultFrom: env('MAIL_DEFAULT_FROM'),
        defaultReplyTo: env('MAIL_DEFAULT_REPLY_TO'),
      },
    },
  },
  sitemap: {
    enabled: true,
    config: {
      cron: '0 0 0 * * *',
      limit: 45000,
      xsl: true,
      autoGenerate: true,
      caching: true,
      allowedFields: ['id', 'uid', 'slug', 'url', 'updated_at', 'published_at'],
      excludedTypes: [],
    },
  },
});

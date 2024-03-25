module.exports = ({ env }) => ({
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

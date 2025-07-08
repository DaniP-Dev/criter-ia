const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin({
  // Configuración opcional: puedes especificar los locales soportados y el default
  // locales: ['en', 'es'],
  // defaultLocale: 'es',
  messages: {
    locales: ['en', 'es'],
    path: './messages',
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; img-src 'self' data:; script-src 'self'; style-src 'self' 'unsafe-inline';",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);

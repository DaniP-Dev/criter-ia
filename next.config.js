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
const isProd = process.env.NODE_ENV === 'production';

const csp = isProd
  ? "default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; script-src 'self' 'unsafe-inline'; img-src 'self' data:;"
  : "default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; script-src 'self' 'unsafe-inline'; img-src 'self' data:;";

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: csp,
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

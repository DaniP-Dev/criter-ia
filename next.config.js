const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin({
  messages: {
    locales: ['en', 'es'],
    path: './messages',
  },
});

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const csp = isProd
  ? "default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; script-src 'self' 'unsafe-inline'; worker-src 'self'; img-src 'self' data:;"
  : "default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com; worker-src 'self' blob: https://unpkg.com; img-src 'self' data:;";

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

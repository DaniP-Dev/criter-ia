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
  // Puedes agregar otras opciones de Next.js aquí si lo necesitas
};

module.exports = withNextIntl(nextConfig);

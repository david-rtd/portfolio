// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import node from '@astrojs/node'; // <-- Cambiado: Importamos Node en lugar de Vercel
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Reemplaza con la URL de tu dominio definitivo cuando lo tengas
  site: 'https://example.com',

  // URL configuration
  trailingSlash: 'never', // Removes trailing slashes from URLs

  // Vite configuration
  vite: {
    plugins: [tailwindcss()],
  },

  // Required integrations
  integrations: [
    react(), // Enables React components
    sitemap({
      // Generates sitemap
      serialize: (item) => {
        const url = item.url.endsWith('/') ? item.url.slice(0, -1) : item.url;
        return { ...item, url };
      },
    }),
  ],

  // Deployment configuration
  output: 'server', // Server-side rendering - Requerido para tu API de Cohere
  adapter: vercel(),
  devToolbar: {
    enabled: false,
  },
});

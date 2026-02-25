import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import handlebars from 'vite-plugin-handlebars';
import tailwindcss from '@tailwindcss/vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    tailwindcss(),
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context: {
        labName: 'Лабораторна робота 7',
        siteName: 'Мій проєкт з Tailwind'
      }
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contacts: resolve(__dirname, 'contacts.html')
      }
    }
  }
});
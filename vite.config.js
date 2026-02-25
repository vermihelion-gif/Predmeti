import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import handlebars from 'vite-plugin-handlebars';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context: {
        labName: 'Лабораторна робота 6',
        siteName: 'Мій сайт',
        studentGroup: 'Ваша група',
        studentEmail: 'email@example.com'
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
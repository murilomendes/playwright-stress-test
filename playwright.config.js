import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // Diretório onde estão os testes
  reporter: [
    ['allure-playwright', { outputFolder: './allure-results' }]  // Define o diretório de saída
  ],
  use: {
    headless: true,  // Teste em modo headless
  },
});

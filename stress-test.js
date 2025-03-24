import { chromium } from '@playwright/test';

// Função para executar um teste individual
async function runTest(instance) {
    const browser = await chromium.launch(); // Inicia o navegador
    const page = await browser.newPage();   // Cria uma nova aba

    console.log(`Instância ${instance} iniciada`);

    // Simula navegação e interações
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await page.getByRole('heading', { name: 'Installation' }).isVisible();

    console.log(`Instância ${instance} concluída`);
    await browser.close(); // Fecha o navegador
}

// Executa múltiplos testes simultaneamente
(async () => {
    const numInstances = 5; // Número de instâncias simultâneas
    const tests = [];

    console.time('Teste de Stress');
    for (let i = 0; i < numInstances; i++) {
        tests.push(runTest(i + 1)); // Adiciona cada execução ao array de promises
    }

    await Promise.all(tests); // Executa todas as instâncias em paralelo
    console.timeEnd('Teste de Stress');
})();

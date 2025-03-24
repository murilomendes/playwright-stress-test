import { test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';

async function runTest(instance) {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    console.log(`Instância ${instance} iniciada`);

    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await page.getByRole('heading', { name: 'Installation' }).isVisible();

    console.log(`Instância ${instance} concluída`);
    await browser.close(); 
}

test('Executa múltiplas instâncias simultâneas', async () => {
    const numInstances = 15;
    const tests = [];

    console.time('Teste de Stress');

    for (let i = 0; i < numInstances; i++) {
        tests.push(runTest(i + 1));
    }

    await Promise.all(tests);

    console.timeEnd('Teste de Stress');
});

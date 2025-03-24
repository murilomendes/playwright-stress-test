# Playwright Stress Test with Allure Reporting

This is a Proof of Concept (PoC) to perform stress testing using Playwright and generate reports using Allure. The following steps outline how to set up and execute the tests, along with generating and viewing the reports.

## Prerequisites

1. **Install Allure** (if you don't have it installed):
  ```bash
  brew install allure
  ```
2. Verify Allure installation: After installation, ensure that Allure was installed correctly by checking its version:
  ```bash
  allure --version
  ```

## Running the Stress Test
1. Run Playwright Tests: Execute your Playwright tests using the following command:
  ```bash
    npx playwright test
  ```

2. Generate Allure Report: After running the tests, generate the Allure report:
  ```bash
  allure generate allure-results --output allure-report --clean
  ```

3. Open the Allure Report: Finally, open the Allure report in your browser:
  ```bash
  npx allure open allure-report
  ```

This will launch the Allure dashboard in your default browser, where you can view detailed results of your stress tests.
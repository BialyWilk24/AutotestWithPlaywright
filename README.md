# AutotestWithPlaywright
Инструкция по запуску тестов:

В репозитории есть скачанные файлы, последней версии playwright на момент 09.09.2022, необходимые для запуска тестов, в случае вышли новые версии playwright и node.js выполнить шаги 1 - 2.

1. Скачать файлы с автотестами на свой компьютер
2. Убедиться, что на вашем ПК установлен node.js и playwright
В случае если что-то из этого не установлено - установить.
Установить Playwright можно с помощью следующей команды: npm i -D @playwright/test

3. Запуск всех тестов производится с помощью команды: npx playwright test (для запуска в headed режиме: npx playwright test --headed)
4. Запуск одного тестового файла можно осуществить с помощью команды: npx playwright test <test_file_name> (Например: npx playwright test Books.spec.js)
5. Запуск одного конкретного теста из тестового файла может быть выполнено командой:C:\Testing\AutoTesting\Playwright> npx playwright test <test_file_name> -g "test function name" (Например: npx playwright test Books.spec.js -g "Test\s+search\s+field\s+visible$")




Instructions for running tests:

In the repository there are downloaded files, the latest version of playwright as of 09.09.2022, necessary to run the tests, in case new versions of playwright and node.js came out perform steps 1 - 2.

1. Download the autotest files to your computer
2. Make sure you have node.js and playwright installed on your PC
In case any of these are not installed - install.
You can install Playwright using the following command: npm i -D @playwright/test

3. Run all tests using the command: npx playwright test (to run in headed mode: npx playwright test --headed)
4. A single test file can be run with the command: npx playwright test <test_file_name> (For example: npx playwright test Books.spec.js)
5. Running one specific test from a test file can be done with the command:C:\Testing\AutoTesting\Playwright> npx playwright test <test_file_name> -g "test function name" (For example: npx playwright test Books.spec.js -g "Test\s+search\s+field\s+visible$")
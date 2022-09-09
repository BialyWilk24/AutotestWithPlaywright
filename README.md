# AutotestWithPlaywright
Инструкция по запуску тестов:
1. Скачать файлы с автотестами на свой компьютер
2. Убедиться, что на вашем ПК установлен node.js и playwright
В случае если что-то из этого не установлено - установить.
Установить Playwright можно с помощью следующей команды: npm i -D @playwright/test
3. *Для запуска тестов в headed режиме потребуются двоичные файлы браузеров, которые можно установить с помощью команды: npx playwright install

4. Запуск всех тестов производится с помощью команды: npx playwright test (для запуска в headed режиме: npx playwright test --headed)
5. Запуск одного тестового файла можно осуществить с помощью команды: npx playwright test <test_file_name> (Например: npx playwright test Books.spec.js)
6. Запуск одного кнкретного теста из тестового файла может быть выполнено командой:C:\Testing\AutoTesting\Playwright> npx playwright test <test_file_name> -g "test function name" (Например: npx playwright test Books.spec.js -g "Test\s+search\s+field\s+visible$")




Instructions for running tests:
1. Download the autotest files to your computer
2. Make sure node.js and playwright are installed on your PC
If any of these are not installed - install them.
You can install Playwright using the following command: npm i -D @playwright/test
3. *In order to run the tests in the headed mode, you will need the browsers binaries, which can be installed using the command

4. All tests are run using the command: npx playwright test (to run in headed mode: npx playwright test --headed)
5. A single test file can be run with the command: npx playwright test <test_file_name> (For example: npx playwright test Books.spec.js)
6. Running a single kntest from a test file can be done with the command:C:\Testing\AutoTesting\Playwright> npx playwright test <test_file_name> -g "test function name" (For example: npx playwright test Books.spec.js -g "Test\s+search\s+field\s+visible$")
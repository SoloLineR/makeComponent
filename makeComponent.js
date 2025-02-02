#!/usr/bin/env node
/**
 * Скрипт для создания компонента с файловой структурой:
 * [название]/
 *    [Название].tsx
 *    [название].module.css
 *
 * Использование:
 *   node make-component.js Название [--jsx | -j] [--css | -c] [--functional | -f]
 *   По умолчанию создаётся файл .tsx и .module.css, компонент как стрелочная функция.
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

// Обрабатываем аргументы: отделяем флаги и название компонента
let componentName;
const flags = [];
for (const arg of args) {
  if (arg.startsWith('-')) {
    flags.push(arg);
  } else {
    if (!componentName) {
      componentName = arg;
    } else {
      console.error(`Ошибка: Лишний аргумент "${arg}". Укажите только название компонента и флаги.`);
      process.exit(1);
    }
  }
}

if (!componentName) {
  console.error(
    'Необходимо указать название компонента. Пример: node make-component.js Button --jsx --css'
  );
  process.exit(1);
}

// Определяем флаги
const useJSX = flags.includes('--jsx') || flags.includes('-j'); // По умолчанию TSX
const useCSS = flags.includes('--css') || flags.includes('-c'); // По умолчанию module.css
const useFunction = flags.includes('--functional') || flags.includes('-f');

// Генерируем имена файлов
const cssBaseName = componentName.charAt(0).toLowerCase() + componentName.slice(1);
const componentExt = useJSX ? 'jsx' : 'tsx'; // По умолчанию tsx
const cssExt = useCSS ? 'css' : 'module.css'; // По умолчанию module.css

const componentFileName = `${componentName}.${componentExt}`;
const cssFileName = `${cssBaseName}.${cssExt}`;

// Формируем импорты и класс
let importStatement = `import './${cssFileName}';`;
let classNameUsage = `"${cssBaseName}"`;

if (!useCSS) { // Если используется module.css
  importStatement = `import styles from './${cssFileName}';`;
  classNameUsage = `{styles.${cssBaseName}}`;
}

// Формируем объявление компонента
const functionDeclaration = useFunction
  ? `export function ${componentName}()`
  : `export const ${componentName} = () =>`;

const componentContent = `import React from 'react';
${importStatement}

${functionDeclaration} {
  return (
    <div className=${classNameUsage}>

    </div>
  );
}${useFunction ? '' : ';'}
`;

// Создаем папку и файлы
const targetDir = path.join(process.cwd(), componentName);

if (fs.existsSync(targetDir)) {
  console.error(`Ошибка: Папка "${targetDir}" уже существует.`);
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });
console.log(`Создана папка: ${targetDir}`);

const componentFilePath = path.join(targetDir, componentFileName);
fs.writeFileSync(componentFilePath, componentContent);
console.log(`Создан файл компонента: ${componentFilePath}`);

const cssContent = `.${cssBaseName} {

}
`;

const cssFilePath = path.join(targetDir, cssFileName);
fs.writeFileSync(cssFilePath, cssContent);
console.log(`Создан файл стилей: ${cssFilePath}`);
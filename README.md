# Скрипт для создания React-компонентов

Этот скрипт позволяет быстро создавать структуру React-компонентов с файлами `.tsx` или `.jsx` и стилями `.css` или `.module.css`. Скрипт поддерживает настройку через флаги командной строки.

## Установка

1. **Скопируйте скрипт** в удобную директорию, например, `~/utils` или `~/bin`.

2. **Сделайте скрипт исполняемым**:
   ```bash
   chmod +x ~/utils/makeComponent.js

1.  **Добавьте директорию скрипта в переменную `PATH`**:\
    Откройте файл `~/.zshrc` (или `~/.bashrc`, если используете Bash) и добавьте строку:

    bash

    Copy

    export PATH="$PATH:$HOME/utils"

    Если вы используете другую директорию, измените путь соответственно.

2.  **(Опционально) Создайте алиас** для удобства:\
    Добавьте в `~/.zshrc` строку:

    bash

    Copy

    alias makeComponent="makeComponent.js"

3.  **Примените изменения**:\
    Выполните команду:

    bash

    Copy

    source ~/.zshrc

Использование
-------------

Скрипт принимает следующие аргументы:

-   **Название компонента**: Обязательный аргумент. Указывает имя компонента и папки, в которой будут созданы файлы.

-   **Флаги**:

    -   `--jsx` или `-j`: Использовать `.jsx` вместо `.tsx` (по умолчанию `.tsx`).

    -   `--css` или `-c`: Использовать обычный `.css` вместо `.module.css` (по умолчанию `.module.css`).

    -   `--functional` или `-f`: Создать компонент как функцию, а не как стрелочную функцию (по умолчанию стрелочная функция).

### Примеры использования

1.  Создание компонента с настройками по умолчанию:

    bash

    Copy

    makeComponent Button

    Создаст папку `Button` с файлами `Button.tsx` и `button.module.css`.

2.  Создание компонента с использованием `.jsx` и обычного `.css`:

    bash

    Copy

    makeComponent Button --jsx --css

    Создаст папку `Button` с файлами `Button.jsx` и `button.css`.

3.  Создание функционального компонента:

    bash

    Copy

    makeComponent Button --functional

    Создаст папку `Button` с файлами `Button.tsx` и `button.module.css`, где компонент будет объявлен как функция.

Структура создаваемых файлов
----------------------------

-   **Папка компонента**: Название папки совпадает с именем компонента.

-   **Файл компонента**: `[Название].tsx` или `[Название].jsx`.

-   **Файл стилей**: `[название].module.css` или `[название].css`.

### Пример содержимого файла компонента

tsx

Copy

import React from 'react';
import styles from './button.module.css';

export const Button = () => {
  return (
    <div className={styles.button}>  {/* Ваш код */}  </div>
  );
};

### Пример содержимого файла стилей

css

Copy

.button {
  /* Ваши стили */
}

Лицензия
--------

Этот проект распространяется под лицензией MIT. Подробности см. в файле [LICENSE](https://chat.deepseek.com/a/chat/s/LICENSE).

* * * * *

Если у вас есть вопросы или предложения, создайте issue или свяжитесь со мной через [GitHub](https://github.com/%D0%B2%D0%B0%D1%88-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C).

Copy

Этот `README.md` содержит инструкции по установке, использованию и примеры работы с вашим скриптом. Вы можете адаптировать его под свои нужды.
## Шаг 1. Разместите скрипт в удобном месте
Выберите или создайте директорию для хранения скриптов (например, ~/utils или ~/bin).
Скопируйте (или переместите) файл вашего скрипта (например, makeComponent.js) в выбранную директорию.
## Шаг 2. Сделайте скрипт исполняемым (если ещё не сделано)
На Linux или macOS выполните в терминале команду:

```bash

chmod +x ~/utils/makeComponent.js
Это позволит запускать его как команду.
```
## Шаг 3. Откройте файл ~/.zshrc для редактирования
 
Откройте файл ~/.zshrc в редакторе, например:
 
```bash
nano ~/.zshrc
или используйте любой другой текстовый редактор (например, VS Code, vim и т.д.).
```
## Шаг 4. Добавьте директорию скрипта в переменную PATH
В конце файла ~/.zshrc добавьте следующую строку (обязательно укажите путь к директории, где лежит скрипт):

```bash

export PATH="$PATH:$HOME/utils"
```
Если вы использовали другую директорию (например, ~/bin), измените строку соответственно:
```bash
export PATH="$PATH:$HOME/bin"
Примечание: Если путь до скрипта уже входит в переменную PATH, этот  шаг можно пропустить.
```
## Шаг 5. (Опционально) Создайте алиас для удобства
Чтобы не вводить весь путь или имя файла, можно добавить алиас. Например, добавьте в ~/.zshrc следующую строку:

```bash

alias makeComponent="makeComponent.js"
Теперь для запуска скрипта достаточно будет набрать:



makeComponent Button 
```
## Шаг 6. Сохраните изменения и перезагрузите конфигурацию
После внесения нужных изменений сохраните файл и закройте редактор.

Чтобы изменения вступили в силу, выполните команду:

```bash

source ~/.zshrc
или просто закройте терминал и откройте его снова.
``` 
## Шаг 7. Проверьте работу
Перейдите в рабочую директорию, где хотите создать компонент, и выполните команду:

```bash

makeComponent Button 
Если вы не создали алиас, можно запускать так:

``` 

makeComponent.js Button  
Если всё сделано правильно, скрипт выполнится и создаст папку с файлом компонента и файлом стилей.# Установка и настройка скрипта makeComponent.js

 

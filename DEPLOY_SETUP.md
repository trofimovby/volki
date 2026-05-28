# Настройка автоматического деплоя через FTP (HestiaCP)

## Шаг 1: Получи данные FTP от HestiaCP

Зайди в панель HestiaCP и получи FTP данные:

1. Открой HestiaCP (обычно https://твой-сервер:8083)
2. Перейди в раздел **WEB** → выбери свой домен
3. Во вкладке **FTP** найди или создай FTP аккаунт

Тебе нужны:
- **FTP_SERVER** - адрес сервера (обычно IP сервера или домен)
- **FTP_USERNAME** - имя пользователя FTP (обычно формата: user_domain)
- **FTP_PASSWORD** - пароль FTP
- **DOMAIN_NAME** - имя твоего домена (например: example.com)

## Шаг 2: Добавь секреты в GitHub

1. Открой свой репозиторий на GitHub
2. Перейди в **Settings** → **Secrets and variables** → **Actions**
3. Нажми **New repository secret** и добавь четыре секрета:

   **FTP_SERVER**
   ```
   Значение: IP адрес или домен сервера (например: 123.45.67.89)
   ```

   **FTP_USERNAME**
   ```
   Значение: твой FTP логин (обычно user_domain формат)
   ```

   **FTP_PASSWORD**
   ```
   Значение: твой FTP пароль
   ```

   **DOMAIN_NAME**
   ```
   Значение: имя домена (например: example.com)
   ```

## Шаг 3: Структура папок в HestiaCP

HestiaCP использует структуру: `/home/user/web/domain.com/public_html/`

Workflow настроен на путь `/public_html/DOMAIN_NAME/` - это правильный путь для HestiaCP.

## Шаг 4: Запуш изменения

После того как добавишь секреты в GitHub:

```bash
git add .github/workflows/deploy.yml DEPLOY_SETUP.md
git commit -m "Setup FTP deployment for HestiaCP"
git push origin main
```

Деплой запустится автоматически! Проверить статус можно во вкладке **Actions** в репозитории на GitHub.

## Как это работает

- При каждом `git push` в ветку `main` GitHub Actions автоматически загружает все файлы на сервер через FTP
- Файлы загружаются в `/public_html/твой-домен/`
- Исключаются служебные папки (.git, .github, node_modules, archive)
- Весь процесс виден во вкладке Actions на GitHub

## Возможные проблемы

**Если деплой не работает:**
- Проверь правильность FTP данных в GitHub Secrets
- Убедись что FTP аккаунт активен в HestiaCP
- Проверь что DOMAIN_NAME указан без www (например: example.com, а не www.example.com)
- Проверь логи во вкладке Actions на GitHub

**Если нужен SFTP вместо FTP:**
- HestiaCP поддерживает SFTP на порту 22
- Можно использовать те же данные, но через SFTP протокол

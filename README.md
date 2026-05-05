# VOLKI - Территория вашей силы

Лендинг для банного комплекса VOLKI.

## Структура проекта

```
volki/
├── home.html                           # Главная страница
├── css/                                # Стили
│   ├── home-styles.css                 # Основные стили страницы
│   └── sections/                       # Стили для секций
│       └── territory-section.css       # Стили секции "Территория"
├── js/                                 # Скрипты
│   └── home-script.js                  # Основной скрипт (FAQ, меню, навигация)
├── assets/                             # Ресурсы
│   └── images/                         # Все изображения проекта
├── sections/                           # HTML секций (для разработки)
│   └── territory-section.html          # Отдельная секция территории
├── components/                         # Переиспользуемые компоненты (пусто)
└── archive/                            # Архив старых файлов
    ├── oldindex.html
    ├── styles.css
    └── ...

```

## Технологии

- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript
- Google Fonts: Cormorant Garamond, Manrope

## Шрифты

- **Cormorant Garamond Medium (500)** - заголовки
- **Cormorant Garamond Medium Italic (500)** - акцентные заголовки
- **Manrope Regular (400)** - основной текст
- **Manrope Bold (700)** - кнопки, акценты

## Секции

1. Hero - главный экран
2. Больше, чем баня
3. Территория, VOLKI - карта локаций
4. Новые локации
5. Как проходит отдых
6. Бани (Этнос, Шале, Знахарь)
7. FAQ
8. Footer

## Запуск

Просто откройте `home.html` в браузере.

## Разработка

Для локального сервера:
```bash
python3 -m http.server 8000
```

Затем откройте http://localhost:8000/home.html

# Секция "Территория VOLKI" - Модульная структура

## Описание

Секция "Территория VOLKI" вынесена в отдельные файлы для удобства повторного использования и поддержки.

## Файлы

### 1. `territory-section.html`
Полноценная HTML-страница с секцией, которую можно:
- **Открыть отдельно в браузере** для просмотра и редактирования
- **Подключить в другие страницы** через JavaScript

Содержит:
- Заголовок и описание
- Две карточки локаций (Юхновка и Жуковка)
- Интерактивную карту с маркерами
- Встроенные базовые стили для автономного просмотра

### 2. `territory-section.css`
Стили секции включают:
- Grid-layout для адаптивного расположения
- Стили карточек локаций
- Стили маркеров на карте
- Responsive дизайн для мобильных устройств

### 3. Подключение в `home.html`
```html
<!-- В <head> -->
<link rel="stylesheet" href="territory-section.css">

<!-- В <body> где нужна секция -->
<div id="territory-section-container"></div>
```

### 4. Загрузка через JavaScript в `home-script.js`
```javascript
// Автоматическая загрузка при загрузке страницы
fetch('territory-section.html')
    .then(response => response.text())
    .then(html => {
        // Извлекаем только секцию без html/body тегов
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const section = doc.querySelector('section');
        if (section) {
            document.getElementById('territory-section-container').innerHTML = section.outerHTML;
        }
    });
```

## Просмотр секции отдельно

Просто откройте `territory-section.html` в браузере - файл содержит все необходимые теги и стили для автономного просмотра.

## Использование на других страницах

Чтобы использовать секцию на другой странице:

1. Подключите CSS файл:
```html
<link rel="stylesheet" href="territory-section.css">
```

2. Добавьте контейнер:
```html
<div id="territory-section-container"></div>
```

3. Добавьте JavaScript для загрузки:
```javascript
fetch('territory-section.html')
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const section = doc.querySelector('section');
        if (section) {
            document.getElementById('territory-section-container').innerHTML = section.outerHTML;
        }
    });
```

## Структура секции

```
territory-section/
├── Заголовок "Территория, VOLKI"
├── Описание
├── Карточки локаций
│   ├── Юхновка
│   │   ├── Фото
│   │   ├── Название с иконкой
│   │   ├── Расстояние от Минска
│   │   ├── Описание
│   │   ├── Характеристики (бани, человек, площадь)
│   │   └── Кнопка "Подробнее"
│   └── Жуковка (аналогично)
└── Карта с маркерами
    ├── Маркер Юхновка
    └── Маркер Жуковка
```

## Адаптивность

- **Desktop (>1200px)**: Grid 2 колонки (карточки слева, карта справа)
- **Tablet (768-1200px)**: Grid 1 колонка (все элементы друг под другом)
- **Mobile (<768px)**: Карточки в колонку, уменьшенные маркеры

## Редактирование контента

### Изменить текст локации:
Отредактируйте `territory-section.html`, найдите нужную карточку и измените:
- `<h3>` - название локации
- `.location-distance` - расстояние
- `.location-description` - описание
- `.feature-item span` - характеристики

### Изменить изображения:
Замените пути к изображениям в `territory-section.html`:
- `figma-exports/yukhnovka-photo.png`
- `figma-exports/zhukovka-photo.png`
- `figma-exports/territory-map-bg.png`

### Изменить стили:
Отредактируйте `territory-section.css`:
- Цвета, размеры шрифтов
- Отступы и размеры элементов
- Позиции маркеров на карте

## Зависимости

Секция использует общие стили из `home-styles.css`:
- `.container` - контейнер с максимальной шириной
- `.section-title` - стили заголовков
- Шрифты: Cormorant Garamond, Manrope

Убедитесь, что эти стили подключены на странице.

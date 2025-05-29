// Изначально устанавливаем темную тему
const body = document.body;
const themeButton = document.getElementById('theme-toggle');
const langButton = document.getElementById('lang-toggle');
const title = document.getElementById('title');
const intro = document.getElementById('intro');

let currentTheme = 'dark'; // или 'light'
let currentLanguage = 'ru'; // или 'en'

// Функция переключения темы
function toggleTheme() {
    if (currentTheme === 'dark') {
        currentTheme = 'light';
        body.classList.remove('dark');
        body.classList.add('light');
        themeButton.textContent = 'Переключить тему'; // Можно оставить так или изменить
    } else {
        currentTheme = 'dark';
        body.classList.remove('light');
        body.classList.add('dark');
        themeButton.textContent = 'Переключить тему';
    }
}

// Функция переключения языка
function toggleLanguage() {
    if (currentLanguage === 'ru') {
        currentLanguage = 'en';
        title.textContent = 'Welcome to my page';
        intro.textContent = 'This is my personal page. Here you can find information about me.';
        langButton.textContent = 'Русский';
        document.documentElement.lang = 'en';
    } else {
        currentLanguage = 'ru';
        title.textContent = 'Добро пожаловать на мою страницу';
        intro.textContent = 'Это моя личная страница. Здесь вы можете найти информацию обо мне.';
        langButton.textContent = 'English';
        document.documentElement.lang = 'ru';
    }
}

// Обработчики событий
themeButton.addEventListener('click', toggleTheme);
langButton.addEventListener('click', toggleLanguage);

// Инициализация начального состояния
// Можно установить начальную тему и язык при загрузке страницы, если нужно
body.classList.add(currentTheme);

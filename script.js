// Скрипт для переключения темы
const button = document.getElementById('changeThemeBtn');

button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

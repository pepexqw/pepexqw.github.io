// Массив проектов
const projects = [
  { name: "Персональный сайт", description: "Мой первый личный сайт на HTML и CSS." },
  { name: "Todo App", description: "Приложение для управления задачами на JavaScript." },
  { name: "Блог", description: "Создание блога с использованием React." }
];

// Получаем элементы
const loadBtn = document.getElementById('loadProjectsBtn');
const projectList = document.getElementById('project-list');

// Обработчик клика по кнопке
loadBtn.addEventListener('click', () => {
  // Очищаем список перед добавлением новых элементов
  projectList.innerHTML = '';

  projects.forEach(project => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
      projectList.appendChild(li);
  });

  // Можно скрыть кнопку после загрузки проектов
  loadBtn.style.display = 'none';
});

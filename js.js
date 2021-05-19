// Кнопка добавления пар
const addField__Button = document.getElementById('add-field'),
    // Ввод пар 	  
    pairInput = document.getElementById('pair-input'),
    // Контейнер пар 	  
    listboxContainer = document.querySelector('.container'),
    // Кнопка сортировки по имени  
    sortByName__Button = document.getElementById('sort-by-name'),
    // Кнопка сортировки по значению
    sortByValue__Button = document.getElementById('sort-by-value'),
    // Кнопка очистки контейнера пар
    clearListboxContainer__Button = document.getElementById('clear-listbox');

// Навешиваю обработчик события по клику на кнопку добавления поля
addField__Button.addEventListener('click', () => {
    // Если нету знака равно
    if (!/[=]{1}/.test(pairInput.value)) {
        // То мы говорим что его нету =)		
        alert("Необходимо ввести знак =");
    } else {
        // Иначе создаём новый параграф (пара ключ/значение) 		
        listboxContainer.insertAdjacentHTML('beforeend', `
			<p data-name="${pairInput.value.split("=")[0]}" data-value="${pairInput.value.split("=")[1]}">${pairInput.value.split("=")[0]}=${pairInput.value.split("=")[1]}</p>
		`);
        // И очищаем значение инпута		
        pairInput.value = "";
    }
});

// Навешиваю обработчик события по клику на кнопку сортировки по имени
sortByName__Button.addEventListener('click', () => {
    // Проверяю есть ли что сортировать в контейнере, или там всего один параграф
    if (listboxContainer.querySelectorAll('p').length > 1) {
        // Если параграфов больше 1, тогда:
        // Создал массив для текущих параграфов
        let arr = [];
        // Нахожу в контейнере параграфы
        listboxContainer.querySelectorAll('p').forEach(p => {
            // Добавляю в массив параграфы
            arr.push(p);
            // Удаляю из контейнера
            p.remove();
        });
        //  Сортирую массив с параграфами по Имени
        arr.sort((a, b) => {
            if (a.dataset.name > b.dataset.name) {
                return 1;
            }
            if (a.dataset.name < b.dataset.name) {
                return -1;
            }
        });
        // Добавляю отсортированные параграфы на страницу
        arr.forEach(item => {
            listboxContainer.insertAdjacentElement('beforeend', item);
        });

    } else {
        alert("Нечего сортировать!");
    }
});

// Навешиваю обработчик события по клику на кнопку сортировки по значению
sortByValue__Button.addEventListener('click', () => {
    // Проверяю есть ли что сортировать в контейнере, или там всего один параграф
    if (listboxContainer.querySelectorAll('p').length > 1) {
        // Если параграфов больше 1, тогда:
        // Создал массив для текущих параграфов
        let arr = [];
        // Нахожу в контейнере параграфы
        listboxContainer.querySelectorAll('p').forEach(p => {
            // Добавляю в массив параграфы
            arr.push(p);
            // Удаляю из контейнера
            p.remove();
        });
        //  Сортирую массив с параграфами по Значению
        arr.sort((a, b) => {
            if (a.dataset.value > b.dataset.value) {
                return 1;
            }
            if (a.dataset.value < b.dataset.value) {
                return -1;
            }
        });
        // Добавляю отсортированные параграфы на страницу
        arr.forEach(item => {
            listboxContainer.insertAdjacentElement('beforeend', item);
        });

    } else {
        alert("Нечего сортировать!");
    }
});

// Навешиваю обработчик события по клику на кнопку очищения контейнера
clearListboxContainer__Button.addEventListener('click', () => {
    // Если в контейнере нет параграфов, тогда уведомляем юзера что как-бы нечего тут удалять =)
    if (listboxContainer.querySelectorAll('p').length == 0) {
        alert("Контейнер пуст!");
    } else {
        // А если есть параграфы в контейнере, тогда удаляем все найденные, даже если 1
        listboxContainer.querySelectorAll('p').forEach(p => p.remove());
    }
});
// Конец =)
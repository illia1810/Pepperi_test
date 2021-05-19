const addField__Button = document.getElementById('add-field'),
    pairInput = document.getElementById('pair-input'),
    listboxContainer = document.querySelector('.container'),
    sortByName__Button = document.getElementById('sort-by-name'),
    sortByValue__Button = document.getElementById('sort-by-value'),
    clearListboxContainer__Button = document.getElementById('clear-listbox');

addField__Button.addEventListener('click', () => {
    if (!/[=]{1}/.test(pairInput.value)) {
        alert("Put =");
    } else {
        listboxContainer.insertAdjacentHTML('beforeend', `
			<p data-name="${pairInput.value.split("=")[0]}" data-value="${pairInput.value.split("=")[1]}">${pairInput.value.split("=")[0]}=${pairInput.value.split("=")[1]}</p>
		`);
        pairInput.value = "";
    }
});

sortByName__Button.addEventListener('click', () => {
    if (listboxContainer.querySelectorAll('p').length > 1) {
        let arr = [];
        listboxContainer.querySelectorAll('p').forEach(p => {
            arr.push(p);
            p.remove();
        });
        arr.sort((a, b) => {
            if (a.dataset.name > b.dataset.name) {
                return 1;
            }
            if (a.dataset.name < b.dataset.name) {
                return -1;
            }
        });
        arr.forEach(item => {
            listboxContainer.insertAdjacentElement('beforeend', item);
        });

    } else {
        alert("Nothing to sort!");
    }
});

sortByValue__Button.addEventListener('click', () => {
    if (listboxContainer.querySelectorAll('p').length > 1) {
        let arr = [];
        listboxContainer.querySelectorAll('p').forEach(p => {
            arr.push(p);
            p.remove();
        });
        arr.sort((a, b) => {
            if (a.dataset.value > b.dataset.value) {
                return 1;
            }
            if (a.dataset.value < b.dataset.value) {
                return -1;
            }
        });
        arr.forEach(item => {
            listboxContainer.insertAdjacentElement('beforeend', item);
        });

    } else {
        alert("Nothing to sort!");
    }
});

clearListboxContainer__Button.addEventListener('click', () => {
    if (listboxContainer.querySelectorAll('p').length == 0) {
        alert("Container is clear!");
    } else {
        listboxContainer.querySelectorAll('p').forEach(p => p.remove());
    }
});
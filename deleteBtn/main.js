const body = document.body;
const ul = document.querySelector('#my-list')

function addElement() {
    const input = document.querySelector('#input');
    const listOfElements = document.createElement('listOfElements');

    listOfElements.innerText = input.value;

    const btnDelete = document.createElement('button');
    btnDelete.innerText = 'Delete';
    btnDelete.onclick = function() {
        listOfElements.parentNode.removeChild(listOfElements);
        btnDelete.parentNode.removeChild(btnDelete)
    };

    ul.appendChild(listOfElements);
    ul.appendChild(btnDelete);


    input.value = '';

    
}



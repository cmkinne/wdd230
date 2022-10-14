const input = document.querySelector("input")
const button = document.querySelector("button")
const list = document.querySelector("ul")


button.addEventListener('click', () => {
    const favBook = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = favBook;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'X';
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
      list.removeChild(listItem);
    });

    input.focus();
});
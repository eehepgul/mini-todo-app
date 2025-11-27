const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', function() {
    const taskText = input.value.trim();
    if (taskText === "") return; // Boş görev eklenmesini engelle

    const li = document.createElement('li');

    // Checkbox ekle
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);

    // Görev yazısını ekle
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // Silme butonu ekle
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Sil';
    li.appendChild(deleteBtn);

    // Silme işlevi
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    todoList.appendChild(li);
    input.value = ""; // Inputu temizle
});

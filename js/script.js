const cloneTaskModel = () => { //const(constante) eh esopo de um bloco, semelhante as variaveis declaradas com let. O valor de const nao pode ser alterado por uma atribuicao e nem redeclarada
    const taskModel = document.querySelector('.models .todo__listItem');//querySelector  eh um metodo que retorna o primeiro elemento junto do documento especificado no CSS, ou um grupo de seletores CSS. If nao dao match, retornam null 
    const taskModelClone = taskModel.cloneNode(true); 
    return taskModelClone; 
}

const setTaskContent = (task, value) => {
    const textTask = task.querySelector('.todo__listText'); 
    textTask.textContent = value; 
}

const setTaskOnScreen = () => {
    const input = document.querySelector('.todo__searchInput'); 
    const value = input.value.trim();
    if (value !== ''){
        const task = cloneTaskModel(); 
        setTaskContent(task, value); 
        document.querySelector('.todo__list').appendChild(task); 
        input.value = ''; 
        addDoneTaskListener(); 
    }
}

const doneTaskListener = (item) => {
    const input = item.querySelector('.input');
    const text = item.querySelector('.todo__listText');
    input.addEventListener('change', (event) => {
        text.style.textDecoration = event.target.checked ? 'line-through' : 'none';
    });
}

const addDoneTaskListener = () => {
    document.querySelectorAll('.todo__listItem').forEach(item => doneTaskListener(item));
}

document.querySelector('.todo__searchInput').addEventListener('keyup', (event) => {
    if (event.code === 'Enter') setTaskOnScreen(); 
});

document.querySelector('.todo__searchIcon').addEventListener('click', setTaskOnScreen); 
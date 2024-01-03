const inputEl = document.getElementById('input')
const formEl = document.getElementById('form')
const todoUl = document.getElementById('todos')
const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => addToDo(todo))
}


formEl.addEventListener('submit',(e)=>{
    e.preventDefault()
    addToDo()

})

function addToDo(todo){
    let todoText = inputEl.value
    if(todo){
        todoText = todo.text
    }
    if(todoText){
        const todoEl = document.createElement('li')

        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }
        todoEl.innerText = todoText

        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('completed')
            updateLS()
        })
        todoEl.addEventListener('contextmenu',(e)=>{
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })

        todoUl.appendChild(todoEl)
        inputEl.value = ''

        updateLS()
    }
}


function updateLS(){
    todosEl = document.querySelectorAll('li')

    const todos = []
    todosEl.forEach(todoEled =>{
        todos.push({

            text: todoEled.innerText,
            completed: todoEled.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}
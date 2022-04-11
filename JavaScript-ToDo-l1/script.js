let ulDOM = document.querySelector('#todoList')
let inputDOM = document.querySelector('#input')
let buttonDOM = document.querySelector('#button')

// Yapılacaklar Listesi!
let todoList = [
    { 'todoText': 'Task 1', 'completed': false },
    { 'todoText': 'Task 2', 'completed': false },
    { 'todoText': 'Task 3', 'completed': false },
    { 'todoText': 'Task 4', 'completed': false },
    { 'todoText': 'Task 5', 'completed': false },
]

//Listeyi LocalStorage'a kaydetme!
let saveList = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
}

// Yapılacaklar listesini ul içine yazdırma.
let todoMap = () => {
    todoList.map(item => {
        let liDOM = document.createElement('li')
        liDOM.innerHTML = item.todoText
        liDOM.classList.add('todoItem')
        ulDOM.append(liDOM)
        console.log(item.todoText)
    })
}

todoMap()

// Yeni Yapılacakları Listeye Ekleme!
buttonDOM.addEventListener('click', () => {
    let todoText = inputDOM.value
    if (todoText) {
        todoList.push({ 'todoText': todoText, 'completed': false })
        inputDOM.value = ''
        // Listenin tekrar etmemesi için.
        ulDOM.innerHTML = ''
        todoMap()
    } else {
        alert('Lütfen bir yapılacak ekleyiniz!')
    }
    saveList()
})

// Yapıldı olarak işaretleme
ulDOM.addEventListener('click', (e) => {
    if (e.target.classList.contains('todoItem')) {
        e.target.classList.toggle('completed')
        todoList.map(item => {
            if (item.todoText === e.target.innerHTML) {
                item.completed = !item.completed
            }
        })
        saveList()
    }
})

// Yapılanları listeden kaldırma
ulDOM.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('todoItem')) {
        todoList.map((item, index) => {
            if (item.todoText === e.target.innerHTML) {
                todoList.splice(index, 1)
            }
        })
        ulDOM.innerHTML = ''
        todoMap()
        saveList()
    }
})
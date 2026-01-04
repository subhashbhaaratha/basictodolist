window.onload = function () {
    let newTask = document.getElementById('newTask')
    let addTask = document.getElementById('addTask')
    let todolist = document.getElementById('todolist')
    addTask.onclick = function () {
        let li = document.createElement('li')

        let Btn = document.createElement('Btn')
        Btn.innerText = '✖️'
        Btn.onclick = function (event) {
            event.target.parentElement.remove()
        }
        let upBtn = document.createElement('upBtn')
        upBtn.innerText = '⬆️'
        upBtn.onclick = function (event) {

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement,
                event.target.parentElement.previousElementSibling
            )
        }
        let dnBtn = document.createElement('dnBtn')
        dnBtn.innerText = '⬇️'
        dnBtn.onclick = function (event) {

            event.target.parentElement.parentElement.insertBefore(

                event.target.parentElement.nextElementSibling, event.target.parentElement
            )
        }

        let taskSpan = document.createElement('span')
        taskSpan.innerText = newTask.value

        li.appendChild(Btn)
        li.appendChild(upBtn)
        li.appendChild(dnBtn)

        li.appendChild(taskSpan)
        todolist.appendChild(li)

    }




}
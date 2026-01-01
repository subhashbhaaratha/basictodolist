window.onload = function () {
    let newTask = document.getElementById('newTask')
    let addTask = document.getElementById('addTask')
    let todolist = document.getElementById('todolist')
 addTask.onclick=function(){
    let li=document.createElement('li')
    li.innerText=newTask.value
    todolist.appendChild(li)
 }




}
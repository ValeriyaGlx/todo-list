
let chatContainer = document.querySelector('.todo__task-field')
let items = chatContainer.children
let todoInput = document.querySelector('.todo__input')
let taskTemplate =  document.querySelector('#task-template').content;
let newItemTemplate = taskTemplate.querySelector('.todo__task');
let addNewTaskButton = document.querySelector('.todo__buttom');
let todoWarning = document.querySelector('.todo__empty-tasks');
let todoWarningAddTask = document.querySelector('.todo__no-tasks')

addNewTaskButton.addEventListener('click', createTask)


function createTask (){

  let taskText = todoInput.value;

  if (taskText){
    let newTask = newItemTemplate.cloneNode(true);
    let taskDescription = newTask.querySelector('.todo__task-text');
    taskDescription.textContent = taskText;
    chatContainer.appendChild(newTask)
    todoInput.value =''
    todoWarning.classList.add('hidden')
    todoWarningAddTask.classList.add('hidden')
    
    deleteMessage(newTask)
    checkMessage(newTask)
  } else { todoWarning.classList.remove('hidden')

}}


function deleteMessage (item){
    let deleteButton = item.querySelector('.todo__task-delete')
    deleteButton.addEventListener('click', function () {
     item.remove()
     sayTodoEmpty ()
     }

)}


function checkMessage (item){
  let  taskCheckbox = item.querySelector('.todo__task-checkbox')
  taskCheckbox.addEventListener('change', function (){
  item.classList.add('todo__check');

 
})}


 function sayTodoEmpty (){
if (items.length===1){
  
todoWarningAddTask.classList.remove('hidden')
todoWarning.classList.add('hidden')
}}


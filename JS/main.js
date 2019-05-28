loadEvents();
// load every event in the page
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  document.querySelector('ul').addEventListener('click',deleteOrCheck);
}

// welcome message to user
var user = window.localStorage.getItem("nama")
document.getElementById("warning2").innerHTML='Welcome, '+user+'. What are you Going To Do Today ?'

// submit data function
function submit(listToDo){
  listToDo.preventDefault();
  var input = document.querySelector('input');
  if(input.value != ''){
    addTask(input.value);
  }
  input.value = '';
}

// add tasks
function addTask(task){
  var ul = document.querySelector('ul');
  var li = document.createElement('li');
  li.innerHTML = `<span class="delete">delete</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
  storeList(li.innerHTML)
}

// delete or Check
function deleteOrCheck(listToDo){
  if(listToDo.target.className == 'delete')
    deleteTask(listToDo);
  else {
    checkTask(listToDo);
  }
}

// delete task
function deleteTask(listToDo){
  var remove = listToDo.target.parentNode;
  var parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

// check a task
function checkTask(listToDo){
  var task = listToDo.target.nextSibling;
  if(listToDo.target.checked){
    // task.style.textDecoration = "line-through";
    task.style.backgroundColor = "green";
    task.style.color = "white";
  }else {
    // task.style.textDecoration = "none";
    task.style.backgroundColor = "transparent";
    task.style.color = "white";
  }
}

// clear the LIST
function clearList(listToDo){
  var ul = document.querySelector('ul').innerHTML = '';
}

// store the Todo list in local storage
function storeList(input){
  var str = JSON.stringify(input);
  window.localStorage.setItem("todos", str);
}

// // get the Todo list form local storage
// function getList(){
//   var str = window.localStorage.getItem("todos");
//   console.log(str, typeof str)
// }
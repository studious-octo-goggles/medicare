
   var todo =["bhoo", "hdsdjsh"];
   console.log(todo[1]);
   var completed=["y","2", "0"];
console.log("...........................");
 

console.log(JSON.parse(localStorage.getItem('todoList')));
console.log("...........................");

var removeImg = '<img src="http://localhost:4000/removeSignPic" alt="remove">';
var completeImg = '<img src="http://localhost:4000/completeSignPic" alt="complete">';
var uncompleteImg ='<img src="http://localhost:4000/uncompleteSignPic" alt="uncomplete">';

renderTodoList();

document.getElementById('add').addEventListener('click', function(){
    var value = document.getElementById('item').value;
    if(value) {
        addItem(value);
       /* addItemTodo(value);
        document.getElementById('item').value='';
      
        data.todo.push(value);
        dataObjectUpdated();*/
    }
});
document.getElementById('item').addEventListener('keydown', function(e){
    var value = this.value;
    if(e.code === 'Enter' && value){
        addItem(value);
    }
});

function addItem (value) {
    addItemTodo(value);
    document.getElementById('item').value = '';
  
    data.todo.push(value);
    dataObjectUpdated();
  }

function addItemTodo(text,completed){
     var list=(completed)?document.getElementById('completed'):document.getElementById('todo');
     console.log("basss ye dekhooo" + list.id);
     var item = document.createElement('li');
     item.innerText = text;
     console.log(item.innerText);

     var buttons = document.createElement('div');
     buttons.classList.add('buttons');

     var remove = document.createElement('button');
     remove.classList.add('remove');
     remove.innerHTML = removeImg;
     remove.addEventListener('click',removeItem);
    
    var complete = document.createElement('button');
    complete.classList.add('complete');
    if(list.id === 'todo'){
        complete.innerHTML = uncompleteImg;
    }else{
        complete.innerHTML = completeImg;
    }
    complete.onclick = function(){
        if(complete.innerHTML == uncompleteImg){
            complete.innerHTML = completeImg;  
        }else{
            complete.innerHTML = uncompleteImg;  
        }
    };
    complete.addEventListener('click',completeItem);
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons); 
    list.insertBefore(item,list.childNodes[0]);
}

function removeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;
    if(id ==='todo'){
        data.todo.splice(data.todo.indexOf(value), 1);
    }else{
        data.completed.splice(data.todo.indexOf(value), 1);
    }
    dataObjectUpdated();
    parent.removeChild(item);
}
function completeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value= item.innerText;
    if(id ==='todo'){
        data.todo.splice(data.todo.indexOf(value), 1);
        data.completed.push(value);   
    }else{
        data.completed.splice(data.todo.indexOf(value), 1);
        data.todo.push(value);
    }
    dataObjectUpdated();
    // it's a todo task to be completed or re-done
    var target= (id ==='todo')?document.getElementById('completed'):document.getElementById('todo');
    parent.removeChild(item);
    target.insertBefore(item,target.childNodes[0]);
}
function dataObjectUpdated(){
    console.log(data);
    console.log(JSON.stringify(data));
    localStorage.setItem('todoList', JSON.stringify(data));
}

function renderTodoList(){
    if(!todo.length && !completed.length) return;

    for(var i=0; i<todo.length ; i++){
     var value = todo[i];
     addItemTodo(value,false);
    }
    for(var j=0; j<completed.length; j++){
        var value = completed[j];
        addItemTodo(value,true);
       }
}

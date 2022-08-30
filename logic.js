var tasks=[];//we store all task's object in side the this array
const a=document.getElementById('b');
const c=document.getElementById('c');
var b;
const tasksCounter = document.getElementById('tasks-counter');
//var x;
function deleteTask(taskId){
    const newTasks=tasks.filter(function(tasks){
        return tasks.id!=taskId;
    });
    tasks=newTasks;
    renderList();
    alert('task is deleted');
};
var task;
function addTaskToDOM(task){
    const li=document.createElement('li');
    li.innerHTML=`<input type="checkbox" id="${task.id}" ${task.done ? 'checked':''} class="custom-checkbox">
    <label for="${task.id}">${task.b}</label>
    <img src="trash.png" class="delete" data-id="${task.id}" />`;
    li.setAttribute("id",task.id);
    c.append(li);
}

function renderList(){
    c.innerHTML='';
    for(let i=0;i<tasks.length;i++){
        addTaskToDOM(tasks[i]);
    }
    tasksCounter.innerHTML=tasks.length;
}
function addTask (task) {
    if(task)
    {
        tasks.push(task);//tasks is an array
        renderList();
        alert('task is added');
        return;
    }
    alert('text cannot be added');
}
function handleInputKeypress()
{
    b=document.getElementById('a').value;
    console.log(b);
    if(!b)
    {
        alert('Please Enter The Text');
        return;
    }
    task={
        b,
        id:Date.now().toString(),
        done:false,
    }
    document.getElementById('a').value='';
    addTask(task);
}
function hello(e){
    const q=e.target;
    if(q.className=='delete')
    {
        const taskId=q.dataset.id;
        console.log(taskId);
        deleteTask(taskId);
        return;
    }
}

a.addEventListener('click',handleInputKeypress);
document.addEventListener('click',hello);
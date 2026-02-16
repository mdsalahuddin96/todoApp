const taskContainer=document.getElementById('task-container');
const taskInput=document.getElementById('task-input');
const addTaskBtn=document.getElementById('add-task');
const countElm=document.getElementById('count');
const taskItems=document.getElementsByClassName('task-item');
addTaskBtn.addEventListener('click',(event)=>{
    if(taskInput.value.trim()==""){
        alert("Enter a Task");
        return;
    }
    const id=Date.now();

    // this code for add task to the ui
    taskContainer.insertAdjacentHTML('beforeend',`<div class='task-item'>
        <div>
            <input type='radio' id="task-${id}">
            <label for="task-${id}">${taskInput.value}</label>
        </div>
        <div><span class="delete">X</span></div>
    </div>`)
    taskInput.value="";
    updateTaskCount();
})
// this code for mark complete task and delete task
taskContainer.addEventListener('click',(event)=>{
    if (event.target.tagName === "LABEL") {
        event.target.classList.add("completed");
    }
    if(event.target.classList=='delete'){
        event.target.closest('.task-item').remove()
    }
    updateTaskCount();
})
// this code for update count task()
function updateTaskCount(){
    let countElmNumber=parseInt(countElm.innerText);
    countElmNumber=taskItems.length;
    countElm.innerText=countElmNumber;
}
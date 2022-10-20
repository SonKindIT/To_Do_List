
var list_task = new ListTaskToDo();
var listComplete = new ListTaskComplete();
var index_ID = 0;

function luuStorageListTask() {
    localStorage.removeItem('list_task');
    for(var i=0;i<list_task.arrTask.length;i++){
        var stringList=JSON.stringify(list_task.arrTask);
        localStorage.setItem("list_task",stringList);
    }
}
function layStorageListTask() {
    if(localStorage.getItem('list_task')){
        var string = localStorage.getItem('list_task');
        list_task.arrTask=JSON.parse(string);
    }
    list_task.hienThiTask();
}


function luuStorageTaskComplete() {
    localStorage.removeItem('listComplete');
    for(var i=0;i<listComplete.arrTask.length;i++){
        var stringList=JSON.stringify(listComplete.arrTask);
        localStorage.setItem("listComplete",stringList);
    }
}

function layStorageTaskComplete() {
    if(localStorage.getItem('listComplete')){
        var string = localStorage.getItem('listComplete');
        listComplete.arrTask=JSON.parse(string);
    }
    listComplete.hienThiTask();
}



function checkTask() {
    var checkFlag = true;
    var txt = document.getElementById('newTask').value;
    checkFlag &= Validation.kiemTraRong(txt,'notiInput') & Validation.kiemTraTrung(txt,'notiInput',list_task.arrTask) &Validation.kiemTraTrung(txt,'notiInput',listComplete.arrTask);
    if(!!!checkFlag){
        return false;
    }
    return true;
}

// Thêm task
document.getElementById('addItem').onclick = function (){
    if(!checkTask()){
        return;
    }
    var task = new Task();
    task.id = index_ID;
    task.taskName = document.getElementById('newTask').value;
    list_task.arrTask.push(task);
    index_ID++;
    luuStorageListTask();
    layStorageListTask();
}


// Xóa task ToDo
function deleteToDo(event){
    var index = Number(event.currentTarget.id);
    for(var i=0;i<list_task.arrTask.length;i++){
        if(list_task.arrTask[i].id === index){
            index = i;
            break;
        }
    }
    list_task.xoaTask(index);
    luuStorageListTask();
    layStorageListTask();
}

// Thêm task Complete và xóa task ToDo
function completeToDo(event){
    var index = Number(event.currentTarget.id);
    var index_id = index;
    for(var i=0;i<list_task.arrTask.length;i++){
        if(list_task.arrTask[i].id === index){
            index = i;
            break;
        }
    }
    // Thêm task Complete
    var taskComplete = new Task();
    var tempTask = new Task();
    tempTask = list_task.arrTask[index];
    taskComplete.id =index_id;
    taskComplete.taskName =tempTask.taskName;

    listComplete.themTask(taskComplete);
    listComplete.hienThiTask();
    // Xóa task todo
    list_task.xoaTask(index);
    luuStorageListTask();
    luuStorageTaskComplete();
    layStorageListTask();
    layStorageTaskComplete();
}

function deleteToDoComplete(event){
    var index = Number(event.currentTarget.id);
    for(var i=0;i<listComplete.arrTask.length;i++){
        if(listComplete.arrTask[i].id === index){
            index = i;
            break;
        }
    }
    listComplete.xoaTask(index);
    luuStorageTaskComplete();
    layStorageTaskComplete();
}

function completeToDoComplete(event){
    var index = Number(event.currentTarget.id);
    for(var i=0;i<listComplete.arrTask.length;i++){
        if(listComplete.arrTask[i].id === index){
            index = i;
            break;
        }
    }
    var taskToDo = new Task();
    var tempTask = new Task();
    tempTask.id = listComplete.arrTask[i].id;
    tempTask.taskName = listComplete.arrTask[i].taskName;
    taskToDo = tempTask;
    list_task.themTask(taskToDo);
    list_task.hienThiTask();

    // Xóa task
    listComplete.xoaTask(index);
    luuStorageListTask();
    luuStorageTaskComplete();
    layStorageListTask();
    layStorageTaskComplete();
}
// Xóa check lỗi khi bắt đầu nhập lại

document.getElementById('newTask').onkeydown = function (){
    document.getElementById('notiInput').style.display = 'none';
}

window.onload = (event) => {
    layStorageListTask();
    layStorageTaskComplete();
};


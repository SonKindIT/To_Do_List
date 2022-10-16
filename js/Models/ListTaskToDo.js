function ListTaskToDo(){
    this.arrTask = [];
    this.themTask = function (task){
        this.arrTask.push(task);
    }

    this.hienThiTask = function (){
        var txtHTML = '';
        for(var task of this.arrTask){
            txtHTML+=`
            <li>
                <span>${task.taskName}</span>
                <div class="buttons">
                    <button class="remove" data-index="0" data-status="todo" id="${task.id}" onclick="deleteToDo(event)">
                        <i class="fa fa-trash-alt"></i>
                    </button>
                    <button class="complete" data-index="0" data-status="todo" id="${task.id}" onclick="completeToDo(event)">
                        <i class="far fa-check-circle"></i>
                        <i class="fas fa-check-circle"></i>
                    </button>
                </div>
            </li>
            `
        }
        document.getElementById('todo').innerHTML=txtHTML;
    }

    this.xoaTask = function (index){
        this.arrTask.splice(index,1);
        this.hienThiTask();
    }
}
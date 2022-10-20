function ListTaskComplete(){
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
                <button class="remove" data-index="0" data-status="completed" id="${task.id}" onclick="deleteToDoComplete(event)">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="complete" data-index="0" data-status="completed" id="${task.id}" onclick="completeToDoComplete(event)">
                    <i class="far fa-check-circle"></i>
                    <i class="fas fa-check-circle"></i>
                </button>
                </div>
            </li>
            `
        }
        document.getElementById('completed').innerHTML=txtHTML;
    }

    this.xoaTask = function (index){
        this.arrTask.splice(index,1);
    }
}
var Validation = {

    kiemTraRong : function (value,errId){
        if(value.trim()===''){
            document.getElementById(errId).style.display = 'block';
            document.getElementById(errId).innerHTML = 'Không được để trống';
            return false;
        }
        return true;
    },

    kiemTraTrung : function (value,errId,arr){
        for(var task of arr){
            if(removeVietnameseTones(value) === removeVietnameseTones(task.taskName)){
                document.getElementById(errId).style.display = 'block';
                document.getElementById(errId).innerHTML = 'Task đã trùng';
                return false;
            }
        }
        return true;
    }
}
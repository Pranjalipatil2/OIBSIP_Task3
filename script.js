var selectRow = null;
function onFormSubmit(e){

    event.preventDefault();
    var formData = readFormData();
    if(selectRow == null ){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)

    }
    resetForm();

};


function readFormData(){
    var formData={};
    formData['title']= document.getElementById("title").value;
    formData['description']= document.getElementById("description").value;
   return formData;
}


function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.title;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.description;
        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = "<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>";
}

function onEdit(td){
    selectRow = td.parentElement.parentElement;
    document.getElementById('title').value = selectRow.cells[0].innerHTML;
    document.getElementById('description').value = selectRow.cells[1].innerHTML;
  
}

function updateRecord(formData){
    selectRow.cells[0].innerHTML = formData.title;
    selectRow.cells[1].innerHTML = formData.description;
   
}

function onDelete(td){
    if(confirm('Do you want to delete the record ?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm(){
    document.getElementById('title').value= "";
    document.getElementById('description').value= "";
   
}
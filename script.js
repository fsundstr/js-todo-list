
let items = [];


function addTask(day){
    let taskList = document.getElementById(day+"List");
    let listItem = document.createElement('li');
    let textArea = document.createElement('textarea');
    textArea.autocomplete = 'on';
    textArea.rows = '5';
    textArea.cols = '22';
    textArea.ondblclick = function(){textFieldEvent(listItem)};

    listItem.appendChild(textArea);
    taskList.appendChild(listItem);


}

function textFieldEvent(listItem){

    items.push(listItem);
    listItem.remove();
    printList();

}


function printList(){
    for(let element in items){
        console.log(element + ": " + items[element].querySelector('textarea').value);
    }
}
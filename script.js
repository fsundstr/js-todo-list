
let weekTemplate = document.getElementById("main").cloneNode(true);
let pages = [document.getElementById("main")];
let index =0;
let nPages = 1;

let items = [];


document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".header .right td").addEventListener("click", function() {
        navigateToPage(this);
    });
});


// @Input: td HTML element 
function navigateToPage(pageNumber){
    let number = Number(pageNumber.textContent);
    /*
    console.log(number);
    console.log("test"); */
    let page = document.getElementById("main");
    page.replaceWith(pages[number-1]);
    index = number-1;
    /*printPagesList();*/

}
// adds a navigation number to the UI
// @Input global variable nPages 
function addNavigationNumber(pageNumber){
    let navigationRow = document.querySelector(".header .right .navigation tr");
    let newNumber = document.createElement('td');
    newNumber.textContent = String(pageNumber);
    newNumber.addEventListener("click", function() {
        navigateToPage(this);
    });
    navigationRow.appendChild(newNumber);
}



// Adding a new middle section and 
function addPage(){
    pages.push(weekTemplate.cloneNode(true));
    nPages++;
    addNavigationNumber(nPages);

}


function nextPageRight(){
    if(index+1 === nPages){
        addPage();
        let page = document.getElementById("main");
        page.replaceWith(pages[index+1]);
        index++;
        /*
        console.log("page added");
        console.log(`index: ${index}, nPages: ${nPages} `);*/
   
       
    } else{
      // display the next page
        let page = document.getElementById("main");
        page.replaceWith(pages[index+1]);
        index++;
        /*
        console.log("show next page");
        console.log(`index: ${index}, nPages: ${nPages} `);*/

    }

}

function nextPageLeft(){
    if(index === 0){
        /*
        console.log("This is the first page, not possible to add pages to the left");
        console.log(`index: ${index}, nPages: ${nPages} `); */
        return;
    } else{
        let page = document.getElementById("main");
        page.replaceWith(pages[index-1]);
        index--;
        /*
        console.log("show previous page");
        console.log(`index: ${index}, nPages: ${nPages} `); */
    }
         
    

}




// Functionality to add a text field
function addTask(day){
    let taskList = document.getElementById(day+"List");
    let listItem = document.createElement('li');
    let textArea = document.createElement('textarea');
    textArea.autocomplete = 'on';
    textArea.rows = '5';
    textArea.cols = '22';
    textArea.ondblclick = function(){textFieldEventDelete(listItem)};

    listItem.appendChild(textArea);
    taskList.appendChild(listItem);


}

// Eventhandler to remove a text field
function textFieldEventDelete(listItem){

    items.push(listItem);
    listItem.remove();
    printPagesList();

}

// For testing purposes
function printTextareaList(){
    for(let element in items){
        console.log(element + ": " + items[element].querySelector('textarea').value);
    }
}

function printPagesList(){
    for(let element in pages){
        console.log(element + ": " + pages)
    }
}
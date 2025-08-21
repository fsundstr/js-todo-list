
let weekTemplate = document.getElementById("main").cloneNode(true);
let pages = [document.getElementById("main")];
let pageNumbers = [];
let index =0;
let nPages = 1;

let items = [];


document.addEventListener("DOMContentLoaded", () => {
    let pageNumber = document.querySelector(".header .right td");

    pageNumber.addEventListener("click", function() {
        navigateToPage(this);
    });
    
    pageNumber.style.color = 'lightgray';
    pageNumbers.push(pageNumber);
});


function displayPageNumbers(){

    if(nPages >= 7 ){
        let navigationRow = document.querySelector(".header .right .navigation tr");
        navigationRow.innerHTML = "";
        // if the page to be displayed is 0, 1, 2 or 3 then display the 7 least significant pages numbers
        if(index <= 3){
            for(let i=0; i<7 ; i++){
                navigationRow.appendChild(pageNumbers[i]);
            }
        // if the page to be displayed is among the 4 most significant numbers then display the 7 most significant page numbers
        } else if(index >= pageNumbers.length - 4){
            for(let i = pageNumbers.length - 7; i<pageNumbers.length; i++){
                navigationRow.appendChild(pageNumbers[i]);
            }
        // if the page to be displayed is in the middle then display 3 pages below it and 3 pages above it
        }else{
            for(let i = index-3; i<=index+3; i++){
                navigationRow.appendChild(pageNumbers[i]);
            }
        }
    }


    // highlight current
    pageNumbers.forEach((td, i) => {
        td.style.color = (i === index) ? 'lightgray' : 'rgb(46, 216, 159)';
    });
}


// @Input: td HTML element 
function navigateToPage(pageNumber){
    let number = Number(pageNumber.textContent);
    /*console.log(number); */
    let page = document.getElementById("main");
    page.replaceWith(pages[number-1]);
    index = number-1;
    displayPageNumbers();
    /*printPagesList();*/

}
// adds a navigation number to the UI
// @Input global variable nPages 
function addNavigationNumber(pageNumber){
    let navigationRow = document.querySelector(".header .right .navigation tr");
    let newNumber = document.createElement('td');
    newNumber.textContent = String(pageNumber);
    //console.log(toString(pageNumber)); // <-- prints object Undefined vrf ??
    newNumber.addEventListener("click", function() {
        navigateToPage(this);
    });
    pageNumbers.push(newNumber);
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
        displayPageNumbers();
        /*
        console.log("page added");
        console.log(`index: ${index}, nPages: ${nPages} `);*/
   
       
    } else{
      // display the next page
        let page = document.getElementById("main");
        page.replaceWith(pages[index+1]);
        index++;
        displayPageNumbers();
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
        displayPageNumbers();
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
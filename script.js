//main container made in html element 
const etchContainer = document.querySelector(".etch");

const increase = document.querySelector(".increase-grid");

let box;

function createBoxes (){
    globalThis.box = document.createElement("div");
    box.classList.add('gridItem');
    box.style.cssText = "border: 1px black solid;";
    etchContainer.appendChild(box);
    box.addEventListener("mouseover", function (){
        box.classList.add("gridBackBlack")
    }
    
)}

function createGrid (){
    for (let i = 1; i <= 256; i++) {
        createBoxes();
    }
    }
createGrid();


//try to make box a global variable





function createBigger(){
    let box2 = document.createElement("div");
    box2.classList.add('gridItem');
    box2.style.cssText = "border: 1px black solid;";
    etchContainer.replaceChild(box2, box);
    
    box2.addEventListener("mouseover", function (){
        box2.classList.add("gridBackBlack")
    })
}

increase.addEventListener("click", newGrid);

function newGrid(){
    let num = prompt("input the number of boxes per row");
    for (let i = 1; i <= num*num; i++) {
        createBigger();
        etchContainer.style.cssText = `display: grid; grid-template-columns: repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr);`;
        console.log(num);
    }
}
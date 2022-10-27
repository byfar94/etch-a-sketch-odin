//html elements
const etchContainer = document.querySelector(".etch");

const increase = document.querySelector(".increase-grid");

const clearButton = document.querySelector(".clearbtn")

const redButton = document.querySelector(".redbtn");

const blackButton = document.querySelector(".blackbtn");

const blueButton = document.querySelector(".bluebtn");

const yellowButton = document.querySelector(".yellowbtn");

//will change class so that different css background colors take effect
colorSelect = changeColor();

//will remove all previous classes so that only one class will be present on box divs, this allows 
colorRemove = remColor();


//creates a grid parameter allows size to change colorSelect will change color when the function attached, changeColor(), is executed by click button event. 
function createGrid (size){
    for (let i = 1; i <= (size*size); i++) {
        let box = document.createElement("div");
        box.classList.add('gridItem');
        etchContainer.style.cssText = `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`;
        //box.style.cssText = "border: 1px black solid;";
        etchContainer.appendChild(box);
        box.addEventListener("mouseover", () => box.classList.remove(...colorRemove));
        box.addEventListener("mouseover", () => box.classList.add(colorSelect));
    }
}

// function to change class so that different css background colors take effect
function changeColor (color){
    colorSelect = color;
    return color;
}


//function to remove all previous classes so that only one class will be present on box divs. Class names will need to be added to the array for this function to work correctly.
function remColor (){
    return ["red","black","blue","yellow"];
}

//execute createGrid(16) so that a basic grid with 16x16 divs is set up.
createGrid(16);

//function used to set size
function setSize(){
    //clear grid neeed to that new divs are not just added to the 
    clearGrid();
    let num = prompt("select the number of column you would like");
    if (num > 1 && num <= 100){
    createGrid(num);
    }else { 
        createGrid(16);
        alert("you must pick a number between 2 - 100");
    }
}

//set number of rows/ columns for gird when you press increase button using function setsize
increase.addEventListener("click", setSize);


//clears grid (removes div inside etchContainer)
function clearGrid(){
    etchContainer.innerHTML = "";
}


//creates blank 16*16 grid
function blankGrid (){
    createGrid(16);
}

//color changes **

blackButton.addEventListener("click", function (){
    changeColor("black");
    blackButton.style.cssText = "background-color: black";
    redButton.style.cssText = "background-color: white";
    blueButton.style.cssText = "background-color: white";
    yellowButton.style.cssText = "background-color: white";
});

redButton.addEventListener("click", function (){
    changeColor("red");
    blackButton.style.cssText = "background-color: white";
    redButton.style.cssText = "background-color: red";
    blueButton.style.cssText = "background-color: white";
    yellowButton.style.cssText = "background-color: white";
});


blueButton.addEventListener("click", function (){
    changeColor("blue");
    blackButton.style.cssText = "background-color: white";
    redButton.style.cssText = "background-color: white";
    blueButton.style.cssText = "background-color: blue";
    yellowButton.style.cssText = "background-color: white";
});

yellowButton.addEventListener("click", function (){
    changeColor("yellow");
    blackButton.style.cssText = "background-color: white";
    redButton.style.cssText = "background-color: white";
    blueButton.style.cssText = "background-color: white";
    yellowButton.style.cssText = "background-color: yellow";
});

//other Buttons

clearButton.addEventListener("click", function (){
    clearGrid();
    blankGrid();
});

//html elements
const etchContainer = document.querySelector(".etch");

const increase = document.querySelector(".increase-grid");

const redButton = document.querySelector(".redbtn");

const blackButton = document.querySelector(".blackbtn");

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
}

//function to remove all previous classes so that only one class will be present on box divs. Class names will need to be added to the array for this function to work correctly.
function remColor (){
    return ["red","black"];
}

//execute createGrid(16) so that a basic grid with 16x16 divs is set up.
createGrid(16);

//function used to set size
function setSize(){
    //clear grid neeed to that new divs are not just added to the 
    clearGrid();
    let num = prompt("select the number of column you would like");
    createGrid(num);
}

//set number of rows/ columns for gird when you press increase button using function setsize
increase.addEventListener("click", setSize);


//clears grid (removes div inside etchContainer)
function clearGrid(){
    etchContainer.innerHTML = "";
}

//will change color to black when black button is clicked
blackButton.addEventListener("mouseover", function (){
    changeColor("black")
});

//will change color to red when red button is clicked
redButton.addEventListener("mouseover", function (){
    changeColor("red");
});


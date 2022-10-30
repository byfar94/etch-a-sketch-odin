//html elements
const etchContainer = document.querySelector(".etch");

const slide = document.querySelector(".slider");

const clearButton = document.querySelector(".clearbtn")

const redButton = document.querySelector(".redbtn");

const indigoButton = document.querySelector(".indigobtn");

const cyanButton = document.querySelector(".cyanbtn");

const pinkButton = document.querySelector(".pinkbtn");

const eraserButton = document.querySelector(".eraserbtn");


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
    return ["red","indigo","cyan","pink","white"];
}

//execute createGrid(16) so that a basic grid with 16x16 divs is set up initially
createGrid(16);


//function used to set size
function setSize(num){
    clearGrid();
    createGrid(num);
}

//slider input
slide.oninput = function() {
    let size = this.value;
    setSize(size);
  }

//clears grid (removes div inside etchContainer)
function clearGrid(){
    etchContainer.innerHTML = "";
}


//creates blank equal to slider size
function blankGrid (){
    createGrid(slide.oninput());
}

//color changes **

indigoButton.addEventListener("click", function (){
    changeColor("indigo");
    /*blackButton.style.cssText = "background-color: black";
    redButton.style.cssText = "background-color: white";
    blueButton.style.cssText = "background-color: white";
    yellowButton.style.cssText = "background-color: white";*/
});

redButton.addEventListener("click", function (){
    changeColor("red");
    /*blackButton.style.cssText = "background-color: white";
    redButton.style.cssText = "background-color: red";
    blueButton.style.cssText = "background-color: white";
    yellowButton.style.cssText = "background-color: white";*/
});


cyanButton.addEventListener("click", function (){
    changeColor("cyan");
   /* blackButton.style.cssText = "background-color: white";
    redButton.style.cssText = "background-color: white";
    blueButton.style.cssText = "background-color: blue";
    yellowButton.style.cssText = "background-color: white";*/
});

pinkButton.addEventListener("click", function (){
    changeColor("pink");
   /* blackButton.style.cssText = "background-color: white";
    redButton.style.cssText = "background-color: white";
    blueButton.style.cssText = "background-color: white";
    yellowButton.style.cssText = "background-color: yellow";*/
});

eraserButton.addEventListener("click", function (){
    changeColor("white")
   /* blackButton.style.cssText = "background-color: white";
    redButton.style.cssText = "background-color: white";
    blueButton.style.cssText = "background-color: white";
    yellowButton.style.cssText = "background-color: white";
    eraserButton.style.cssText = "background-color: white"*/
})

//other Buttons

//reset button event
clearButton.addEventListener("click", function (){
    clearGrid();
    blankGrid();
});

const grid = document.querySelector(".grid-container");


//grid maker
function makeGrid(){
    let gridSide=prompt("Input desired grid side");
    let cellSize = Math.floor(750/gridSide)+"px";  
    for (let i = 0; i < gridSide; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        for (let j = 0; j < gridSide; j++) {
            const gridCell = document.createElement("div");
            gridCell.style.width=cellSize;
            gridCell.style.height=cellSize;       
            gridCell.classList.add("gridCell"); 
            gridCell.addEventListener("mouseenter",()=>{
                let randomColor ="#"+ Math.floor(Math.random()*16777215).toString(16);
                gridCell.style.backgroundColor=randomColor;
            });
            gridRow.appendChild(gridCell);   
         }
        grid.appendChild(gridRow);
    }  
}
//grid on load
makeGrid();

//btn new grid
const btnNew= document.querySelector(".btn-new")
btnNew.addEventListener("click",()=>{
    grid.textContent="";
    makeGrid();
});

//btn clear
const btnClear=document.querySelector(".btn-clear")
btnClear.addEventListener("click",()=>{
    const gridClear = document.querySelectorAll(".gridCell");
    gridClear.forEach(item=>{
        item.style.backgroundColor="white";
    });
    
});





















const modeBtn =document.getElementById("mode-btn");
const destroyBtn =document.getElementById("destroy-btn");
const esraserBtn =document.getElementById("esraser-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option")) ;
const color = document.getElementById("color") ;
const lineWidth = document.getElementById("line-width") ;
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d") ;
canvas.width= 800;
canvas.height= 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

function onMove(event){
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke()
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY) ;

}

function onMouseDown(){
    isPainting = true ;
}

function onMouseUp(){
    isPainting = false ;
    ctx.beginPath() ; 

}

function onLineWidhtChange(event) {
    ctx.lineWidth = event.target.value ;
}

function onColorChange(event){
    ctx.strokeStyle = ctx.fillStyle = event.target.value;
    }

function onColorClick(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = ctx.fillStyle = color.value = colorValue;
    }

function onModeClick(){
    if(isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    }
    else {
        isFilling = true ;
        modeBtn.innerText = "Draw";
    }
}

function onCanvasclick() {
    if(isFilling) {
        ctx.fillRect(0,0,800,800);
    }
}

function onDestroyClick() {
    ctx.fillStyle = "white" ; 
    ctx.fillRect(0,0,800,800);
}

function onEraserClick() {
    ctx.strokeStyle = "white" ;
    isFilling = false ;
    modeBtn.innerText = "Fill" ;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown) ;
document.addEventListener("mouseup", onMouseUp) ;
canvas.addEventListener("click", onCanvasclick) ;
lineWidth.addEventListener("change", onLineWidhtChange) ;
color.addEventListener("change", onColorChange); 
colorOptions.forEach(color => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
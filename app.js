const colorOptions = Array.from(document.getElementsByClassName("color-option")) ;
const color = document.getElementById("color") ;
const lineWidth = document.getElementById("line-width") ;
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d") ;
canvas.width= 800;
canvas.height= 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;

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

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown) ;
document.addEventListener("mouseup", onMouseUp) ;

lineWidth.addEventListener("change", onLineWidhtChange) ;
color.addEventListener("change", onColorChange); 
colorOptions.forEach(color => color.addEventListener("click", onColorClick))
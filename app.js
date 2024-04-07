const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d") ;

canvas.width= 800;
canvas.height= 800;

ctx.lineWidth = 2 ;

const colors = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#7f8c8d",
    "#ecf0f1",
    "#2c3e50",
    "#27ae60",
]

let isPainting = flase;

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
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown) ;
canvas.addEventListener("mouseup", onMouseUp) ;
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

function onClick(event){
    ctx.beginPath() ;
    ctx.moveTo(0, 0) ;
    const color = colors[Math.floor(Math.random() *colors.length)] ;
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY) ;
    ctx.stroke() ;
}

canvas.addEventListener("click", onClick);
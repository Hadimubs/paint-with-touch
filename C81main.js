
canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
screenwidth = screen.width;
newWidth= screen.width - 100;
newheight=screen.height - 300;
if (screenwidth < 992)
{
document.getElementById("myCanvas").width=newWidth;
document.getElementById("myCanvas").height=newheight;
document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart" , my_touchstart);
function my_touchstart(e)
{
    color=document.getElementById("color").value;
    width= document.getElementById("width").value;
    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;
    
    
}


canvas.addEventListener("touchmove" , my_touchmove);
function my_touchmove(e)
{
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle  = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
   
    last_x = current_x;
    last_y = current_y;
}


function clear_btn()
{
ctx.clearRect(0,0,canvas.width, canvas.height);
}

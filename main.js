width = screen.width ;
height = screen.height  ;
if(width > 992){
    console.log("Draw With Mouse");
    draw_mouse();
}
if(width <= 992){
    console.log("Draw With Touch");
    draw_touch();
}
function draw_touch(){
    
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;
var width = screen.width;
var new_width = screen.width - 70 ;
var new_height = screen.height - 30;
if(new_width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    //Addictonal Activity start
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("widthLine").value;
    //Addictonal Activity ends

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{

     current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop ;

    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    

    last_position_of_x = current_position_of_mouse_x; 
    last_position_of_y = current_position_of_mouse_y;
}

}
function draw_mouse(){
var mouse_event = "empty";
var last_x_position,last_y_position;
var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color = "black" ;
var linewidth = 1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    linewidth=document.getElementById("widthLine").value;
    mouse_event="mouseDown";
} 
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x_position = e.clientX - canvas.offsetLeft;
    current_y_position = e.clientY - canvas.offsetTop ;
    if (mouse_event == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=linewidth;

        console.log("Last X and Y Position =");
        console.log("X ="+last_x_position + "Y =" + last_y_position);
        ctx.moveTo(last_x_position ,last_y_position);

        console.log("Current X and Y Position =");
        console.log("X ="+current_x_position + "Y =" + current_y_position);
        ctx.lineTo(current_x_position ,current_y_position);

        ctx.stroke();

    }

    last_x_position = current_x_position;
    last_y_position = current_y_position;
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseLeave";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseUp";
}

}
function EraseALL(){
    console.log("Working");
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

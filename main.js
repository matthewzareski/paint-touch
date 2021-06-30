var mouse_event = "empty";
var lastX, lastY;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color = "black";
width = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width=document.getElementById("width_of_line").value;

    mouse_event = "mouse_down";
    
}


canvas.addEventListener("mouseup", my_mouseup);


function my_mouseup(e){
    mouse_event="mouse_up";

}

canvas.addEventListener("mouseleave", my_mouseleave);


function my_mouseleave(e){
    mouse_event="mouse_leave";
    
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if(mouse_event == "mouse_down"){
   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth = width;

   console.log("last x and y are " + lastX + "&" + lastY);

   ctx.moveTo(lastX, lastY);

   console.log("current x and y are " + current_x + "&" + current_y);
   ctx.lineTo(current_x, current_y);
   ctx.stroke();
    }

    lastX = current_x;
    lastY = current_y;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

var width = screen.width;
    new_width = screen.width - 70;
    new_height = screen.height - 300;


    if(width < 992) {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", my_touch_start);
    
    function my_touch_start(e)
    {
        console.log("my_touch_start");
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
        lastX = e.touches[0].clientX - canvas.offsetLeft;
        lastY = e.touches[0].clientY - canvas.offsetTop;
        
    }

    

    canvas.addEventListener("touchmove", my_touch_move);
    function my_touch_move(e)
    {

         current_x = e.touches[0].clientX - canvas.offsetLeft;
         current_y = e.touches[0].clientY - canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastX+ "y = " + lastY);
        ctx.moveTo(lastX, lastY);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_x + "y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
        
        lastX = current_x;
        lastY = current_y;
        
    }

    function clearArea() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }




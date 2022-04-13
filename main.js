canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mars_images = ["nasa_1.jpg", "nasa_2.jpg", "nasa_3.jpg", "nasa_4.jpg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);

rover_width = 100;
rover_height = 90;

background_image = mars_images[random_number];
rover_image = "rover.png";

var rover_x = 10;
var rover_y = 10;

function add(){
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground();
    background_imgtag.src = background_image;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadrover();
    rover_imgtag.src = rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgtag, 0,0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '38'){
        console.log("up");
        up();    
    }  

    if (keyPressed == '39'){
        console.log("right");
        right();
    }

    if (keyPressed == '37'){
        console.log("left");
        left();
    }

    if (keyPressed ==  '40'){
        console.log("down");
        down();
    }
}

function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("Rover's x coordinate " + rover_x + " Rover's y coordinate " + rover_y);
        uploadrover();
        uploadbackground();
    }
}

function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("Rover's x coordinate " + rover_x + " Rover's y coordinate " + rover_y);
        uploadrover();
        uploadbackground(); 
    }
}

function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("Rover's x coordinate " + rover_x + " Rover's y coordinate " + rover_y);
        uploadrover();
        uploadbackground(); 
    }
}

function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("Rover's x coordinate " + rover_x + " Rover's y coordinate " + rover_y);
        uploadrover();
        uploadbackground(); 
    }
}
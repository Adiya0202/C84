canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;
car1_img="https://i.postimg.cc/9rqYz9HM/car1.png";

car2_width=120;
car2_height=70;
car2_x=10;
car2_y=100;
car2_img="https://i.postimg.cc/tnnW1Kff/car2.png";

background_img="https://i.postimg.cc/bv5d35nK/racing.jpg";

function add(){
    background_tag=new Image();
    background_tag.src=background_img;
    background_tag.onload=uploadbackground;
    
    car1_tag=new Image();
    car1_tag.src=car1_img;
    car1_tag.onload=uploadcar1;

    car2_tag=new Image();
    car2_tag.src=car2_img;
    car2_tag.onload=uploadcar2;
}

function uploadcar1(){
    ctx.drawImage(car1_tag,car1_x,car1_y,car1_width,car1_height);
}

function uploadbackground(){
    ctx.drawImage(background_tag,0,0,canvas.width,canvas.height);
}

function uploadcar2(){
    ctx.drawImage(car2_tag,car2_x,car2_y,car2_width,car2_height);
}
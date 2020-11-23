//Create variables here
var dog,happydog;
var foodS,foodStock;
var database;
var position;
var Num = 20

function preload()
{
  //load images here
  dogIMG = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800,800);

  database = firebase.database();
  
  dog = createSprite(600,400,10,10);
  dog.addImage(dogIMG);
  //dog.addImage(dogImg1)
  dog.scale = 0.4;

  dogo = database.ref('Food');
  dogo.on("value", readPosition, showError);
  
}


function draw() {  
  background(46,139,87)

  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW))
  {
    writePosition(position);
    dog.addImage(dogImg1)
    Num = Num-1
  }

  
  textSize(20)
  textFont("Courier New")
  fill("BLACK")
  stroke("BLACK")
  text("Food Remaining :" + Num, 200,200 )

  textSize(20)
  textFont("Courier New")
  fill("BLACK")
  stroke("BLACK")
  text("Note: Press Up_Arrow To Feed your Pet", 130,100 )

}

function readPosition(data){
  position = data.val();
}

function showError(){
  console.log("Error in writing to the database");
}

function writePosition(nazo)
{
  if(nazo>0){
    nazo=nazo-1
  }
  else{
    nazo=0
  }
  database.ref('/').update
  (
    {
      'Food': nazo
    }
  )  
}


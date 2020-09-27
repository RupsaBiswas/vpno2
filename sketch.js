//Create variables here
var dog, happydog, dogIMG, happydogIMG;
var foodS, foodStock;
var database;
var milk;
var feed;
var AddFood;
var currenttime;
var fedTime;
var lastFed;

function preload()
{
  //load images here
  
dogIMG= loadImage("Dog.png");
happydogIMG= loadImage("happydog.png");


  
}

function setup() {
	createCanvas(displayWidth, displayHeight);
  dog= createSprite(350,480,10,30);
  dog.addImage(dogIMG);
  dog.scale=0.5;

  
  database = firebase.database();
  
  foodStock= database.ref('food');
  foodStock.on("value",readStock);

  milk=new Food();

feed= createButton("Feed the Dog");
feed.position(700,95);
feed.mousePressed(feeddog);

AddFood=createButton("Add food");
AddFood.position(800,95);
AddFood.mousePressed(addFoods);


}






function draw() {  

  background(46,139,87);

  //fedTime=database.ref('FeedTime')
currenttime=hour();
console.log(currenttime);

fedTime= database.ref('LastFed');
fedTime.on("value",function (data){
  lastFed=data.val();
  
})


  milk.display();
  
  


  drawSprites();

  textSize(20);
  fill("black");
  text("food remaining:"+ foodS,200,200 );
  
  text("Last feed:"+ lastFed,50,30);

}

function feeddog(){
  dog.addImage(happydogIMG);
  milk.updateFoodStock(milk.getFoodStock()-1);
  database.ref('/').update({
    food:milk.getFoodStock(),
    LastFed:hour()
  })
}




  
  //read the foodStock from the databse
  function readStock(data){
    foodS=data.val();
    milk.updateFoodStock(foodS);
  }

  function addFoods(){
    foodS=foodS+1
    database.ref('/').update({
      food:foodS
    })
  }

  function writeStock(x){

    if(x<-0){
      x=0;
    }
    else{
      x=x-1;
    }
    
   database.ref('/').update({
      food:x
    })
  }
  






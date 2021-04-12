


var maths_test_bg, maths_test_bg_IMG
var maths_test
var answer1, answer2, answer3, answer4, answer5, answer6



var tick1, tick2, tick3, tick4, tick5, tick6, cross1, cross2, cross3, cross4, cross5, cross6
var checkAnswers

function preload() {

   maths_test_bg_IMG = loadImage("maths test bg.jpg")



   tick_IMG = loadImage("tick.png")
   cross_IMG = loadImage("cross.png")

   

}

function setup(){
    var canvas = createCanvas(900,700);
    //engine = Engine.create();
    //world = engine.world;

   
  

  maths_test_bg = createSprite(450, 350)
  maths_test_bg.addImage(maths_test_bg_IMG);
  maths_test_bg.scale = 2
  maths_test_bg.visible = false;


checkAnswers = 0



tick1 = createSprite(500, 200)
tick1.addImage(tick_IMG)
tick1.scale = 0.2
tick1.visible = false;

tick2 = createSprite(500, 250)
tick2.addImage(tick_IMG)
tick2.scale = 0.2
tick2.visible = false;

tick3 = createSprite(500, 300)
tick3.addImage(tick_IMG)
tick3.scale = 0.2
tick3.visible = false;

tick4 = createSprite(500, 350)
tick4.addImage(tick_IMG)
tick4.scale = 0.2
tick4.visible = false;

tick5 = createSprite(500, 400)
tick5.addImage(tick_IMG)
tick5.scale = 0.2
tick5.visible = false;

tick6 = createSprite(500, 450)
tick6.addImage(tick_IMG)
tick6.scale = 0.2
tick6.visible = false;



cross1 = createSprite(500, 200)
cross1.addImage(cross_IMG)
cross1.scale = 0.1
cross1.visible = false;

cross2 = createSprite(500, 250)
cross2.addImage(cross_IMG)
cross2.scale = 0.1
cross2.visible = false;

cross3 = createSprite(500, 300)
cross3.addImage(cross_IMG)
cross3.scale = 0.1
cross3.visible = false;

cross4 = createSprite(500, 350)
cross4.addImage(cross_IMG)
cross4.scale = 0.1
cross4.visible = false;

cross5 = createSprite(500, 400)
cross5.addImage(cross_IMG)
cross5.scale = 0.1
cross5.visible = false;

cross6 = createSprite(500, 450)
cross6.addImage(cross_IMG)
cross6.scale = 0.1
cross6.visible = false;


 if(checkAnswers === 1){
if(answer1 === 193){
  tick1.visible = true;
}else{
 cross1.visible = true;
}

if(answer2 === 0){
tick2.visible = true;
}else{
cross2.visible = true;
}

if(answer3 === 944){
tick3.visible = true;
}else{
cross3.visible = true;
}

if(answer4 === 125){
tick4.visible = true;
}else{
cross4.visible = true;
}

if(answer5 === 5673){
tick5.visible = true;
}else{
cross5.visible = true;
}



 }


   maths_test = new MathsTest();

  

    


}

function draw(){
    background(0);
  //  Engine.update(engine);

 
   




      if (frameCount >= 5 ){
      
        maths_test_bg.visible = true;

          
      
       maths_test.display();
      
  
       
      }

      
     
 drawSprites();


      if(frameCount >= 5){
        textSize(24);
        fill ("white")
        text ("153 + 40 = ", 420, 200)
        text ("883 x 0 = ", 420, 250)
        text ("954 - 10 = ", 420, 300)
        text ("1000 / 08 = ", 420, 350)
        text ("5673 x 1 = ", 420, 400)
        text ("4565 + 25 = ", 420, 450)

      }
    }
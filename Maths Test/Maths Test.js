class MathsTest{
     constructor(){
        this.input1 = createInput("Answer1 ");
        this.input2 = createInput("");
        this.input3 = createInput("");
        this.input4 = createInput("");
        this.input5 = createInput("");
        this.input6 = createInput("");
        this.button = createButton('Check');
     }

     hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.input4.hide();
        this.input5.hide();
        this.input6.hide();
        this.button.hide();
     }

     display(){
      
     this.input1.position(450,200);
     this.input2.position(450,250);
     this.input3.position(450,300);
     this.input4.position(450,350);
     this.input5.position(450,400);
     this.input6.position(450,450);

     this.button.position(400, 500);

     this.button.mousePressed(()=>{
        this.button.hide();
        answer1 = this.input1.value();
        answer2 = this.input2.value();
        answer3 = this.input3.value();
        answer4 = this.input4.value();
        answer5 = this.input5.value();
        answer6 = this.input6.value();

       checkAnswers = 1;
        
      });
     }
}
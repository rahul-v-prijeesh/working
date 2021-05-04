 var s = 1
 var level=1;
var shapelevel;
var shape
var score=0
var next
var game= 0
var wrong
 var correct
 var sscore=0
 var lastba
 var l
 var t
 function preload() {
      //triangle

      //square
       
     //circle
//c1=addImage("clock.png")
s=loadSound("scor.wav")
l=loadSound("las.wav")
lastba=loadImage("l.jpg")
 c1=loadImage("Ccake.png")
c2=loadImage("clock.png")
c3=loadImage("globepng")
c4=loadImage("yoyo.png")
s1=loadImage("dice1.png")

 }

 function setup()

 {
   createCanvas(700, 600);
  //shape=createSprite(550,100)

  // shape.addImage(tri)
  //shape.scale=0.5;
    a=createSprite(100,280)
   a1=createSprite(100,450)
   a2=createSprite(300,280)
    
   a3=createSprite(300,450)
   a4=createSprite(500,280)
   a5=createSprite(500,450)
  
   r=new triangle()
   c=new square()
   d=new circle();
   next=createSprite(620,520,160,70)
   next.shapeColor="green";next.visible=false
   wrong=createGroup()
   correct=createGroup()
   t=createSprite(width/2,height/2,width,height)
   t.visible=false
  
   //t.addImage()
 }

 function draw() {
   background(0);
   textSize(25)
   fill(255)
   text("Select the image that looks like ", 100, 100)
   text("score: "+score,20,30)
   text("level "+level,320,40)
   console.log(mouseX+"Y"+  mouseY)
if(m(a2))
{}
  if( m(a1))
   {
     
     
   }
  
   drawSprites()
 if(score===9){
   background(lastba)
  
 } 
   if(game===1&&sscore%3===0&&score<8){
          next.visible=true
     fill(255)
   textSize(40)
     text("next",600,530)
    
   }
   if(m(next)&&game===1&&level<3)
     {
       game=0
       shapelevel=Math.round(random(1,3))
       next.visible=false
       game=0
       sscore=0
       level+=1
       a.x=100
       a.y=280  
       a1.y=450
       a1.x=100
       a2.x=300
        a2.y=280
       a3.x=300
       a3.y=450
       a4.x=500
       a4.y=280
       a5.x=500
       a5.y=450
     }
   
     for (var i = 0; i < wrong.length; i++) {
      if (mousePressedOver(wrong.get(i)) ) {
        textSize(20)
        fill("red")
        text("sorry! try again",250,150)
        s.stop()
      }} 
      for (var i = 0; i < correct.length; i++) {
        if (mousePressedOver(correct.get(i)) ) {
          game=1
          score+=1
          sscore+=1
         correct.get(i).x=width*2
         s.play()
        }} 
   games()
  if(score<9)
 {  r.start() 
   c.start()
   d.start()}
 }



function m(sh)
{
  if(mousePressedOver(sh)){
    return true
  }
  else{
    return false
  }
}
function games(){
 var levelw=level
 image(c1,300,300,100,100)
  switch(level)
 {
   case 1: correct.add(a1)
           correct.add(a3)
           correct.add(a4)
           break;
  case 2: correct.remove(a1)
          correct.add(a2)
          correct.add(a5)
          correct.remove(a3)
      break
 case 3:correct.add(a)
        correct.remove(a2)
   break
 }
 switch(levelw){
 case 1:wrong.add(a)
        wrong.add(a2)
        wrong.add(a5)
  
        break
 case 2: wrong.add(a1)
         wrong.remove(a2)
         wrong.remove(a5)
         wrong.add(a3)
         break
case 3:wrong.remove(a)
      wrong.add(a2)
  break
 }
}
if(score===9)
{
  l.play(); 
}
 /*
   a.x=100
   a.y=280  
   a1.y=450
   a1.x=100
   a2.x=300
    a2.y=280
   a3.x=300
   a3.y=450
   a4.x=500
   a4.y=280
   a5.x=500
   a5.y=450
   */

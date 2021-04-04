const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/angryBird Background.png");
}

function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,3000,50);
//lower bodies
    Stonebox1 = new Stoneblock(1100,735,120,60);
    Stonebox2 = new Stoneblock(1220,735,120,60);
    Stonebox3 = new Stoneblock(1500,735,120,60);
    Stonebox4 = new Stoneblock(1620,735,120,60);
    
    //next row
    woodenlog1 = new Woodenlog(1350,660,250,25);
    pig1 = new Pig(1350, 550,80,80);
    woodenlog2 = new Woodenlog(1189,660,60,60);
    woodenlog3 = new Woodenlog(1110,660,100,60);
 
    woodenlog4 = new Woodenlog(1540,660,100,60);
    woodenlog5 = new Woodenlog(1620,660,60,60);
  // next row
  woodenlog6 = new Woodenlog(1187,590,100,60);
  woodenlog7= new Woodenlog(1095,590,60,60);

  woodenlog8 = new Woodenlog(1600,590,100,60);
  woodenlog9 = new Woodenlog(1520,590,60,60);

  woodenlog10 = new Woodenlog(1219,470,25,160);
  woodenlog11 = new Woodenlog(1080,470,25,160);

  woodenlog12 = new Woodenlog(1630,470,25,160);
  woodenlog13 = new Woodenlog(1510,470,25,160);

  Stonebox5= new Stoneblock(1132,470,60,160);
  Stonebox6= new Stoneblock(1567,470,60,160);

 // next row
 woodenlog14 = new Woodenlog(1150,413,250,25);
 woodenlog15 = new Woodenlog(1580,403,250,25);

 //next row
 woodenlog16 = new Woodenlog(1240,290,55,140);
  woodenlog17 = new Woodenlog(1060,290,55,140);
  woodenlog18 = new Woodenlog(1661,290,20,140);
  woodenlog19 = new Woodenlog(1480,290,20,140);
  woodenlog20 = new Woodenlog(1680,290,20,140);
  woodenlog21 = new Woodenlog(1510,290,20,140);
  pig2 = new Pig(1150, 250,60,60);
  pig3 = new Pig(1580, 250,60,60);
//nect row
  woodenlog22 = new Woodenlog(1165,240,280,30);
  woodenlog23 = new Woodenlog(1568,230,280,30);

  icelog1 = new Icelog(1202,320,25,25)
  icelog2 = new Icelog(1102,320,25,25)
  icelog3 = new Icelog(1620,320,25,25)
  icelog4 = new Icelog(1520,320,25,25)

  //next row
  icelog5 = new Icelog(1162,211,150,60)
  icelog6 = new Icelog(1162,170,40,160)
  icelog7 = new Icelog(1570,211,150,60)
  icelog8 = new Icelog(1560,170,40,160)


    //log5 = new Log(1180,120,150, -PI/7);

    bird = new Bird(100,100);

   
    slingshot = new SlingShot(bird.body,{x:150, y:600});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    Stonebox1.display();
    Stonebox2.display();
   
    woodenlog3.display();
    woodenlog1.display();
    pig1.display();

    woodenlog4.display();
    woodenlog5.display();
    pig2.display();
    pig3.display();

    Stonebox3.display();
    Stonebox4.display();
    woodenlog7.display();
    woodenlog6.display();
    icelog1.display();

    woodenlog2.display();
    woodenlog8.display();
    woodenlog9.display();
    woodenlog12.display();
    woodenlog13.display();
    woodenlog14.display();
    woodenlog15.display();
    woodenlog16.display();
    woodenlog17.display();
    woodenlog20.display()
    woodenlog21.display()
    woodenlog22.display()
    woodenlog23.display()
    
  Stonebox5.display();
  Stonebox6.display();
    bird.display();
    icelog2.display();
    icelog3.display();
    icelog4.display();
    icelog5.display();
    icelog6.display();
    icelog7.display();
    icelog8.display();
    
    woodenlog10.display()
    woodenlog11.display()
    woodenlog18.display()
    woodenlog19.display()
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
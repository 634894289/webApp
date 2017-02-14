var canvas1,canvas2,ctx1,ctx2;
var width,height;
var lastTime,deltaTime;
var bgPic = new Image();
var ane,fruit,mon ,baby;
var mx,my;//鼠标位置
var TailTime = 0;
var TailCount = 0;
var EyeTime = 0;
var EyeCount = 0;
var intervalTime = 1000;
var bodyTime = 0;
var bodyCount = 0;
var blueBodyCount = 0;
var orangeBodyCount = 0;
var isBlue = false;
var isEat = false;
var data;
var  gameOver = false;
var wave;
var dust;
document.body.onload = game;
 function game(){
 	init();
 	lastTime  = Date.now();
 	deltaTime = 0;
	gameLoop();
	
	
 }


function init(){
	//获取canvas的内容
	
		canvas1  =   document.getElementById("canvas1"); // fish dust ui circle 
		ctx1     =   canvas1.getContext('2d');
		canvas2  =   document.getElementById("canvas2");	//background ane fruits
		ctx2     =   canvas2.getContext('2d'); 
		
		canvas1.addEventListener("mousemove",onMouseMove,false);
		
		bgPic.src = 'img/background.jpg';
		height = canvas1.height;
		width  = canvas1.width;
		//海葵
		ane = new aneObj();
		ane.init();
		//果实
		fruit = new fruitObj();
		fruit.init();
		
		//大鱼
		mon = new monObj();
		mon.init();
		
		//小鱼
		baby = new babyObj();
		baby.init();
		
		//初始鼠标位置
		mx = width*0.5;
		my = height*0.5;
		
		data = new dataObj();
		ctx1.font = "30px Calibri";
		ctx1.textAlign = 'center';
		
		wave = new waveObj();
		wave.init();
		
		dust = new dustObj();
		dust.init();
}

function gameLoop(){
	requestAnimationFrame(gameLoop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime >40) deltaTime = 40;
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,width,height);
	mon.draw();
	monFruitsCollsion();
	monBabyCollsion();
	baby.draw();
	TailTime += deltaTime;
	if(TailTime > 50){
		TailCount = (TailCount + 1)%8;
		TailTime  %= 50;
	}
	EyeTime += deltaTime;
	if(EyeTime > intervalTime){
		EyeCount = (EyeCount + 1)%2;
		EyeTime %=intervalTime;
		if(EyeCount == 0){
			intervalTime = Math.random() *1500 + 2000;
		}else{
			intervalTime = 300;
		}
	}
	
	bodyTime += deltaTime;
	if(bodyTime > 500){
		if(bodyCount < 19){
			bodyCount += 1;
		}
		bodyTime = 0;
	}
	
	data.draw();
	
	wave.draw();
	
	dust.draw();
}

function onMouseMove(e){
	if(!gameOver){
		if(e.offsetX || e.layerX){
			mx = e.offsetX == undefined? e.layerX : e.offsetX;
			my = e.offsetY == undefined? e.layerY : e.offsetY;
		}
	}
}


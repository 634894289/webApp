var monTail = [];
var monEye = [];
var blueBody = [];
var orangeBody = [];
var blueEat = [];
var orangeEat = [];
var monObj = function(){
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();
}

monObj.prototype.init = function(){
	this.x = width*0.5;
	this.y = height*0.5;
	this.angle = 0;
	this.bigEye.src = 'img/babyEye0.png';
	this.bigBody.src  = 'img/bigSwim0.png';
	this.bigTail.src = 'img/bigTail0.png';
	for(var i=0; i<8; i++){
		monTail[i] = new Image();
		monTail[i].src = 'img/bigTail' + i + '.png';
		blueBody[i] = new Image();
		blueBody[i].src = 'img/bigSwimBlue'+ i + '.png';
		orangeBody[i] = new Image();
		orangeBody[i].src = 'img/bigSwim'+ i + '.png';
		blueEat[i] = new Image();
		blueEat[i].src = 'img/bigEatBlue'+ i + '.png';
		orangeEat[i] = new Image();
		orangeEat[i].src = 'img/bigEat'+ i + '.png';
	}
	
	for(var i=0; i<2; i++){
		monEye[i] = new Image();
		monEye[i].src = 'img/bigEye' + i + '.png';
	}
}

monObj.prototype.draw = function(){
	var delay = my - this.y;
	var delax = mx - this.x;
	this.x = lerpDistance(mx,this.x,0.95);
	this.y = lerpDistance(my,this.y,0.95);
	var beta = Math.atan2(delay,delax)+ Math.PI;
	this.angle = lerpAngle(beta,this.angle,0.9);
	
	
	
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	if(isBlue){
		if(isEat){
			ctx1.drawImage(blueEat[blueBodyCount],-blueEat[blueBodyCount].width*0.5+5,blueEat[blueBodyCount].height*0.5-55);
			isEat = false;
		}else{
			ctx1.drawImage(blueBody[blueBodyCount],-blueBody[blueBodyCount].width*0.5+5,blueBody[blueBodyCount].height*0.5-55);
		}
	}else{
		if(isEat){
			ctx1.drawImage(orangeEat[blueBodyCount],-orangeEat[blueBodyCount].width*0.5+5,orangeEat[blueBodyCount].height*0.5-55);
			isEat = false;
		}
		else{
			ctx1.drawImage(orangeBody[orangeBodyCount],-orangeBody[orangeBodyCount].width*0.5+5,orangeBody[orangeBodyCount].height*0.5-55);
		}
	}
	ctx1.drawImage(monTail[TailCount],-monTail[TailCount].width*0.5+35,-monTail[TailCount].height*0.5);
	ctx1.drawImage(monEye[EyeCount],-monEye[EyeCount].width*0.5,-monEye[EyeCount].height*0.5);
	ctx1.restore();
}

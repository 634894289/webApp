var babyTail = [];
var babyEye = [];
var babyBody = [];
var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
}
babyObj.prototype.init = function(){
	this.x = width*0.5 - 60;
	this.y = height*0.5+50;
	this.angle = 0;
	this.babyBody.src = 'img/babyFade0.png';
	this.babyEye.src = 'img/babyEye0.png';
	this.babyTail.src = 'img/babyTail0.png';
	for(var i=0; i<8; i++){
		babyTail[i] = new Image();
		babyTail[i].src = 'img/babyTail' + i + '.png';
	}
	for(var i=0; i<2; i++){
		babyEye[i] = new Image();
		babyEye[i].src = 'img/babyEye' + i + '.png';
	}
	
	for(var i=0; i<20; i++){
		babyBody[i] = new Image();
		babyBody[i].src = 'img/babyFade' + i + '.png';
	}
}

babyObj.prototype.draw = function(){
	
	
	var delay = mon.y- this.y;
	var delax = mon.x - this.x;
	this.x = lerpDistance(mon.x,this.x,0.98);
	this.y = lerpDistance(mon.y,this.y,0.98);
	var beta = Math.atan2(delay,delax)+ Math.PI;
	this.angle = lerpAngle(beta,this.angle,0.9);
	if(bodyCount == 19){
		gameOver = true;
	}
	ctx1.save()
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(babyBody[bodyCount],babyBody[bodyCount].width*0.5-30,babyBody[bodyCount].height*0.5-35);
	ctx1.drawImage(babyEye[EyeCount],babyEye[EyeCount].width*0.5,babyEye[EyeCount].height*0.5);
	ctx1.drawImage(babyTail[TailCount],babyTail[TailCount].width*0.5+10,babyTail[TailCount].height*0.5-25)
	ctx1.restore();
}

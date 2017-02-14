var dustObj = function(){
	this.rootx  = [];
	this.changeX = [];
	this.y = [];
	this.pic = [];
	this.amp = [];
	this.No = [];
	this.angle =  0;
}

dustObj.prototype.num = 30;

dustObj.prototype.init = function(){
	for(var i = 0; i<7; i++){
		this.pic[i] = new Image();
		this.pic[i].src = 'img/dust' + i +'.png';
	}
	
	for(var i=0; i<this.num; i++){
		this.rootx[i] = Math.random() * width;
		this.y[i] = Math.random() * height;
		this.amp[i] = Math.random() * 15 + 25;
		this.No[i]= Math.floor(Math.random() *7) ;  
	}
}

dustObj.prototype.draw =  function(){
	this.angle += deltaTime * 0.0008;
	var l = Math.sin(this.angle);
	ctx1.save();
	for(var i=0; i<this.num; i++){
		this.changeX[i] = this.rootx[i] + l * this.amp[i];
		ctx1.drawImage(this.pic[this.No[i]],this.changeX[i],this.y[i]);
	}
	ctx1.restore();
}

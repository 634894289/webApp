var dataObj = function(){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.alpha = 0;
}

dataObj.prototype.draw= function(){
	var w = width;
	var h = height;
	ctx1.save();
	ctx1.shadowBlur  = 20;
	ctx1.shadowColor = '#fff'
	ctx1.shadowOffsetX = 5;
	ctx1.shadowOffsetY = 5;
	if(gameOver){
		this.alpha += deltaTime *0.0003;
		if(this.alpha > 1){
			this.alpha = 1;
		}
		ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
		ctx1.fillText('GAMEOVER',w*0.5,h*0.5);
	}
	ctx1.fillStyle = '#fff';
	ctx1.fillText('SCORE :' +'   '+ this.score,w*0.5,50);
	ctx1.restore();

}

var fruitObj = function(){
	this.alive = [];
	this.x = [];
	this.y = [];
	this.l = [];
	this.spd = [];
	this.aneNum  = [];
	this.fruitType = [];
	this.orange = new Image();
	this.blue   = new Image();
};

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for(var i=0; i<this.num; i++){
		this.alive[i] = false;
		this.x[i]     = 0;
		this.y[i]     = 0;
		this.l[i]     = 0;
		this.aneNum[i] = 0;
		this.spd[i]   = Math.random()*0.017 + 0.003;
		this.fruitType[i] = '';
	}
	
	this.orange.src = 'img/fruit.png';
	this.blue.src = 'img/blue.png';
};


fruitObj.prototype.draw = function(){
	for(var i=0; i<this.num; i++){
		if(this.alive[i]){
			if(this.l[i] <= this.orange.width){
				this.x[i] = ane.headX[this.aneNum[i]];
				this.y[i] = ane.headY[this.aneNum[i]];
				this.l[i] += this.spd[i] * deltaTime;
			}else{
				this.y[i] -= this.spd[i] * 7 * deltaTime;
			}
			if(this.y[i] < 0){
				this.alive[i] = false;
				
			}
			if(this.fruitType[i] == 'orange'){
				ctx2.drawImage(this.orange,this.x[i]-this.l[i]*0.5,this.y[i]- this.l[i]*0.5,this.l[i],this.l[i]);
			}
			else{
				ctx2.drawImage(this.blue,this.x[i]-this.l[i]*0.5,this.y[i]- this.l[i]*0.5,this.l[i],this.l[i]);
			}
		}	
		
	}
};

fruitObj.prototype.born = function(i){
	 this.aneNum[i] = Math.floor(Math.random()*ane.num);
	 this.l[i]  = 0;
	 this.alive[i] = true;
	 var ran = Math.random();
	 if(ran < 0.15){
	 	this.fruitType[i]  = 'blue';
	 }
	 else{
	 	this.fruitType[i]  = 'orange';
	 }
};

function fruitMonitor(){
	var num = 0;
	for(var i=0; i<fruit.num; i++){
		if(fruit.alive[i]){
			num++;
		}
	}
	if(num<15){
		 sendFruit();
	}
}

function sendFruit(){
	for(var i=0; i<fruit.num; i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}

function monFruitsCollsion(){
	if(!gameOver){
		for(var i =0; i<fruit.num; i++){
		if(fruit.alive[i] && fruit.l[i] >= fruit.orange.width){
			var l  = calLength2(fruit.x[i],fruit.y[i],mon.x,mon.y);
			if(l<900){
				fruit.alive[i] = false;
				isEat = true;
				if(fruit.fruitType[i] == 'orange'){
					blueBodyCount = 0;
					isBlue = false;
					data.double = 1;
					data.fruitNum ++;
					if(orangeBodyCount < 6){
						orangeBodyCount++;
					}
					
				}
				else{
					orangeBodyCount = 0;
					data.double = 2;
					data.fruitNum *=2;
					isBlue = true;
					if(blueBodyCount<6){
						blueBodyCount++;
					}
					
				}
				wave.born(fruit.x[i],fruit.y[i],"fruit");
			}
		}
	}
	}
	
}

function monBabyCollsion(){
	if(!gameOver){
		if(data.fruitNum > 0){
		var l = calLength2(mon.x,mon.y,baby.x,baby.y);
		if(l<900){
			bodyCount = 0;
			data.score += data.fruitNum; 
			data.fruitNum = 0;
			isBlue = false;
			orangeBodyCount = 0;
			wave.born(baby.x,baby.y,"babyFish");
		}
	}
	}
}

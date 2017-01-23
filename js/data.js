var dataObj=function(){
	this.fruitNum=0;
	this.double=1;
	this.score=0;
	this.gameOver=false;
	this.alpha=0;
}

dataObj.prototype.draw=function(){
	var w=can1.width;
	var h=can1.height;
	ctx1.save();
	ctx1.fillStyle="white";
	ctx1.shadowBlur=10;
	ctx1.shadowColor="green";

//	ctx1.fillText("num:"+this.fruitNum,w*0.5,h-50);
//	ctx1.fillText("double:"+this.double,w*0.5,h-80);
	ctx1.fillText("亲的得分:"+this.score,w*0.5,h-20);
	
	
	if(this.gameOver)
	{
		this.alpha+=deltaTime*0.0002;
		if(this.alpha>1)
		this.alpha=1;
		ctx1.fillStyle="rgba(255,0,0,"+this.apha+")";
		ctx1.fillText("小鱼饿完了。。。",w*0.5,h*0.5);
	}
	ctx1.restore();
}
dataObj.prototype.addScore=function(){
	this.score+=this.fruitNum*100*this.double;
	this.fruitNum=0;
	this.double=1;
}

var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

//背景图片
var bgPic = new Image();

var ane;

var fruit;

var mom;

var mx;
var my;

var baby;

var babyTail = [];

var babyEye = [];

var babyBody = [];

var momTail = [];
var momEye = [];

var data;

var momBodyOra = [];
var momBodyBlue = [];

document.body.onload = game;

function game() {
	console.log('start');
	init();

	lastTime = Date.now();
	deltaTime = 0;

	gameloop();
}

function init() {
	//获取canvas context
	can1 = document.getElementById("canvas1"); //fishes dust UI circle
	ctx1 = can1.getContext('2d'); //
	can2 = document.getElementById("canvas2"); //background anemone fruits
	ctx2 = can2.getContext('2d'); //

	can1.addEventListener('mousemove', onMouseMove, false);

	bgPic.src = "./img/background.jpg";

	canWidth = can1.width;
	canHeight = can1.height;

	//海葵
	ane = new aneObj();
	ane.init();

	//果实
	fruit = new fruitObj();
	fruit.init();
	mom = new momObj();
	mom.init();

	baby = new babyobj();
	baby.init();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;

	for(var i = 0; i < 8; i++) {
		babyTail[i] = new Image();
		babyTail[i].src = "./img/babyTail" + i + ".png";
	}

	for(var i = 0; i < 2; i++) {
		babyEye[i] = new Image();
		babyEye[i].src = "./img/babyEye" + i + ".png";
	}
	for(var i = 0; i < 20; i++) {
		babyBody[i] = new Image();
		babyBody[i].src = "./img/babyFade" + i + ".png";
	}
	for(var i = 0; i < 8; i++) {
		momTail[i] = new Image();
		momTail[i].src = "./img/bigTail" + i + ".png";
	}

	for(var i = 0; i < 2; i++) {
		momEye[i] = new Image();
		momEye[i].src = "./img/bigEye" + i + ".png";
	}
	data = new dataObj();
	for(var i = 0; i < 8; i++) {
		momBodyOra[i] = new Image();
		momBodyBlue[i] = new Image();
		momBodyOra[i].src = "./img/bigSwim" + i + ".png";
		momBodyBlue[i].src = "./img/bigSwimBlue" + i + ".png";
	}
	//初始化字体
	ctx1.font = "30px Verdana";
	ctx1.textAlign = "center";
}

function gameloop() {
	requestAnimFrame(gameloop); //setInterval,setTimeout
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	//	console.log(deltaTime);
	if(deltaTime > 40) deltaTime = 40;
	drawBackground();

	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0, 0, canWidth, canHeight);
	mom.draw();
	baby.draw();
	momFruitsCollision();
	momBabyCollision();
	data.draw();
}

function onMouseMove(e) {
	if(!data.gameOver) {
		if(e.offSetX || e.layerX) {
			mx = e.offSetX == undefined ? e.layerX : e.offSetX;
			my = e.offSetY == undefined ? e.layerY : e.offSetY;
		}
	}

}
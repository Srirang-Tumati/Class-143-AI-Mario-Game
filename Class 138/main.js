function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadsound("coin.wav");
	mario_gameover=loadsound("gameover.wav");
	mario_kick=loadsound("kick.wav");
	mario_die=loadsound("mariodie.wav");
	
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console')

	posenet=ml5.poseNet(Video,modelLoaded);
	posenet.on('pose',gotposes);
}

function modelLoaded(){
	console.log("Model Loaded!");
}

function gotposes(results){
	if(results.length>0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}

function draw() {
	game()
}







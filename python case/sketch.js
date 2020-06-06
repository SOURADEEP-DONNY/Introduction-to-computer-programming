/*
The case of the Python Syndicate
Stage 1

Officer: 6549028
CaseNum: 301-0-75975966-6549028

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var linaLovelaceImage;
var rockyKrayImage;
var cecilKarpinskiImage;
var bonesKarpinskiImage;
var robbieKrayImage;
var pawelKarpinskiImage;



//declare your new variables below
var bonesKarpinskiXPosition = 115;
var bonesKarpinskiYPosition = 309;
var linaLovelaceXPosition=115;
var linaLovelaceYPosition=40;
var rockyKrayXPosition=408;
var rockyKrayYPosition=40;
var cecilKarpinskiXPosition=701;
var cecilKarpinskiYPosition=40;
var robbieKrayXPosition=408;
var robbieKrayYPosition=309;
var pawelKarpinskiXPosition=701;
var pawelKarpinskiYPosition=309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	linaLovelaceImage = loadImage("lina.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");

}
function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiImage, bonesKarpinskiXPosition, bonesKarpinskiYPosition);

	image(linaLovelaceImage, linaLovelaceXPosition, linaLovelaceYPosition);
	image(rockyKrayImage, rockyKrayXPosition, rockyKrayYPosition);
	image(cecilKarpinskiImage, cecilKarpinskiXPosition, cecilKarpinskiYPosition);
	image(robbieKrayImage, robbieKrayXPosition, robbieKrayYPosition);
	image(pawelKarpinskiImage, pawelKarpinskiXPosition, pawelKarpinskiYPosition);

}
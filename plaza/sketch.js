/*

Officer: 6549028
CaseNum: 101-3-77584415-6549028

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a yellow filled rectangle with a green outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar green filled
rectangle with a red outline around him.

Identify the man reading the newspaper by drawing a red filled rectangle
with a magenta outline around him.

Identify the woman with the dog by drawing a red filled rectangle with a
blue outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use only 255 or 0 for r,g,b values. Set alpha to 100 for some opacity.
	stroke() Use only 255 or 0 for r,g,b values.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    stroke(0,255,0);
    fill(255,255,0);
    rect(542,82,195,398);
    //dog below
    stroke(0,0,255);
    fill(255,0,0);
    rect(933,62,195,404);
    //cigarette
    stroke(255,0,0);
    fill(0,255,0);
    rect(129,69,92,130);
    //newspaper
    stroke(255,0,255);
    fill(255,0,0);
    rect(1424,109,142,300);


}

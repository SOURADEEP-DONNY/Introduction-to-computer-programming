/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 6549028
CaseNum: 201-3-86133940-6549028

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape(POINTS);
    vertex(248, 138);
    vertex(218, 204);
    vertex(252, 275);
    vertex(350, 315);
    vertex(430, 357);
    vertex(419, 412);
    vertex(453, 447);
    vertex(499, 464);
    vertex(477, 400);
    vertex(542, 384);
    vertex(596, 322);
    vertex(588, 237);
    vertex(605, 163);
    vertex(608, 130);
    vertex(342, 171);
    vertex(441, 221);
    vertex(522, 254);
    vertex(546, 186);
    endShape();

}

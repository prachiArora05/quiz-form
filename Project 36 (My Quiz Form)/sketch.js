var canvas, backgroundImage;
var questions;
var question, contestant, quiz;

function preload() {
  bgImg = loadImage("/bg.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}

function draw() {
  background(bgImg);
}
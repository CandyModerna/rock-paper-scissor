var i = 0;
var txt = ''; //the typing text
var speed = 50;

function typeWriter() {

  //clear the html initially for a text
  if (i === 0)
    document.getElementById("result").innerHTML = '';

  if (i < txt.length) {

    document.getElementById("result").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function runType() {
  //set the typing text
  txt = document.getElementById("result").innerHTML;

  //reset the index
  i = 0;
  typeWriter();
}
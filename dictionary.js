
// when click on the dictionary, it will open the cover
//The button for next page will appear
//add audio for explanations of "Urbanization" & "Loss"






function clickDictionary(){
  // open the dictionary
  document.querySelector('.book').classList.toggle('open');
  var timer = setTimeout(function() {
              window.location='test2.html'
          }, 13000);


  // show the button1
  document.getElementById('button1').style.visibility = 'visible';
  //play the Audio
  audio1Play();
  setTimeout("audio2Play()", 15000);

  // change the color of the words;
  WordColorChange();




}




function audio1Play(){
  document.getElementById('urbanization_audio').play();
  // play the second piece of audio after certain time
}

function audio2Play(){
  document.getElementById('loss_audio').play();
}

function audio3Play(){
  document.getElementById('metropolis_audio').play();
}





function WordColorChange(){
  changeWordColor1();
  setTimeout("changeWordColorBack1()",15000);
  setTimeout("changeWordColor2()",15100);
  setTimeout("changeWordColorBack2",30000);
}





//change the style of the word when the audio is playing
function changeWordColor1(){
  document.getElementById('word_urban').style.color = "red";
}
function changeWordColorBack1(){
  document.getElementById('word_urban').style.color = "black";
}

function changeWordColor2(){
  document.getElementById('word_loss').style.color = "red";
}

function changeWordColorBack2(){
  document.getElementByID('word_loss').style.color = "black";
}

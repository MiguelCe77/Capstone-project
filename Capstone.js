var queryURL = "http://smashlounge.com/api/chars/all"
var numberOfCharacters = 26

function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min)
}


function getCharacterAjax() {
  $.ajax({
    url: queryURL,
    //dataType: 'jsonp',
    success: function(data) {
      displayCharacter(data)
    }
  })
}

function randomCharacterButtonClick() {
  var rand = randomNumber(1, numberOfCharacters)

  // when the user clicks the button, you will do two things:
  // 1) Assign a string to queryURL
  // 2) call the getPokemonAjax() function
   getCharacterAjax()
}

function displayCharacter(data) {

  var name = data['name']
  var guide = data['guide']

  var textString = "<p>Name: " + name + "</br>"
  textString += "Info: " + guide + "</br>"

  document.getElementById("datalist").innerHTML += textString

   getCharacterAjax()
}




function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

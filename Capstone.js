var queryURL = "http://smashlounge.com/api/techs/all"
var numberOfTechs = 39

function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min)
}


function getTechAjax() {
  $.ajax({
    url: queryURL,
    //dataType: 'jsonp',
    success: function(data) {
      displayTech(data)
    }
  })
}

function techButtonClick() {
  queryURL = "http://swapi.co/api/people/" + rand + "/"
  console.log(queryURL)
  getPersonAJAX()
}

function displayTech(data) {

  var tech = data['tech']
  var info = data['description']

  var textString = "<p>Name: " + name + "</br>"
  textString += "Info: " + guide + "</br>"

  document.getElementById("datalist").innerHTML += textString

   getTechAjax()
}




function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

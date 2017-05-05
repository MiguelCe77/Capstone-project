var queryURL = "http://smashlounge.com/api/techs/"
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
   var rand = randomNumber(0, numberOfTechs)
  queryURL = "http://smashlounge.com/api/techs/" + rand + "/"
  console.log(queryURL)
  getTechAjax()
}

function displayTech(data) {

  var tech = data['tech']
  var info = data['description']

  var textString = "<p>Name: " + name + "</br>"
  textString += "Info: " + guide + "</br>"

  document.getElementById("datalist").innerHTML += textString

   getTechAjax()
}

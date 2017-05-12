var queryURL = "http://smashlounge.com/api/groups/"
var numberOfReigons = 100

function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min)
}


function getGroupAjax() {
  $.ajax({
    url: queryURL,
    //dataType: 'jsonp',
    success: function(data) {
      displayGroup(data)
    }
  })
}

function groupButtonClick() {
  var name = (document.getElementById("groupname").value)
  queryURL = "http://smashlounge.com/api/groups/" + name
  console.log(queryURL)
  getGroupAjax()
}

function displayGroup(data) {

  var tech = data['tech']
  var info = data['description']
  var input = data['inputs']

  var textString = "<p>Name: " + tech + "</br>"
  textString += "Info: " + info + "</br>"
  textString += "Inputs: " + input + "</br>"


  document.getElementById("datalist").innerHTML += textString

}

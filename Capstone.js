var queryURL = "http://smashlounge.com/api/techs/all"


function getPokemonAjax() {
  $.ajax({
    url: queryURL,
    //dataType: 'jsonp',
    success: function(data) {
      displayTech(data)
    }
  })
}



function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

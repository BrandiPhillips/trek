$(document).ready(function(){
// what url are we getting:
var url = 'https://trektravel.herokuapp.com/'

// what do we do with the data recieved:
var successCallback = function(response) {
  for (var i=0; i < response.length; i++) {
    $('#name').append('<h3>' + response[i].name + '</h3>');
  }
};

// select the html element used for the click event:
$('#tripList').click(function(){
  $.get(url + 'trips', successCallback);
});


}); // end of $(document).ready

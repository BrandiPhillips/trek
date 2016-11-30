$(document).ready(function(){
// what url are we getting:
var url = 'https://trektravel.herokuapp.com/'

// what do we do with the data recieved:
var successCallback = function(response) {
  for (var i=0; i < response.length; i++) {
    //  each link will be the url for the api from above variable with trips/ and the objects id added on and the name of the link will be the objects name
    $('#trips').append('<h3><a href=' + url + 'trips/' + response[i].id + '>' + response[i].name + '</a></h3>');
  }
};

// select the html element used for the click event:
$('#tripList').click(function(){
  $.get(url + 'trips', successCallback);
});

// click on a trip title and recieve details:
$('#trips').on('click', 'a', function(e){
  e.preventDefault();
  $('#trip-deetz').show();
  var url = $(this).attr('href');

   $.get(url, function(trip){
     console.log(trip);
     $('#name').text(trip.name);
     $('#id').text('Trip Id: ' + trip.id);
     $('#continent').text('Continent: ' + trip.continent);
     $('#category').text('Category: ' + trip.category);
     $('#weeks').text('Duration: ' + trip.weeks + 'Weeks');
     $('#cost').text('Cost: ' + trip.cost);
     $('#about').text(trip.about);

     tripId = trip.id;
   });
});

// ok, now that you can see the info, lets reserve a spot on the specific trip:
$('form').submit( function(e){
  e.preventDefault();
  var url = $(this).attr('action' + tripId + '/reserve');
  var formData = $(this).serialize();

  $.post(url, formData, function(response){
    $('#message').html('<p> Your Spot Has Bee Reserved! </p>')
  });
});


}); // end of $(document).ready

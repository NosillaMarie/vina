$(document).ready(function() {

  //function for inserting DB rows into HTML

  function loadUsers(table){

    var $users = $('#usersTable');

    for (i = 0; i < table.length; i++) {//loop through JSON with db data and append to $('#users-container')

      $users.append(

        "<tr><td>" + table[i].email + "</td>" +
         "<td>" + table[i].topGenre + "</td>" +
         "<td>" + table[i].secondGenre + "</td>"
        )
    }
  };

  //populate all users from DB with get request
  $.get("/api/users", function(data){

    console.log(data);

    loadUsers(data);

  });

  //populate genre selections
  var queryURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=3d866c05691ba06f9fa697f8e8c9e838&language=en-US";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          var genres = response.genres;
          for (i = 0; i < genres.length; i++) {

              $('select').append(

                "<option value='" + genres[i].name + "'>" + genres[i].name + "</option>"
              );
          };
        });

  //create new user

  $('#submit').click(function(){

    event.preventDefault();

    var $email = $('.new-email');//email field
    var genreOne = $('#genreOne').val();
    var genreTwo = $('#genreTwo').val();
      
      var newUser = {
        email: $email.val().trim(),
        topGenre: genreOne,
        secondGenre: genreTwo
      };

      $.post("/api/add", newUser)
      .done(function() {
        $email.val("");
        $('#user-pass').val("");
        location.reload();
      });

  });

});

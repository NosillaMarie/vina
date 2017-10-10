	var today = moment().format('YYYY-MM-DD');
	var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=3d866c05691ba06f9fa697f8e8c9e838&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=" + today;
	var moviePosters = {
		posters: []
	};

	$.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

    	for (i = 0; i < 10; i++) {

	        moviePosters.posters.push("https://image.tmdb.org/t/p/w640" + movies[i].poster_path);
	    };
    	
	});
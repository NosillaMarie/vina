var quizlength = 8;
var userAnswers = [];
scores = [
{name:"action", score:0},
{name:"adventure", score:0},
{name:"thriller", score:0},
{name:"horror", score:0},
{name:"romantic", score:0},
{name:"comedy", score:0},
{name:"documentary", score:0},
{name:"scifi", score:0},
{name:"fantasy", score:0},
{name:"drama", score:0}
]
var topGenre;
var secondGenre;
var questionNumber = 0;


    function checkQuiz() {
      //This function gets all the values of the radio button and places those values in an array userAnswers
      //After this function runs it then runs the functions that checks the answers, and increments the appropriate genre tally.

        var radio_check_val = "";
        for(i=1; i<(quizlength+1); i++){
        for (j = 0; j < document.getElementsByName('question' + [i]).length; j++) {
            if (document.getElementsByName('question' + [i])[j].checked) {
                radio_check_val = document.getElementsByName('question' + [i])[j].value;
                userAnswers[questionNumber] = document.getElementsByName('question' + [i])[j].value;
                questionNumber++;


            }

        }
    
}

        checkAnswers();
    }

    function checkAnswers() {
      //this function checks the user submitted answers array and adds points to specific genres based on the user input.
      var question = 1;
    for(i =0; i<quizlength; i++){
      if(question === 1){
        var statement = userAnswers[i];
        question++;
        switch(statement){
          case 'A':
            scores[8].score += 1;
            break;
          case 'B':
            scores[0].score += 1;
            break;
          case 'C':
            scores[8].score += 1;
            break;
          case 'D':
            scores[2].score += 1;
            break;
          case 'E':
            scores[6].score += 1;
            break;
        }
      }
       else if(question === 2){
        switch(statement){
          case 'A':
            scores[9].score += 2;
            break;
          case 'B':
            scores[8].score += 1;
            scores[0].score += 2;
            break;
          case 'C':
            scores[8].score += 2;
            scores[9].score += 1;
            break;
          case 'D':
            scores[7].score += 1;
            break;
          case 'E':
            scores[0].score += 1;
            break;
        }
        question++;
        
      }
       else if(question === 3){
        switch(statement){
          case 'A':
            scores[0].score += 3;
            break;
          case 'B':
            scores[1].score += 3;
            break;
          case 'C':
            scores[4].score += 3;
            break;
          case 'D':
            scores[2].score += 3;
            break;
          case 'E':
            scores[5].score += 3;
            break;
        }
        question++;
        
      }
       else if(question === 4){
        switch(statement){
          case 'A':
            scores[5].score += 2;
            scores[9].score += 2;
            break;
          case 'B':
            scores[9].score += 2;
            break;
          case 'C':
            scores[4].score += 3;
            break;
          case 'D':
            scores[2].score += 3;
            break;
          case 'E':
            scores[6].score += 1;
            break;
        }
        question++;
        
      }
       else if(question === 5){
        switch(statement){
          case 'A':
            scores[0].score += 3;
            break;
          case 'B':
            scores[9].score += 3;
            break;
          case 'C':
            scores[6].score += 1;
            scores[1].score += 2;
            break;
          case 'D':
            scores[0].score += 3;
            break;
          case 'E':
            scores[9].score += 2;
            scores[6].score += 2;
            break;
        }
        question++;
        
      }
       else if(question === 6){
        switch(statement){
          case 'A':
            scores[1].score += 3;
            scores[0].score += 1;
            break;
          case 'B':
            scores[0].score += 3;
            scores[1].score += 1;
            break;
          case 'C':
            scores[9].score += 2;
            scores[4].score += 3;
            scores[5].score += 1;
            break;
          case 'D':
            scores[6].score += 3;
            scores[9].score += 1;
            break;
          case 'E':
            scores[5].score += 4;
            break;
        }
        question++;
        
      }
       else if(question === 7){
        switch(statement){
          case 'A':
            scores[7].score += 3;
            scores[8].score += 3;
            break;
          case 'B':
            scores[8].score += 3;
            scores[1].score += 3;
            break;
          case 'C':
            scores[0].score += 3;
            scores[1].score += 3;
            break;
          case 'D':
            scores[6].score += 3;
            scores[9].score += 1;
            break;
          case 'E':
            scores[4].score += 3;
            scores[9].score += 1;
            break;
        }
      }
       else if(question === 8){
        switch(statement){
          case 'A':
            scores[0].score += 1;
            break;
          case 'B':
            scores[1].score += 1;
            break;
          case 'C':
            scores[9].score += 1;
            break;
          case 'D':
            scores[8].score += 1;
            scores[7].score += 3;
            break;
          case 'E':
            scores[6].score += 2;
            scores[9].score += 1;
            break;
        }
        question++;
        
      }
      else{
        console.log("Made it to else");
      }
    }
    tallyGenres();
}

    function tallyGenres(){

    scores.sort(function(a, b) { 
     return a.score - b.score;
    });

      tallyTopGenre();
      tallySecondGenre();

    }
    function tallyTopGenre(){
      switch(scores[9].name){
          case 'action':
      topGenre = 28;
            break;
          case 'adventure':
      topGenre = 12;
            break;
          case 'thriller':
      topGenre = 53;
            break;
          case 'horror':
      topGenre = 27;
            break;
          case 'romantic':
      topGenre = 10749;
            break;
          case 'comedy':
      topGenre = 35;
            break;
          case 'documentary':
      topGenre = 99;
            break;
          case 'scifi':
      topGenre = 878;
            break;
          case 'fantasy':
      topGenre = 14;
            break;
          case 'drama':
      topGenre = 18;
            break;
        }
    }

    function tallySecondGenre(){
      switch(scores[8].name){
          case 'action':
      secondGenre = 28;
            break;
          case 'adventure':
      secondGenre = 12;
            break;
          case 'thriller':
      secondGenre = 53;
            break;
          case 'horror':
      secondGenre = 27;
            break;
          case 'romantic':
      secondGenre = 10749;
            break;
          case 'comedy':
      secondGenre = 35;
            break;
          case 'documentary':
      secondGenre = 99;
            break;
          case 'scifi':
      secondGenre = 878;
            break;
          case 'fantasy':
      secondGenre = 14;
            break;
          case 'drama':
      secondGenre = 18;
            break;
        }
    }

    function createUser(){
      
      var newUser = {
        email: "asdf@fake.net",
        topGenre: topGenre,
        secondGenre: secondGenre,
        firebaseID: 3453
      };
      $.post("/api/add", newUser)
      .done(function() {
        $email.val("");
        $('#user-pass').val("");
        location.reload();
      });
    }


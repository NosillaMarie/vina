var quizlength = 7;
var userAnswers = [];
var action = 0;
var adventure =0;
var thriller = 0;
var horror = 0;
var romantic = 0;
var comedy = 0;
var documentary = 0;
var scifi = 0;
var fantasy = 0;
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
      console.log("quiz length is "+ quizlength);
      console.log("Made it to check answers");
      var question = 1;
    for(i =0; i<quizlength; i++){
      console.log("Made it to for loop");
      console.log("question is equal to"+ question);
      if(question === 1){
        var statement = userAnswers[i];
        question++;
        console.log("made it to if statement");
        console.log("statement is equal to "+statement);
        switch(statement){
          case 'A':
            console.log("User selected A");
            break;
          case 'B':
            console.log("User selected B");
            break;
          case 'C':
            console.log("User selected C");
            break;
          case 'D':
            console.log("User selected D");
            break;
          case 'E':
            console.log("User selected E");
            break;
        }
      }
       else if(question === 2){
        console.log("block 2");
        switch(statement){
          case 'A':
            console.log("User selected A");
            break;
          case 'B':
            console.log("User selected B");
            break;
          case 'C':
            console.log("User selected C");
            break;
          case 'D':
            console.log("User selected D");
            break;
          case 'E':
            console.log("User selected E");
            break;
        }
        question++;
        
      }
       else if(question === 3){
        console.log("block 3");
        switch(statement){
          case 'A':
            console.log("User selected A");
            break;
          case 'B':
            console.log("User selected B");
            break;
          case 'C':
            console.log("User selected C");
            break;
          case 'D':
            console.log("User selected D");
            break;
          case 'E':
            console.log("User selected E");
            break;
        }
        question++;
        
      }
       else if(question === 4){
        console.log("block 4");
        switch(statement){
          case 'A':
            console.log("User selected A");
            break;
          case 'B':
            console.log("User selected B");
            break;
          case 'C':
            console.log("User selected C");
            break;
          case 'D':
            console.log("User selected D");
            break;
          case 'E':
            console.log("User selected E");
            break;
        }
        question++;
        
      }
       else if(question === 5){
        console.log("block 5");
        switch(statement){
          case 'A':
            console.log("User selected A");
            break;
          case 'B':
            console.log("User selected B");
            break;
          case 'C':
            console.log("User selected C");
            break;
          case 'D':
            console.log("User selected D");
            break;
          case 'E':
            console.log("User selected E");
            break;
        }
        question++;
        
      }
       else if(question === 6){
        console.log("block 6");
        switch(statement){
          case 'A':
            console.log("User selected A");
            break;
          case 'B':
            console.log("User selected B");
            break;
          case 'C':
            console.log("User selected C");
            break;
          case 'D':
            console.log("User selected D");
            break;
          case 'E':
            console.log("User selected E");
            break;
        }
        question++;
        
      }
       else if(question === 7){
        console.log("block 7");
        switch(statement){
          case 'A':
            console.log("User selected A");
            break;
          case 'B':
            console.log("User selected B");
            break;
          case 'C':
            console.log("User selected C");
            break;
          case 'D':
            console.log("User selected D");
            break;
          case 'E':
            console.log("User selected E");
            break;
        }
        question++;
        
      }
      else{
        console.log("Made it to else");
      }
    }
}




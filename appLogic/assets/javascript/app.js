var quizlength = 8;
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
            fantasy += 1;
            console.log("User selected A");
            break;
          case 'B':
            action += 1;
            console.log("User selected B");
            break;
          case 'C':
            fantasy += 1;
            console.log("User selected C");
            break;
          case 'D':
            thriller += 1;
            console.log("User selected D");
            break;
          case 'E':
            documentary += 1;
            console.log("User selected E");
            break;
        }
      }
       else if(question === 2){
        console.log("block 2");
        switch(statement){
          case 'A':
            drama += 2;
            console.log("User selected A");
            break;
          case 'B':
            fantasy += 1;
            action += 2;
            console.log("User selected B");
            break;
          case 'C':
            fantasy += 2;
            drama += 1;
            console.log("User selected C");
            break;
          case 'D':
            scifi += 1;
            console.log("User selected D");
            break;
          case 'E':
            action += 1;
            console.log("User selected E");
            break;
        }
        question++;
        
      }
       else if(question === 3){
        console.log("block 3");
        switch(statement){
          case 'A':
            action += 3;
            console.log("User selected A");
            break;
          case 'B':
            adventure += 3;
            console.log("User selected B");
            break;
          case 'C':
            romantic += 3;
            console.log("User selected C");
            break;
          case 'D':
            thriller += 3;
            console.log("User selected D");
            break;
          case 'E':
            comedy += 3;
            console.log("User selected E");
            break;
        }
        question++;
        
      }
       else if(question === 4){
        console.log("block 4");
        switch(statement){
          case 'A':
            comedy += 2;
            drama += 2;
            console.log("User selected A");
            break;
          case 'B':
            drama += 2;
            console.log("User selected B");
            break;
          case 'C':
            romantic += 3;
            console.log("User selected C");
            break;
          case 'D':
            thriller += 3;
            console.log("User selected D");
            break;
          case 'E':
            documentary += 1;
            console.log("User selected E");
            break;
        }
        question++;
        
      }
       else if(question === 5){
        console.log("block 5");
        switch(statement){
          case 'A':
            action += 3;
            console.log("User selected A");
            break;
          case 'B':
            drama += 3;
            console.log("User selected B");
            break;
          case 'C':
            documentary += 1;
            adventure += 2;
            console.log("User selected C");
            break;
          case 'D':
            action += 3;
            console.log("User selected D");
            break;
          case 'E':
            drama += 2;
            documentary += 2;
            console.log("User selected E");
            break;
        }
        question++;
        
      }
       else if(question === 6){
        console.log("block 6");
        switch(statement){
          case 'A':
            adventure += 3;
            action += 1;
            console.log("User selected A");
            break;
          case 'B':
            action += 3;
            adventure += 1;
            console.log("User selected B");
            break;
          case 'C':
            drama += 2;
            romantic += 3;
            comedy += 1;
            console.log("User selected C");
            break;
          case 'D':
            documentary += 3;
            drama += 1;
            console.log("User selected D");
            break;
          case 'E':
            comedy += 4;
            console.log("User selected E");
            break;
        }
        question++;
        
      }
       else if(question === 7){
        console.log("block 7");
        switch(statement){
          case 'A':
            scifi += 3;
            fantasy += 3;
            console.log("User selected A");
            break;
          case 'B':
            fantasy += 3;
            adventure += 3;
            console.log("User selected B");
            break;
          case 'C':
            action += 3;
            adventure += 3;
            console.log("User selected C");
            break;
          case 'D':
            documentary += 3;
            drama += 1;
            console.log("User selected D");
            break;
          case 'E':
            romantic += 3;
            drama += 1;
            console.log("User selected E");
            break;
        }
       else if(question === 8){
        console.log("block 3");
        switch(statement){
          case 'A':
            action += 1;
            console.log("User selected A");
            break;
          case 'B':
            adventure += 1;
            console.log("User selected B");
            break;
          case 'C':
            drama += 1;
            console.log("User selected C");
            break;
          case 'D':
            fantasy += 1;
            scifi += 3;
            console.log("User selected D");
            break;
          case 'E':
            documentary += 2;
            drama += 1;
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




function checkans(x, answer) {

	if (document.testForm.box[x-1].value == "") {
		alert("Please enter a valid answer");
		return false;
	}
	
	else if (document.testForm.box[x-1].value == answer) {
		correctAnswerFeedback();
        return true;
	}
	
	else {
		incorrectAnswerFeedback();
        return true;

   }
}

function incorrectAnswerFeedback() {
	alert("Bee ko!");
}

function correctAnswerFeedback(){
	alert("Bee ni!");
}

function validate(Student, Correct) {
	var studentAnswer = Student.value;
	var correctAnswer = Correct;
	result = ""
	for (var i = 0; i< correctAnswer.length; i ++) {
        var CorrectX = correctAnswer.charAt(i);
        var StudentX = studentAnswer.charAt(i);
        if (CorrectX == StudentX) {
        	result = result + CorrectX;
        } else {
        	result = result +  "*";
        }
	}
	Student.value = result;
     if(Student.value == Correct){
          alert("Correct");
      }
}

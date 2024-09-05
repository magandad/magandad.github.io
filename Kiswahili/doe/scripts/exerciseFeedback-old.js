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
	alert("Si sawa!");
}

function correctAnswerFeedback(){
	alert("Sawa!");
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
    if (InStr(result, "*") == -1) {
      alert("You are right")
      
     }
     else {
       alert("Try to fix the letters that are wrong")
     }
}

InStr(strSearch, charSearchFor) 
// : Returns the first location a substring (SearchForStr)
// was found in the string str.  (If the character is not
// found, -1 is returned.)
// Requires use of:Mid function
// Len function

                     {
 for (i=0; i < Len(strSearch); i++)
{
if (charSearchFor == Mid(strSearch, i, 1))
{
return i;
  }
}
return -1;
}

function Len(str)

// IN: str - the string whose length we are interested in
// RETVAL: The number of characters in the string 
{  return String(str).length;  }

 function Mid(str, start, len)
/***
 IN: str - the string we are LEFTing
start - our string's starting position (0 based!!)
len - how many characters from start we want to get

 RETVAL: The substring from start to start+len
                             ***/
                             {
// Make sure start and len are within proper bounds
if (start < 0 || len < 0) return "";
var iEnd, iLen = String(str).length;
if (start + len > iLen)
iEnd = iLen;
 else
iEnd = start + len;
return String(str).substring(start,iEnd);
                             }

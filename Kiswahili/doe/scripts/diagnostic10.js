

function mailIt(form) {
  var data = document.testForm
  var userInfo = "" 
 var mytext = "" 
 if(data.recipient.value == ""){ 
  alert("You must enter your teacher's address!"); 
   return false;
 }
 else{ 
 userInfo += "To: " + data.recipient.value + "\n" 
 }
 if (data.emailad.value == ""){ 
alert("You need to enter your email address also!"); 
return false;
}
 else{
userInfo += "From: " + data.emailad.value + "\n" 
}
userInfo += "Subject: " + "Student exercise" + "\n\n" 
userInfo += "Student: " + data.student.value + "\n" 
userInfo += "Page Title:  " + document.title + "\n\n" 
var a = new Array();

a[1] = "I. Katika nafasi uliyopewa, andika maana ya maneno haya kwa kuchagua kutoka A mpaka F. (In the given space, write the meaning of the given words by choosing from A to F)\n 1. Mashuhuri: \n";

a[2] = "2. Kasi: ";
a[3] = "3. Sare: ";
a[4] = "4. Sisitiza: ";
a[5] = "5. Dumisha: ";
a[6] = "6. Jadi: ";
a[7] = "II. Andika neno la kitenzi (verb) kutokana na maneno ya nomino (noun). Fanya sentensi kwa kutumia maneno yote mawili. (Write a verb from the given nouns. Use both words in a sentence. Follow the given example): \n 1. mashindano:";
a[8] = "2. mazoezi : ";
a[9] = "3. mapumziko: ";
a[10] = "4. mchezo: ";
a[11] = "5. mlio : ";
a[12] = "III.	Kwa kawaida unafanya nini ili kujistarehesha? Ukipata nafasi ya kwenda Tanzania utajistarehesha vipi? Andika insha ya ukurasa mmoja. (How do you usually entertain your self? If you get the chance to go to Tanzania how will you entertain yourself? Write a one page.): ";

for (x=1; x<=12; x++){

 mytext += a[x] + "\n\n";
 mytext += eval("data.box" + x + ".value");
mytext += "\n\n";
}

form.mailBody.value = "(bs)" + userInfo + mytext + "(es)" 
form.action = "http://ccat.sas.upenn.edu/cgi-bin/tamil/sendkiko" 
return true
}

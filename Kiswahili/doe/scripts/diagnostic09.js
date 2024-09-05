

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

a[1] = "I. Watu wa Afrika ya Mashariki wanatumia vyombo gani wanaposafiri kwa barabara? \n 1)";
a[2] = "2) ";
a[3] = "3) ";
a[4] = "4) ";
a[5] = "II. Watu wa Afrika ya Mashariki wanatumia vyombo gani wanaposafiri majini?\n 5)";
a[6] = "6) ";
a[7] = "7) ";
a[8] = "8) ";
a[9] = "III. Kwa desturi unafanya nini unapofika kiwanja cha ndege cha kimataifa?\n 9) ";
a[10] = "10) ";
a[11] = "11) ";

a[12] = "IV. Andika neno la kitenzi (verb) kutokana na maneno ya nomino (noun). Fanya sentensi kwa kutumia maneno yote mawili. (Write a verb from the given nouns. Use both words in a sentence. Follow the given example) 1. ukaguzi: \n\n";
a[13] = "2. mazungumzo: ";
a[14] = "3. mazao: ";
a[15] = "4. mifugo: ";
a[16] = "5. mwendo: ";
a[17] = "V. Andika insha ya ukurasa mmoja juu ya safari ambayo umeifanya au ungependa kuifanya. (Write a one page essay on a trip that you have already done or would like to do.)\n\n";


for (x=1; x<=17; x++){

 mytext += a[x] + "\n\n";
 mytext += eval("data.box" + x + ".value");
mytext += "\n\n";
}

form.mailBody.value = "(bs)" + userInfo + mytext + "(es)" 
form.action = "http://ccat.sas.upenn.edu/cgi-bin/tamil/sendkiko" 
return true
}

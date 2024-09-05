

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

a[1] = "I.	Maneno ya kikundi cha kwanza yana uhusiano na maneno ya kikundi cha pili. Fananisha kwa kuandika katika nafasi uliyopewa. (The words in the first group are related to the words in the second group. Write the matching word in the given space.)\n\n 1. Mlima Kilimanjaro: ";
a[2] = "2. Maporomoko ya maji : ";
a[3] = "3. Kuezekwa: ";
a[4] = "4. Mfalme: ";
a[5] = "5. Moto: ";
a[6] = "6. Kibla: ";
a[7] = "7. Mabaki: ";
a[8] = "8. Ufugaji: ";
a[9] = "II. Andika neno la kitenzi (verb) kutokana na maneno ya nomino (noun). Fanya sentensi kwa kutumia maneno yote mawili. (Write a verb from the given nouns. Use both words in a sentence. Follow the given example)\n\n 1. ulinzi: ";
a[10] = "2. marekebisho: ";
a[11] = "3. makumbusho: ";
a[12] = "4. majengo: ";
a[13] = "5. makao: ";
a[14] = "II. Ukipata nafasi ya kwenda Afrika ya Mashariki utatembelea sehemu gani? Kwanini? Andika insha ya ukurasa mmoja. (If you go to East Africa what areas would you like to visit and why? Write a one page essay.): \n\n";

for (x=1; x<=14; x++){

 mytext += a[x] + "\n\n";
 mytext += eval("data.box" + x + ".value");
mytext += "\n\n";
}

form.mailBody.value = "(bs)" + userInfo + mytext + "(es)" 
form.action = "http://ccat.sas.upenn.edu/cgi-bin/tamil/sendkiko" 
return true
}

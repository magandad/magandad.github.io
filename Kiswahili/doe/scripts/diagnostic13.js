

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
a[1] = "I. Msamiati. Fananisha neno katika kundi la A na neno katika kundi la B linalokwenda pamoja katika matumizi. Kama mfano wa kwanza. Maneno yote yametumiwa katika somola kwanza mpaka la sita katika mlango wa 13.\n\n 1) Kujitanda ";

a[2] = "2. Kufunga ndoa: ";
a[3] = "3. Kuandaa: ";
a[4] = "4. Kujipamba: ";
a[5] = "5. Kutumbuiza: ";
a[6] = "6. Kukaribisha: ";
a[7] = "7. Kumeremeta: ";
a[8] = "8. Kupata shahada: ";
a[9] = "II. Sentensi. Chagua maneno matano (5) kutoka A. Tumia kila neon katika sentensi yako menyewe ambayo itaonyesha maana kamili.\n\n 1. ";
a[10] = "2. ";
a[11] = "3. ";
a[12] = "4. ";
a[13] = "5. ";
a[14] = "III. Insha. Andika insha ya ukurasa mmoja juu ya mada ya arusi. Unaweza kuandika muhtasari wa arusi za Tanzania halafu ukafananisha na arusi za sehemu unayotoka.\n\n";

for (x=1; x<=14; x++){

 mytext += a[x] + "\n\n";
 mytext += eval("data.box" + x + ".value");
mytext += "\n\n";
}

form.mailBody.value = "(bs)" + userInfo + mytext + "(es)" 
form.action = "http://ccat.sas.upenn.edu/cgi-bin/tamil/sendkiko" 
return true
}

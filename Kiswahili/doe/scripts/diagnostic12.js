

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

a[1] = "I. Katika nafasi uliyopewa, andika maana ya maneno haya kwa kuchagua kutoka A mpaka F. (In the given space, write the meaning of the given words by choosing from A to F)\n\n 1. Kutibu: ";

a[2] = "2. Wagonjwa: ";
a[3] = "3. Kujifungua: ";
a[4] = "4. Uzazi wa majira: ";
a[5] = "5. Malaria: ";
a[6] = "6. Muarubaini: ";
a[7] = "II. Mama waja wazito hupata huduma gani katika kituo cha afya ya kisasa huko Tanzania? Andika maelezo mafupi. (What kind of services do pregnant women get from a modern health center? Write a short description)";
a[8] = "III. Andika maoni yako juu ya uganga wa jadi. (Write your opinion on traditional medicine)";
a[9] = "IV. Wat wanafanya nini katika nchi yako? Andika insha ya ukurasa. (What do people do in your country? Write a one page essay.)  ";

for (x=1; x<=9; x++){

 mytext += a[x] + "\n\n";
 mytext += eval("data.box" + x + ".value");
mytext += "\n\n";
}

form.mailBody.value = "(bs)" + userInfo + mytext + "(es)" 
form.action = "http://ccat.sas.upenn.edu/cgi-bin/tamil/sendkiko" 
return true
}

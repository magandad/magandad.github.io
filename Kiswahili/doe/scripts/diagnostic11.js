

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
mytext += "I.	Panga maneno haya katika mafungu matatu yanayohusika. Kila fungu lina maneno manne. (Arrange the words in related groups. Each group has 4 words)\n\n";

mytext += "Fungu la kwanza: Ukulima  = "  + data.box1.options[data.box1.selectedIndex].text + "," + data.box2.options[data.box2.selectedIndex].text + ", " + data.box3.options[data.box3.selectedIndex].text + ", " + data.box4.options[data.box4.selectedIndex].text + "\n\n" 
mytext += "Fungu la pili: Ufugaji  = "  + data.box5.options[data.box5.selectedIndex].text + "," + data.box6.options[data.box6.selectedIndex].text + ", " + data.box7.options[data.box7.selectedIndex].text + ", " + data.box8.options[data.box8.selectedIndex].text + "\n\n" 
mytext += "Fungu la tatu: Uchongaji na Useremala = "  + data.box9.options[data.box9.selectedIndex].text + "," + data.box10.options[data.box10.selectedIndex].text + ", " + data.box11.options[data.box11.selectedIndex].text + ", " + data.box12.options[data.box12.selectedIndex].text + "\n\n" 
mytext += "II. Katika nafasi uliyopewa, andika maana ya maneno haya kwa kuchagua kutoka A mpaka F. (In the given space, write the meaning of the given words by choosing from A to F)\n\n";
mytext += "1. Kutotoa: " + data.box13.value + "\n";
mytext += "2. Kukamua: " + data.box14.value + "\n";
mytext += "3. Kutoa: " + data.box15.value + "\n";
mytext += "4. Kuotesha: " + data.box16.value + "\n";
mytext += "5. Kupalilia: " + data.box17.value + "\n\n";
mytext += "6. Kuvuna: " + data.box18.value + "\n\n";
mytext += "7. Kuchonga: " + data.box19.value + "\n\n";
mytext += "III. Andika insha ya ukurasa mmoja juu ya shughuli muhimu ambazo watu wan chi yako wanafanya. (Write a page about important activities that people of your country do.) \n\n";

mytext += data.box20.value;

form.mailBody.value = "(bs)" + userInfo + mytext + "(es)" 
form.action = "http://ccat.sas.upenn.edu/cgi-bin/tamil/sendkiko" 
return true
}



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
Item = data.pbox1.selectedIndex;
mytext += "1. Jaza mapengo kwa kutumia maneno sahihi (Select the correct word):\n\n"

mytext += "Hodi = "  + data.pbox1.options[Item].text + "\n\n" 
Item = data.pbox2.selectedIndex;
mytext += "Hujambo = "  + data.pbox2.options[Item].text + "\n\n" 
Item = data.pbox3.selectedIndex;
mytext += "Habari = "  + data.pbox3.options[Item].text + "\n\n" 
Item = data.pbox4.selectedIndex;
mytext += "Shikamoo = "  + data.pbox4.options[Item].text + "\n\n" 
Item = data.pbox5.selectedIndex;
mytext += "Hamjambo = "  + data.pbox5.options[Item].text + "\n\n" 
Item = data.pbox6.selectedIndex;
mytext += "Watoto = "  + data.pbox6.options[Item].text + "\n\n" 
Item = data.pbox7.selectedIndex;
mytext += "Karibu  = "  + data.pbox7.options[Item].text + "\n\n" 
Item = data.pbox8.selectedIndex;
mytext += "Asante = "  + data.pbox8.options[Item].text + "\n\n" 
Item = data.pbox9.selectedIndex;
mytext += "Kwaheri = "  + data.pbox9.options[Item].text + "\n\n" 
Item = data.pbox10.selectedIndex;
mytext += "Tutaonana = "  + data.pbox10.options[Item].text + "\n\n" 
if (data.box2.value != ""){
mytext += "2) Insha. Andika paragrafu moja kuhusu wewe mwenyewe."  +  "\n\n" + data.box2.value + "\n\n" 
}
mytext += "3. Maliza sentensi hizi kama sentensi ya kwanza: \n\n"
if(data.cbox1.value != ""){

mytext += "Wewe/toka Kenya = "  + data.cbox1.value + "\n\n" 
}
if(data.cbox2.value != ""){
mytext += "Yeye/soma Chuo Kikuu cha Pennsylvania = "  + data.cbox2.value + "\n\n" 
}
if(data.cbox3.value != ""){
mytext += "Sisi/kaa Philadelphia = "  + data.cbox3.value + "\n\n" 
}
if(data.cbox4.value != ""){
mytext += "Ninyi/toka Kenya  = "  + data.cbox4.value + "\n\n" 
}
if(data.cbox5.value != ""){
mytext += "Wao/soma Chuo Kikuu cha Pennsylvania  = "  + data.cbox5.value + "\n\n" 
}
mytext += "4. Jibu maswali haya ya maamkio: \n\n"
if(data.cbox6.value != ""){
mytext += "Hujambo? = "  + data.cbox6.value + "\n\n" 
}
if(data.cbox7.value != ""){
mytext += "Hamjambo?  = "  + data.cbox7.value + "\n\n" 
}
if(data.cbox8.value != ""){
mytext += "Dada hajambo? = "  + data.cbox8.value + "\n\n" 
}
if(data.cbox9.value != ""){
mytext += "Watoto hawajambo?  = "  + data.cbox9.value + "\n\n" 
}
form.mailBody.value = "(bs)" + userInfo + mytext + "(es)"
 
form.action = "http://ccat.sas.upenn.edu/cgi-bin/tamil/sendkiko" 
return true
}
function rightString(InString, num)  {
OutString = InString.substring
(InString.length-num,InString.length);
return (OutString);
}
function set(text){
var ret = rightString(text, 3)
if (ret == "gif" || ret == "jpg" ){
text = "<img src='" + text + "'>" 
win = window.open("", "newwin", "height=250,width=400")
win.document.write (text)
win.document.close();
}
else if (ret == "mov"){
location = text
}
else if (ret == "htm"){
location = text
}
else if (ret == "tml"){
location = text
}
else if (ret == "ram"){
location = text
}
else if (ret == ".ra"){
location = text
}
else if (ret == ".au"){
location = text
}
else{
win = window.open("", "newwin", "height=250,width=400")
win.document.write ("<font color=red size=+4>" + text)
win.document.close();
win.creator = self
}
}


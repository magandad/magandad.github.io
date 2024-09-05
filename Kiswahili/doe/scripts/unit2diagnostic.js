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
if (data.x1.value != ""){
mytext += "1. Saturday = " + data.x1.value + "\n" 
}
if (data.x2.value != ""){
mytext += "2. Sunday= " + data.x2.value + "\n" 
}
if (data.x3.value != ""){
mytext += "3. Monday = " + data.x3.value + "\n" 
}
if (data.x4.value != ""){
mytext += "4. Tuesday = " + data.x4.value + "\n" 
}
if (data.x5.value != ""){
mytext += "5. Wednesday = " + data.x5.value + "\n" 
}
if (data.x6.value != ""){
mytext += "6. Thursday = " + data.x6.value + "\n" 
}
if (data.x7.value != ""){
mytext += "7. Friday = " + data.x7.value + "\n\n\n" 
}
if (data.x8.value != ""){
mytext += "1. 1960 = " + data.x8.value + "\n" 
}
if (data.x9.value != ""){
mytext += "2. 1958 = " + data.x9.value + "\n" 
}
if (data.x10.value != ""){
mytext += "3. 1972 = " + data.x10.value + "\n" 
}
if (data.x11.value != ""){
mytext += "4. 1964 = " + data.x11.value + "\n" 
}
if (data.x12.value != ""){
mytext += "5. 1950 = " + data.x12.value + "\n\n\n" 
}
if (data.x13.value != ""){
mytext += "1. Februari ni = " + data.x13.value + "\n" 
}
if (data.x14.value != ""){
mytext += "2. Machi ni = " + data.x14.value + "\n" 
}
if (data.x15.value != ""){
mytext += "3. Juni = " + data.x15.value + "\n" 
}
if (data.x16.value != ""){
mytext += "4. Septemba= " + data.x16.value + "\n" 
}
if (data.x17.value != ""){
mytext += "5. Novemba = " + data.x17.value + "\n\n\n" 
}
if (data.x18.value != ""){
mytext += "Andika insha fupi kuhusu wewe mwenyewe na familia yako.\n\n " + data.x18.value + "\n" 
}

form.mailBody.value = "(bs)" + userInfo + mytext + "(es)" 
form.action = "http://ccat.sas.upenn.edu/cgi-bin/tamil/sendkiko1" 
return true
}

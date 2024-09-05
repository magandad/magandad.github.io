

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

if(data.box1.value != ""){
mytext += "Bakari atakwenda = "  + data.box1.value + "\n\n" 
}
if(data.box2.value != ""){
mytext += "Bakari atakaa Tanzania siku = "  + data.box2.value + "\n\n" 
}
if(data.box3.value != ""){
mytext += "Asha atakaa Kenya = "  + data.box3.value + "\n\n" 
}
if(data.box4.value != ""){
mytext += "Bakari hapendi = "  + data.box4.value + "\n\n" 
}
if(data.box5.value != ""){
mytext += "Namba ya simu ya Bakari ni = "  + data.box5.value + "\n\n" 
}
if(data.box6.value != ""){
mytext += "Anuani ya Asha ni = "  + data.box6.value + "\n\n" 
}
form.mailBody.value = "(bs)" + userInfo + mytext + "(es)" 
form.action = "http://ccat.sas.upenn.edu/cgi-bin/tamil/sendkiko1" 
return true
}


function validate(Student){

alert(document.testForm.box1.value);

	if (Student.value == 'box1'){
		
		  if (document.testForm.box1.value == "Irinwó náírà ni" || 
			  document.testForm.box1.value == "(#400)" || 
			  document.testForm.box1.value == "#400"){
			    alert("That is correct");
				return true;
		  }else{
			   alert("That is wrong");
			   return false;
		   }
	}
  
  
}
	
	


function check(form){
		  var num = prompt("enter a number:");
		 
		  if(num>100)
		     {
			 alert(num + " is greater than 100:");
			 }
			 
			 else
			 
			 alert(num + " is not greater than 100:");
			 
		 }


function convert(form) {
		if(form.celsius.value){
			
		form.fahrenheit.value=Number(form.celsius.value)*1.8+32;
		}
		else{
			form.celsius.value=Number(form.fahrenheit.value)+100;
		}
       
      }	  

function multiply(form){
	  
	  if(form.num1.value&&form.num2.value){
	     var x = Number(form.num1.value);
		 var y = Number(form.num2.value);
		 
		 var mul = x*y;
	


          form.result1.value = mul;
		 }
		 
		 else alert("please enter 2 numbers");
}

function divide(form){
	  
	  if(form.num1.value&&form.num2.value){
	     var x = Number(form.num1.value);
		 var y = Number(form.num2.value);
		 
		 
     	 var div = x/y;

          form.result2.value = div;
		 
		 }
		 
		 else alert("please enter 2 numbers");
	}

function calculate(form){
	  
	  if(true){
	  alert(hy);
	     var x = Number(form.sub1.value);
		 var y = Number(form.sub2.value);
		 var z = Number(form.sub3.value);
		 
		 var result = (x+y+z)/300;
		 
     	 if (result>=80&&result<=100) {
		alert("congratulation you scored distinction with " + result + "%");

	}
	else  if (result>=60&&result<=79) {
		alert("congratulation you scored First divison with " + result + "%");

	}
	else if (result>=40&&result<=59) {
		alert("congratulation you scored second divison with " + result + "%");

	}
	  }
	
	else
	
		alert("Sorry you failed");
	 }
		 
	
	

function count()
{
	var x=prompt("enter string","boy");
	var y=prompt("enter string","girl");
	
	var choice = prompt("Do you want to count character b and g? Press Y for Yes and X for No");
	while(choice!='X')
	{
	  var count1 = 0;
	  var count2 = 0;
	
	for (var i = 0; i < x.length; i++) {

		if (x[i]=='b')
		{
			count1++;
		}
	}
	for (var i = 0; i < y.length; i++) {
		if (y[i]=='g')
		{
			count2++;
		}
	}
	alert("the number of char b in " + x + " is:" + count1);
	alert("the number of char g in" + y + " is:" + count2);
	
	choice = prompt("Do you want to continue? Press Y to continue and X to exit");
}

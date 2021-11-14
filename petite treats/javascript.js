function validateform(){  
var name=document.myform.name.value;  
var password=document.myform.password.value;  
var email=document.myform.email.value;
if (name==null || name==""){  
  alert("Name cannot be blank");  
  return false;  
}if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }if (email==null || email==""){  
  alert("email can't be blank");  
  return false;
  }  
} 

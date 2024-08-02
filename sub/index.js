var navl=document.getElementById('navlinks');
function showmenu(){
    navl.style.right ='0';
}
function hidemenu(){
    navl.style.right ='-200px'
}



function validateform(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;

    document.getElementById("nameerror").innerHTML="";
    document.getElementById("ageerror").innerHTML="";
    document.getElementById("emailerror").innerHTML="";
    document.getElementById("pherror").innerHTML="";

    if(name===""){
        document.getElementById("nameerror").innerHTML="Name is required";
        return false;
    }
    if(age===""){
        document.getElementById("ageerror").innerHTML="Age is required";
        return false;
    }
    if(email===""){
        document.getElementById("emailerror").innerHTML="Email is required";
        return false;
    }
    
    if(phone===""){
        document.getElementById("pherror").innerHTML="phone number is required";
        return false;
    }else if(phone>10){
        document.getElementById("pherror").innerHTML="invalid phone number";
        return false;
    }

    return true;
}








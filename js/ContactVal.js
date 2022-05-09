//contact for validation
$("form").submit(function(){
    let name = $("#name").val();
    let email = $("#mail").val();
    let phone = $("#phone").val();
    let message = $("#message").val();
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(name == ""){
        $("#name").focus();
        $("#name").css("border","1px solid red").css("box-shadow","0 0 10px red");
        $("#name").attr("placeholder","Please enter your name");
        return false;
    }
    else if(email == ""){
        $("#mail").focus();
        $("#mail").css("border","1px solid red").css("box-shadow","0 0 10px red");
        $("#mail").attr("placeholder","Please enter your email");
        return false;
    }
    else if(!filter.test(email)){
        $("#mail").focus();
        $("#mail").css("border","1px solid red").css("box-shadow","0 0 10px red");
        $("#mail").attr("placeholder","Please enter a valid email");
        return false;
    }
    else if(isNaN(phone) && phone.lenght() >= 8){ 
        $("#phone").focus();
        $("#phone").css("border","1px solid red").css("box-shadow","0 0 10px red");
        $("#phone").attr("placeholder","Please enter your phone number");
        return false;
    }
    else if(message == ""){
        $("#message").focus();
        $("#message").css("border","1px solid red").css("box-shadow","0 0 10px red");
        $("#message").attr("placeholder","Please enter your message");
        return false;
    }
    else{
        return true;
    }
})
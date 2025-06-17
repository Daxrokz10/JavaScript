$(document).ready(()=>{
    $('#myForm').validate({
        rules:{
            "email" : {
                required: true,
            }
        },
        messages:{
            "email" : {
                required : "Please Enter your Email Address"
            }
        }
    })
});
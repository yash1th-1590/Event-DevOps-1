function validateForm(){

    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let mobile=document.getElementById("mobile").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let age=document.getElementById("age").value;

    let nameRegex=/^[A-Za-z]{8,10}$/;
    let mobileRegex=/^[0-9]{10}$/;
    let emailRegex=/^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,}$/;
    let passRegex=/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@#$%^&*!]).{8,10}$/;

    if(!nameRegex.test(fname)){
        alert("First Name should contain only alphabets and be 8-10 characters.");
        return false;
    }

    if(!nameRegex.test(lname)){
        alert("Last Name should contain only alphabets and be 8-10 characters.");
        return false;
    }

    if(!mobileRegex.test(mobile)){
        alert("Enter a valid 10-digit mobile number.");
        return false;
    }

    if(!emailRegex.test(email)){
        alert("Enter a valid email.");
        return false;
    }

    if(!passRegex.test(password)){
        alert("Password should be 8-10 characters with letters, numbers and symbols.");
        return false;
    }

    if(age<=21){
        alert("Age must be above 21.");
        return false;
    }

    return true;
}
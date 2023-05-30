const emailError = document.getElementById("email-error");
const pswrdInput = document.getElementById("password-input");

function validateEmail(){
    let email = document.getElementById('email-input').value;

    if (email.length == 0) {
        emailError.innerHTML = '&#9888 Email is required!'
        emailError.style.display = 'block'
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = '&#9888 Email is invalid!'
        emailError.style.display = 'block'
        return false;
    }
    else{
        emailError.style.display = 'none';
        return true;
    }
}
function showPassword(){

    if (pswrdInput.type === "password") {
        pswrdInput.type = "text";
    } else {
        pswrdInput.type = "password";
    }
    
    let eyeIcon = document.getElementById('eye-icon');

    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
}

function validatePassword(){
    let pswrdError = document.getElementById("password-error");

    if(pswrdInput.value.length == 0){
        pswrdError.innerHTML = '&#9888 password is required!'
        pswrdError.style.display = 'block'
        return false;
    }
    if(pswrdInput.value.length < 6){
        pswrdError.innerHTML = '&#9888 password should not be less that six(6) characters!'
        pswrdError.style.display = 'block'
        return false;
    }
    else{
        pswrdError.style.display = 'none'
        return true;
    }
}

function validateForm(){
    var url = "http://127.0.0.1:5500/dashboardPage/dashboard.html"
    if(!validateEmail() || !validatePassword()){
        return false;
    }
    else{
        window.location.replace(url)
        return true;
    }
}
// -------------name validation------------------
const nameError = document.getElementById('name-error');

function validateFirstname(){
    let name = document.getElementById('first-name').value;

    if(name.length == 0){
        nameError.innerHTML = '&#9888 Name is required!';
        nameError.style.display = 'block';
        return false;
    }
    if(!name.match(/^[A-Za-z]*$/)) {
        nameError.innerHTML = '&#9888 digits are invalid here!';
        nameError.style.display = 'block';
        return false;
    }
        nameError.style.display = 'none';
        return true;
}

// -------------surname validation------------------
const surnameError = document.getElementById('surname-error');

function validateSurname(){
    let surname = document.getElementById('surname-input').value;

    if(surname.length == 0){
        surnameError.innerHTML = '&#9888 surname is required!';
        surnameError.style.display = 'block';
        return false;
    }
    if(!surname.match(/^[A-Za-z]*$/)) {
        surnameError.innerHTML = '&#9888 digits are invalid here!';
        surnameError.style.display = 'block';
        return false;
    }
        surnameError.style.display = 'none';
        return true;
}

//-------------email validation---------------------
const emailError = document.getElementById("email-error");

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

// ----------password validation-----------------------
const pswrdError = document.getElementById("password-error");
const pswrdInput = document.getElementById('password-input');

function validatePassword(){
    let pswrd = document.getElementById('password-input').value;

    if(pswrd.length == 0) {
        pswrdError.innerHTML = '&#9888 Password is required!';
        pswrdError.style.display = 'block';
        return false;
    }
    if(pswrd.length < 6) {
        pswrdError.innerHTML = '&#9888 Password should be up to six(6) characters!';
        pswrdError.style.display = 'block';
        return false;
    }
    pswrdError.style.display = 'none';
    return true;
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

// ---------- confirm password validation-----------------------
const confirmError = document.getElementById("confirm-error");
const confirmInput = document.getElementById('confirm-input');

function validateConfirm(){
    let confirm = document.getElementById('confirm-input').value;
    let pswrd = document.getElementById('password-input').value;

    if(confirm.length == 0) {
        confirmError.innerHTML = '&#9888 Confirm your password!';
        confirmError.style.display = 'block';
        return false;
    }
    if(confirm.length < 6){
        confirmError.innerHTML = '&#9888 Passwords do not match!';
        confirmError.style.display = 'block';
        return false;
    }
    if(confirm !== pswrd){
        confirmError.style.display = 'block';
        return false;
    }
    confirmError.style.display = 'none';
    return true;
}

function showConfirm(){

    if (confirmInput.type === "password") {
        confirmInput.type = "text";
    } else {
        confirmInput.type = "password";
    }
    
    let eyeIcon = document.getElementById('eyeIcon');

    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
}

// ----------validate sign in button--------------

function validateForm(){
    var url = "http://127.0.0.1:5500/dashboardPage/dashboard.html"
    if(!validateFirstname() || !validateSurname() || !validateEmail() ||  !validatePassword() ||  !validateConfirm()){
        return false;
    }
    else{
        window.location.replace(url)
        return true;
    }
}
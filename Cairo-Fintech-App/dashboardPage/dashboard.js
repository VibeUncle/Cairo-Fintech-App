const eyeIcon = document.getElementById('eye-icon');
const acctBal = document.getElementById("account-balance")

function showAmount(){
    eyeIcon.classList.toggle('fa-eye-slash');
    eyeIcon.classList.toggle('fa-eye');
    acctBal.style.transition = "all .3s"
    
    if(eyeIcon.classList.toggle('fa-eye')){
        acctBal.style.filter = "blur(0px)";
        
    }
    if (eyeIcon.classList.toggle('fa-eye')){
        acctBal.style.filter = "blur(7px)";
    }
}


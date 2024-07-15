function validateEmail(event) {
    console.log(event);

}



function validatePhone(event) {  
    let phone = event.target.value.replace(" ", "");
    phone = phone.replace(/(\(\d{2}\))(\d{5}-)(\d{4})\d*/, "$1 $2$3");
    phone = !phone.match(/[-]/) ? phone.replace(/(\(\d{2}\))(\d{5})/, "$1 $2-") : phone;
    event.target.value = !phone.match(/[()]/) ? phone.replace(/(\d{2})/, "($1)") : phone;
}

document.getElementById("phone").addEventListener("input", validatePhone);

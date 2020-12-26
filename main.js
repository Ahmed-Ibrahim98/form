var first_name = document.getElementById("fname");
var last_name = document.getElementById("lname");
var email = document.getElementById("email");
document.getElementById("btn-alert").addEventListener("click", function (e) {
    var emailValue = email.value.trim();
    var fnameValue = first_name.value.trim();
    var lnameValue = last_name.value.trim();
    if (!emailValue || !fnameValue || !lnameValue) {
        e.preventDefault()
        alert("you have to fill in the email,\n first and last name fields")
    }
    else {
        alert(`Hello, ${fnameValue} ${lnameValue}`);
    }
})
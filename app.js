function confirmForm() {
    var password = document.forms["login"]["password"].value;
    var username = document.forms["login"]["username"].value;
    const user = {
    username: "Tmax",
    password: "tmax123"
    }
    if(username  == "") {
        alert( "Please provide your username!" );
    }
    if(password == "" ) {
        alert( "Please provide your password!" );
    }
    if (username == user.username && password == user.password) {
        alert("Login Sucessfully");
    }
    else {
        alert("Invalid Login");
    }   
}
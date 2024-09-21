function getMessage() {
    let userName = document.getElementById("uName").value;
    let passWord = document.getElementById("pWord").value;
    
    let regpass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;  
    let regUser = /[a-zA-Z0-9]{5,10}/;
    

    if (regUser.test(userName)) {
        document.getElementById("pMsg1").innerHTML = "This is a valid Username";
    } else {
        document.getElementById("pMsg1").innerHTML = "Invalid Username.";
    }//end of regUser
    if (regpass.test(passWord)) {
        document.getElementById("pMsg").innerHTML = "This is a valid password!";
    } else {
        document.getElementById("pMsg").innerHTML = "Invalid password.";
    }//end of regpass
}//end of the function


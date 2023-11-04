let signedInUsername;

function submitBtn() {
    let usernameInput = $("#username").val();
    let emailInput = $("#emailId").val();
    let passInput = $("#password").val();
    const username = /^[a-zA-Z]+$/;
    const emailId = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/;
    const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let usernameRegexTest = username.test(usernameInput);
    let emailRegexTest = emailId.test(emailInput);
    let passwordRegexTest = password.test(passInput);
    if (usernameInput.length > 3 && emailInput.length > 3 && passInput.length > 3 && usernameRegexTest && emailRegexTest && passwordRegexTest) {
        $("#usernameError").hide();
        $("#emailError").hide();
        $("#passwordError").hide();

        signedInUsername = $("#username").val();
        setCookie("username", signedInUsername, 7)
        let url = './calculator.html';
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('target', `_blank`);
        link.click();
    }
    else {
        if (usernameInput.length < 3) {
            $("#usernameError").html("The Username should be more than 3 letters")
        }
        if (!username.test(usernameInput)) {
            $("#usernameError").html("The Username should not contain any digits")
        }
        if (emailInput.length < 3) {
            $("#emailError").html("Please enter valid email Id")
        }
        if (!emailId.test(emailInput)) {
            $("#emailError").html("Please enter northeastern email Id")
        }
        if (!password.test(passInput)) {
            $("#passwordError").html("Please enter valid password")
        }
        return false;
    }

}

function setCookie(cookieName, cookieValue, daysToExpire) {
    debugger
    var date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
    console.log("setCookieValue: " + cookieValue);
    alert(cookieValue)
}
document.getElementById("signedInUsername").innerHTML = document.cookie.match('(^|;)\\s*' + "username" + '\\s*=\\s*([^;]+)') ? "Hello " + document.cookie.match('(^|;)\\s*' + "username" + '\\s*=\\s*([^;]+)')[2] + "," : '';

var calculation = (val) => {
    console.log(val)
    let firstNumber = document.getElementsByClassName("firstNum")[0].value;
    let secondNumber = document.getElementsByClassName("secondNum")[0].value;
    let finalAnswer;
    if (firstNumber === '') {
        alert("Please enter the first digit")
    } else if (secondNumber === '') {
        alert("Please enter the second digit")
    } else {
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
        if (val === 'add') {
            finalAnswer = firstNumber + secondNumber;
        } else if (val === 'subtract') {
            finalAnswer = firstNumber - secondNumber;
        } else if (val === 'multiply') {
            finalAnswer = firstNumber * secondNumber;
        } else {
            finalAnswer = parseFloat(firstNumber / secondNumber).toFixed(2);
        }
        document.getElementById('answer').value = finalAnswer;
    }
}
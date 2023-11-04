// $(document).onLoad(function() {
//   $("input").text("");
// });
$(document).ready(function() {
  // Attach input event handlers to all fields
  $("#email, #username, #password, #confirm-password").on("input", validateForm);

  function validateForm() {
    const emailValid = validateEmail($("#email").val());
    displayError("email", emailValid);

    const usernameValid = validateUsername($("#username").val(), 3, 20);
    displayError("username", usernameValid);

    const passwordValid = validateField($("#password").val(), 6, 20);
    displayError("password", passwordValid);

    const confirmPasswordValid = $("#confirm-password").val() === $("#password").val();
    displayError("confirm-password", confirmPasswordValid);

    // Check if all fields are valid
    if (emailValid && usernameValid && passwordValid && confirmPasswordValid) {
      $("#login-button").prop("disabled", false);
    } else {
      $("#login-button").prop("disabled", true);
    }
  }

  function validateEmail(email) {
    const valid = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/i.test(email);
    return valid;
  }

  function validateUsername(username, minLength, maxLength) {
    if (!username) {
      return false;
    }

    const alphanumericRegex = /^[A-Za-z0-9]+$/;
    // const minLength = 3;
    // const maxLength = 20;
    
    return alphanumericRegex.test(username) && username.length >= minLength && username.length <= maxLength;
  }

  function validateField(value, minLength, maxLength) {
    return value.length >= minLength && value.length <= maxLength;
  }

  function displayError(field, isValid) {
    const errorElement = $("#" + field + "-error");
    if (!isValid) {
      errorElement.text(getErrorMessage(field));
      errorElement.show();
    } else {
      errorElement.hide();
    }
  }

  function getErrorMessage(field) {
    switch (field) {
      case "email":
        return "Enter a valid email address.";
      case "username":
        return "Username must be 3-20 character long. Special characters not allowed.";
      case "password":
        return "Password must be between 6 and 20 characters.";
      case "confirm-password":
        return "Passwords do not match.";
      default:
        return "";
    }
  }

  $("#login-form").on("submit", function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // if (validateForm()) {
      var username = $("#username").val();
      // Set the session
      sessionStorage.setItem("loggedInUser", username);
      // Redirect to the calculator page after successful validation
      window.location.href = "calculator.html";
    // }
  });

  // Prevent multiple form submissions
  $("#login-button").on("click", function() {
    if ($("#login-button").prop("disabled")) {
      return false;
    }
  });
});

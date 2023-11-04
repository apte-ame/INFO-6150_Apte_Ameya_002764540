$(document).ready(function() {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
      $("#logged-in-user").html(loggedInUser);
    } else {
      // Redirect to the login page if not logged in
      window.location.href = "login.html";
    }
    $("#number1, #number2").on("input", validateNumbers);
    $(".operation-button").on("click", function() {
      const num1 = $("#number1").val();
      const num2 = $("#number2").val();
      if (validateNumbers(num1, num2)) {
        const operation = $(this).data("operation");
        const result = calculate(num1, num2, operation);
        $("#result").text(result);
      }
    });
  });
  
  function validateNumbers() {
    var number1Field = $("#number1");
    var number2Field = $("#number2");
  
    if (!number1Field.val() || !number2Field.val()) {
      showError("Both fields must be filled.", number1Field, number2Field);
      return false;
    }
  
    if (!isNumeric(number1Field.val()) || !isNumeric(number2Field.val())) {
      showError("Both fields must contain valid numbers.", number1Field, number2Field);
      return false;
    }
  
    clearError(number1Field);
    clearError(number2Field);
    return true;
  }
  
  function isNumeric(value) {
    return !isNaN(value) && isFinite(value);
  }
  
  // function calculate(num1, num2, operation) {
  //   num1 = parseFloat(num1);
  //   num2 = parseFloat(num2);
  
  //   switch (operation) {
  //     case "add":
  //       return num1 + num2;
  //     case "subtract":
  //       return num1 - num2;
  //     case "multiply":
  //       return num1 * num2;
  //     case "divide":
  //       if (num1===0 && num2 === 0) {
  //         return "NaN";
  //       }else if(num2===0){
  //         return "Undefined";
  //       }
  //       return num1 / num2;
  //     default:
  //       return "Invalid operation";
  //   }
  // }

  const calculate = (num1, num2, operation) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  
    switch (operation) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        if (num1 === 0 && num2 === 0) {
          return "NaN";
        } else if (num2 === 0) {
          return "Undefined";
        }
        return num1 / num2;
      default:
        return "Invalid operation";
    }
  };
  
  
  function showError(message, ...fields) {
    // fields.forEach((field) => {
    //   field.addClass("error");
    // });
    const errorField = fields[0].next(".error-message");
    // const errorField = $("num")
    errorField.text(message);
  }
  
  function clearError(...fields) {
    fields.forEach((field) => {
      field.removeClass("error");
      const errorField = field.next(".error-message");
      errorField.text("");
    });
  }
  
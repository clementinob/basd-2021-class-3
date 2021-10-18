window.onload = function() {
  
  var fullName = document.getElementById("fullName");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var age = document.getElementById("age");
  var phone = document.getElementById("phone");
  var adress = document.getElementById("adress");
  var city = document.getElementById("city");
  var zipCode = document.getElementById("zipCode");
  var idNumber = document.getElementById("idNumber");

  fullName.onblur = function validateFullName() {
    var inputName = fullName.value;
    var error = document.getElementById("fullNameError");
    if (inputName.length < 6 || inputName.indexOf(' ') == -1 || !validateLetters(inputName)){
      var message = "Must be at least 6 letters long and have a space between";
      error.innerHTML = message;
      error.style.display = "block";
      document.getElementById("fullName").style.background = "rgb(255 165 165 / 58%)";      
    } else {
      error.style.display = "none";
      document.getElementById("fullName").style.background = "rgb(255 255 255)";
    }
  }

  email.onblur = function validateEmail() {
    var inputEmail = email.value;
    var error = document.getElementById("emailError");
    if (!validateEmailRegex(inputEmail)){
      var message = "Must enter a valid email";
      error.innerHTML = message;
      error.style.display = "block";
      document.getElementById("email").style.background = "rgb(255 165 165 / 58%)";      
    } else {
      error.style.display = "none";
      document.getElementById("email").style.background = "rgb(255 255 255)";
    }
  }

  password.onblur = function validatePassword(){
    var inputPassword = password.value;
    var error = document.getElementById("passwordError");

    if(!validatePasswordRegex(inputPassword)) {
      var message = 'The password must be at least 8 characters long and only contain letters and numbers';
      error.innerHTML = message;
      error.style.display = "block";
      document.getElementById("password").style.background = "rgb(255 165 165 / 58%)";
    } else {
      error.style.display = "none";
      document.getElementById("password").style.background = "rgb(255 255 255)";
    }
  }
  
  age.onblur = function validateInputAge(){
    var inputAge = age.value;
    var error = document.getElementById("ageError");

    if(!validateAge(inputAge)) {
      var message = 'Must be whole numbers and be at least 18 years old.';
      error.innerHTML = message;
      error.style.display = "block";
      document.getElementById("age").style.background = "rgb(255 165 165 / 58%)";
    } else {
      error.style.display = "none";
      document.getElementById("age").style.background = "rgb(255 255 255)";
    }
  }

  phone.onblur = function validateInputPhone(){
    var inputPhone = phone.value;
    var error = document.getElementById("phoneError");

    if (inputPhone.length < 7 || inputPhone.indexOf(' ') != -1 || !validateNumbersRegex(inputPhone)){
      var message = "The entered phone must have at least 7 numbers and accepts only numeric characters.";
      error.innerHTML = message;
      error.style.display = "block";
      document.getElementById("phone").style.background = "rgb(255 165 165 / 58%)";      
    } else {
      error.style.display = "none";
      document.getElementById("phone").style.background = "rgb(255 255 255)";
    }
  }

  adress.onblur = function validateInputAdress(){
    var inputAdress = adress.value;
    var error = document.getElementById("adressError");

    if (inputAdress.length < 5 || inputAdress.indexOf(' ') == -1 || !validateAlphanumeric(inputAdress)){
      var message = "The address entered must be at least 5 alphanumeric characters and separated by a blank space.";
      error.innerHTML = message;
      error.style.display = "block";
      document.getElementById("adress").style.background = "rgb(255 165 165 / 58%)";      
    } else {
      error.style.display = "none";
      document.getElementById("adress").style.background = "rgb(255 255 255)";
    }
  }

  city.onblur = function validateInputCity(){
    var inputCity = city.value;
    var error = document.getElementById("cityError");

    if (inputCity.length < 3){
      var message = "The city must have at least 3 or more characters.";
      error.innerHTML = message;
      error.style.display = "block";
      document.getElementById("city").style.background = "rgb(255 165 165 / 58%)";      
    } else {
      error.style.display = "none";
      document.getElementById("city").style.background = "rgb(255 255 255)";
    }
  }

  zipCode.onblur = function validateInputZipCode(){
    var inputZipCode = zipCode.value;
    var error = document.getElementById("zipCodeError");

    if (inputZipCode.length < 3){
      var message = "The zip code must have at least 3 or more characters.";
      error.innerHTML = message;
      error.style.display = "block";
      document.getElementById("zipCode").style.background = "rgb(255 165 165 / 58%)";      
    } else {
      error.style.display = "none";
      document.getElementById("zipCode").style.background = "rgb(255 255 255)";
    }
  }

  idNumber.onblur = function validateInputIdNumber(){
    var inputIdNumber = idNumber.value;
    var error = document.getElementById("idNumberError");
    console.log(inputIdNumber.length);
    if (inputIdNumber.length < 7 || inputIdNumber.length > 8 || !validateNumbersRegex(inputIdNumber)){
      var message = "The ID must be 7 or 8 numbers long.";
      error.innerHTML = message;
      error.style.display = "block";
      document.getElementById("idNumber").style.background = "rgb(255 165 165 / 58%)";      
    } else {
      error.style.display = "none";
      document.getElementById("idNumber").style.background = "rgb(255 255 255)";
    }
  }
  

}

function validateLetters (str){
  const re = /^[a-zA-Z\s]*$/;
  return re.test(String(str).toLowerCase());
}

function validateEmailRegex(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePasswordRegex(password) {
	const re = /(?=.*\d)(?=.*[a-z]).{8,}/;
  return re.test(String(password).toLowerCase());
}

function validateAge(age){
  if (age % 1 == 0 && age >= 18){   
    return true;
  } else{
    return false;
  }
}

function validateNumbersRegex(num){
  const re = /\d/;
  return re.test(String(num).toLowerCase());
}

function validateAlphanumeric(str){
  const re = /^[a-zA-Z0-9]+$/;
  return re.test(String(str).toLowerCase());
}
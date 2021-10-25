window.onload = function() {
  //Title
  var salute = document.getElementById("dynamicSalute");
  // Inputs
  var fullName = document.getElementById("fullName");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var age = document.getElementById("age");
  var phone = document.getElementById("phone");
  var adress = document.getElementById("adress");
  var city = document.getElementById("city");
  var zipCode = document.getElementById("zipCode");
  var idNumber = document.getElementById("idNumber");
  //Errors
  var fullNameError = document.getElementById("fullNameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var ageError = document.getElementById("ageError");
  var phoneError = document.getElementById("phoneError");
  var adressError = document.getElementById("adressError");
  var cityError = document.getElementById("cityError");
  var zipCodeError = document.getElementById("zipCodeError");
  var idNumberError = document.getElementById("idNumberError");
  //URL
  var URL = "https://curso-dev-2021.herokuapp.com/newsletter";

  //Button
  var buttonSubmit = document.getElementById("buttonSubmit");
  // Modal
  var modal = document.getElementById("simpleModal");
  var modalBtn = document.getElementById("modalBtn");
  var closeBtn = document.getElementsByClassName("closeBtn")[0];
  var modalHeader = document.getElementById("modalHeader");
  var modalText = document.getElementById("modalText");
  
  // FullName
  fullName.onblur = function(){
    if(!validateFullName()){
      fullNameError.innerText = "Must be at least 6 letters long and have a space between";
      fullName.style.background = "rgb(255 165 165 / 58%)";
    }else{
      fullNameError.innerText = "";
      fullName.style.background = "rgb(255 255 255)";
    }
  }
  
  function validateFullName() {
    var inputName = fullName.value;
    return (inputName.length >= 6 && inputName.indexOf(' ') != -1 && validateLetters(inputName))
  }

  function cleanFullNameError(){
    fullNameError.innerText = "";
    fullName.style.background = "rgb(255 255 255)";
  }

  // Email
  email.onblur = function(){
    if(!validateEmail()){
      emailError.innerText = "Must enter a valid email";
      email.style.background = "rgb(255 165 165 / 58%)";
    }else{
      emailError.innerText = "";
      email.style.background = "rgb(255 255 255)";
    }
  }

  function validateEmail() {
    var inputEmail = email.value;
    return(validateEmailRegex(inputEmail));
  }

  function cleanEmailError(){
    emailError.innerText = "";
    email.style.background = "rgb(255 255 255)";
  }

  // Password 
  password.onblur = function(){
    if(!validatePassword()){
      passwordError.innerText = "The password must be at least 8 characters long and only contain letters and numbers";
      password.style.background = "rgb(255 165 165 / 58%)";
    }else{
      passwordError.innerText = "";
      password.style.background = "rgb(255 255 255)";
    }
  }
  
  function validatePassword(){
    var inputPassword = password.value;
    return(validatePasswordRegex(inputPassword))
  }

  function cleanPasswordError(){
    passwordError.innerText = "";
    password.style.background = "rgb(255 255 255)";
  }
  
  // Age
  age.onblur = function(){
    if(!validateInputAge()){
      ageError.innerText = "Must be whole numbers and be at least 18 years old.";
      age.style.background = "rgb(255 165 165 / 58%)";
    }else{
      ageError.innerText = "";
      age.style.background = "rgb(255 255 255)";
    }
  }

  function validateInputAge(){
    var inputAge = age.value;
    return(validateAge(inputAge))
  }

  function cleanAgeError(){
    ageError.innerText = "";
    age.style.background = "rgb(255 255 255)";
  }

  //Phone
  phone.onblur = function(){
    if(!validateInputPhone()){
      phoneError.innerText = "The entered phone must have at least 7 numbers and accepts only numeric characters.";
      phone.style.background = "rgb(255 165 165 / 58%)";
    }else{
      phoneError.innerText = "";
      phone.style.background = "rgb(255 255 255)";
    }
  }

  function validateInputPhone(){
    var inputPhone = phone.value;
    return(inputPhone.length >= 7 && inputPhone.indexOf(' ') === -1 && validateNumbersRegex(inputPhone))
  }

  function cleanPhoneError(){
    phoneError.innerText = "";
    phone.style.background = "rgb(255 255 255)";
  }

  //Adress Todo
  adress.onblur = function(){
    if(!validateInputAdress()){
      adressError.innerText = "The adress must have at least 5 alphanumeric characters separated by a with a white space"
      adress.style.background = "rgb(255 165 165 / 58%)";
    }else{
      adressError.innerText = "";
      adress.style.background = "rgb(255 255 255)";
    }
  }

  function validateInputAdress(){
    var inputAdress = adress.value;
    return(inputAdress.length >= 5 && inputAdress.indexOf(' ') != -1 && validateAlphanumeric(inputAdress))
  }

  function cleanAdressError(){
    adressError.innerText = "";
    adress.style.background = "rgb(255 255 255)";
  }

  //City
  city.onblur = function(){
    if(!validateInputCity()){
      cityError.innerText = "The city must have at least 3 or more characters.";
      city.style.background = "rgb(255 165 165 / 58%)";
    }else{
      cityError.innerText = "";
      city.style.background = "rgb(255 255 255)";
    }
  }

  function validateInputCity(){
    var inputCity = city.value;
    return(inputCity.length > 3)
  }

  function cleanCityError(){
    cityError.innerText = "";
    city.style.background = "rgb(255 255 255)";
  }

  //ZipCode
  zipCode.onblur = function(){
    if(!validateInputZipCode()){
      zipCodeError.innerText = "The zip code must have at least 3 or more characters.";
      zipCode.style.background = "rgb(255 165 165 / 58%)";
    }else{
      zipCodeError.innerText = "";
      zipCode.style.background = "rgb(255 255 255)";
    }
  }

  function validateInputZipCode(){
    var inputZipCode = zipCode.value;
    return(inputZipCode.length >= 3)
  }

  function cleanZipCodeError(){
    zipCodeError.innerText = "";
    zipCode.style.background = "rgb(255 255 255)";
  }

  //ID
  idNumber.onblur = function(){
    if(!validateInputIdNumber()){
      idNumberError.innerText = "The ID must be 7 or 8 numbers long.";
      idNumber.style.background = "rgb(255 165 165 / 58%)";
    }else{
      idNumberError.innerText = "";
      idNumber.style.background = "rgb(255 255 255)";
    };
  }

  function validateInputIdNumber(){
    var inputIdNumber = idNumber.value;
    return (inputIdNumber.length >= 7 && inputIdNumber.length <= 8 && validateNumbersRegex(inputIdNumber))
  }

  function cleanIdNumberError(){
    idNumberError.innerText = "";
    idNumber.style.background = "rgb(255 255 255)";
  }

  fullName.onfocus = cleanFullNameError;
  email.onfocus = cleanEmailError;
  password.onfocus = cleanPasswordError;
  age.onfocus = cleanAgeError;
  phone.onfocus = cleanPhoneError;
  adress.onfocus = cleanAdressError;
  city.onfocus = cleanCityError;
  zipCode.onfocus = cleanZipCodeError;
  idNumber.onfocus = cleanIdNumberError;

  fullName.onkeyup = function(){
    salute.innerText=(" "+fullName.value); 
}

  buttonSubmit.addEventListener('click', validateForm);
  
  function validateForm(e){
    e.preventDefault();
    /*var errorMsg = "";
  
    if (validateFullName() === false){
      errorMsg = "- Full Name not valid. \n";
    }
    if (validateEmail() === false){
      errorMsg += "- Email not valid. \n";
    }
    if (validatePassword() === false){
      errorMsg += "- Password not valid. \n";
    }
    if (validateInputAge() === false){
      errorMsg += "- Age not valid. \n";
    }
    if (validateInputPhone() === false){
      errorMsg += "- Phone not valid. \n";
    }
    if (validateInputAdress() === false){
      errorMsg += "- Adress not valid. \n";
    }
    if (validateInputCity() === false){
      errorMsg += "- City not valid. \n";
    }
    if (validateInputZipCode() === false){
      errorMsg += "- Zip Code not valid. \n";
    }
    if (validateInputIdNumber() === false){
      errorMsg += "- ID not valid. \n";
    }

    if (errorMsg.length != 0){
      alert(errorMsg);
    }else{*/
      sendForm();
   // }
  }

  //Send Data

  /*
  function modalMsg(e) {
    var url = 'http://curso-dev-2021.herokuapp.com/newsletter?';
    var queryParams = `name=${nameInput.value}&email=${emailInput.value}
    &password=${passwordInput.value}&confirmPassword=${confirmPasswordInput.value}&age=${ageInput.value}&phone=${phoneNumInput.value}
    &address=${addressInput.value}&city=${cityInput.value}&postalCode=${postCodeInput.value}
    &dni=${dniInput.value}`;
    fetch(`${url}${queryParams}`)
        .then(response =>
            response.js
  */
  function handleError (response) {
    if (response.status !== 200) {
        throw Error(response.status);
    }
    return response;
  }
  
  function handledFetch (request) {
    return fetch(request)
      .then(handleError);
  }

  function sendForm(){
    var URL_VALUES =  "?"+fullName.name+"="+fullName.value+
                      "&"+email.name+"="+email.value+
                      "&"+password.name+"="+password.value+
                      "&"+age.name+"="+age.value+
                      "&"+phone.name+"="+phone.value+
                      "&"+adress.name+"="+adress.value+
                      "&"+city.name+"="+city.value+
                      "&"+zipCode.name+"="+zipCode.value+
                      "&"+idNumber.name+"="+idNumber.value;

    

     fetch(URL+URL_VALUES)
      .then (function resolve(response){
          if (response.status === 200){
            console.log("Status1: ", response.status);
            console.log(response);
            modalHeader.innerText="Everything was sent correctly";
            loadLocalStorage();
            return response;
          }
          else{
            console.log("Status2: "+response.status);
            console.log(response.json());

            modalText.innerText = "ERROR! " + response.statusText;
            clearLocalStorage();
            //return response.statusText;
            return response;
          }
      })
      .then(function (data){
        if (data.status === 200){
          console.log("ENTRO ACA" + data);
          var prueba = data.json();
          console.log("ENTRO ACA2" + prueba);
          modalText.innerText = "Full Name: "+prueba.name+"\n"
                                "Email: "+prueba.email+"\n"
                                "Password: "+prueba.password+"\n"
                                "Age: "+prueba.age+"\n"
                                "Phone: "+prueba.phone+"\n"
                                "Adress: "+prueba.adress+"\n"
                                "City: "+prueba.city+"\n"
                                "Zip Code: "+prueba.zipCode+"\n"
                                "ID: "+prueba.idNumber+"\n";
          
          console.log(modalText.innerText);
        }else{

        }

      })
      .catch(function (){
        modalHeader.innerText="Oops!";
        modalText.innerText="Something went wrong";
      })
  }

  //Local Storage - Load Data
  function loadLocalStorage(){
    localStorage.setItem(fullName.name,fullName.value)
    localStorage.setItem(email.name,email.value)
    localStorage.setItem(password.name,password.value)
    localStorage.setItem(age.name,age.value)
    localStorage.setItem(phone.name,phone.value)
    localStorage.setItem(adress.name,adress.value)
    localStorage.setItem(city.name,city.value)
    localStorage.setItem(zipCode.name,zipCode.value)
    localStorage.setItem(idNumber.name,idNumber.value)
  }

  function clearLocalStorage(){
    localStorage.removeItem(fullName.name);
    localStorage.removeItem(email.name);
    localStorage.removeItem(password.name);
    localStorage.removeItem(age.name);
    localStorage.removeItem(phone.name);
    localStorage.removeItem(adress.name);
    localStorage.removeItem(city.name);
    localStorage.removeItem(zipCode.name);
    localStorage.removeItem(idNumber.name);

  }

  

  //Local Storage - Reload Data
  if ((localStorage.getItem("name")) != "") {
    fullName.value=localStorage.getItem("name");
  }
  if ((localStorage.getItem("email")) != "") {
    email.value=localStorage.getItem("email");
  }
  if ((localStorage.getItem("age")) != "") {
    age.value=localStorage.getItem("age");
  }
  if ((localStorage.getItem("password")) != "") {
    password.value=localStorage.getItem("password");
  }
  if ((localStorage.getItem("phone")) != "") {
    phone.value=localStorage.getItem("phone");
  }
  if ((localStorage.getItem("adress")) != "") {
    adress.value=localStorage.getItem("adress");
  }
  if ((localStorage.getItem("city")) != "") {
    city.value=localStorage.getItem("city");
  }
  if ((localStorage.getItem("zipCode")) != "") {
    zipCode.value=localStorage.getItem("zipCode");
  }
  if ((localStorage.getItem("idNumber")) != "") {
    idNumber.value=localStorage.getItem("idNumber");
  }

  //Modal
  modalBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', clickOutside);

  function openModal(){
    modal.style.display = "block";
  }

  function closeModal(){
    modal.style.display = "none";
  }

  function clickOutside(ev){
    if (ev.target == modal){
      modal.style.display = "none";
    }
  }

}



function validateLetters(str){
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
  return age % 1 == 0 && age >= 18;    
}

function validateNumbersRegex(num){
  const re = /\d/;
  return re.test(String(num).toLowerCase());
}

function validateAlphanumeric(str){
  const re = /^[a-zA-Z0-9_ ]+$/;
  return re.test(String(str).toLowerCase());
}
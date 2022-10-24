
// Exercise 7
function validate() {

	const FORM = document.getElementById("checkoutForm");

	FORM.addEventListener("submit", function(event) {
		event.preventDefault();
		}
	)

	var error = 0;

	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fPassword = document.getElementById("fPassword");
	var fAddress = document.getElementById("fAddress");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress");  
	var errorLastN = document.getElementById("errorLastN");  
	var errorPassword = document.getElementById("errorPassword");  
	var errorPhone = document.getElementById("errorPhone");  
	
	// Validate fields entered by the user: name, phone, password, and email

	//Tots els camps són obligatoris i han de tenir almenys 3 caràcters:

	if(fName === "" || fName.value.length < 3){ 
		error++;
		document.getElementById("fName").style.border = "2px solid red";
		errorName.style.display = "block";
	} else {
		document.getElementById("fName").style.border = "2px solid green";
		errorName.style.display = "none";
	}
	
	if(fLastN === "" || fLastN.value.length < 3){ 
		error++;
		document.getElementById("fLastN").style.border = "2px solid red";
		errorLastN.style.display = "block";
	} else {
		document.getElementById("fLastN").style.border = "2px solid green";
		errorLastN.style.display = "none";
	}

	if(fEmail === "" || fEmail.value.length<3){
		error++;
		document.getElementById("fEmail").style.border = "2px solid red";
		errorEmail.style.display = "block";
	} else {
		document.getElementById("fEmail").style.border = "2px solid green";
		errorEmail.style.display = "none";
	}

	if(fAddress === "" || fAddress.value.length<3){
		error++;
		document.getElementById("fAddress").style.border = "2px solid red";
		errorAddress.style.display = "block";
	} else {
		document.getElementById("fAddress").style.border = "2px solid green";
		errorAddress.style.display = "none";
	}

	if(fPassword == "" || fPassword.value.length<3){
		error++;
		document.getElementById("fPassword").style.border = "2px solid red";
		errorPassword.style.display = "block";
	} else {
		document.getElementById("fPassword").style.border = "2px solid green";
		errorPassword.style.display = "none";
	}

	if(fPhone === "" || fPhone.value.length<3){
		error++;
		document.getElementById("fPhone").style.border = "2px solid red";
		errorPhone.style.display = "block";
	} else {
		document.getElementById("fPhone").style.border = "2px solid green";
		errorPhone.style.display = "none";
	}

	// El nom i cognoms han de contenir només lletres.

	let letters = /^[A-zÀ-ú]+$/;

	if (!fName.value.match(letters)) {
		error++;
		document.getElementById("fName").style.border = "2px solid red";
		errorName.style.display = 'block';
		alert("Your first name cannot contain numbers.");
	} else {
		document.getElementById("fName").style.border = "2px solid green";
		errorName.style.display = 'none';
	}
	 
	if (!fLastN.value.match(letters)) { 
		error++;
		document.getElementById("fLastN").style.border = "2px solid red";
		errorLastN.style.display = 'block';
		alert("Your last name cannot contain numbers.");
	} else {
		document.getElementById("fLastN").style.border = "2px solid green";
		errorLastN.style.display = 'none';
	}

	// El telèfon ha de contenir només números
	let numbers = /^[0-9]+$/;

	if (!fPhone.value.match(numbers)) {
		error++;
		document.getElementById("fPhone").style.border = "2px solid red";
		errorPhone.style.display = 'block';
		alert("Error al telèfon");
	} else {
		document.getElementById("fPhone").style.border = "2px solid green";
	}

	// La contrasenya ha d'incloure números i lletres

	if (fPassword.value.match(numbers) || fPassword.value.match(letters)) {
		error++;
		document.getElementById("fPassword").style.border = "2px solid red";
		errorPassword.style.display = 'block';
		alert("Your password must contain at least 1 number and 1 letter.");
	} else {
		document.getElementById("fPassword").style.border = "2px solid green";
		errorPassword.style.display = 'none';
	}

	// L'email ha de tenir format d'email
	let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (!fEmail.value.match(emailRegex)) {
		error++;
		document.getElementById("fEmail").style.border = "2px solid red";
		errorEmail.style.display = 'block';
		alert("Your mail must have a valid format.");
	} else {
		document.getElementById("fEmail").style.border = "2px solid green";
	}

	console.log("Errors: " + error);

}
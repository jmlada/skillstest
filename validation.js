const names = document.getElementById("name");
const contact = document.getElementById("contactnumber");
const form = document.getElementById("form");
//const message = 

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkInputs();
    outputText();
});

function checkInputs() {
    const namesValue = names.value.trim();
    const contactValue = contact.value.trim();

    if(namesValue == "") {
        setErrorFor(names)
    } else {
        setSuccessFor(names)
    }
    
    if(contactValue == "") {
        setErrorFor(contact)
    } else {
        setSuccessFor(contact)
    }
}

function setErrorFor(input) {
    const formControl = input;
    formControl.className = "form-control error";
    const controlLabel = input.previousElementSibling;
    controlLabel.className = "control-label error";
}

function setSuccessFor(input) {
    const formControl = input;
    formControl.className = "form-control success";
    const controlLabel = input.previousElementSibling;
    controlLabel.className = "control-label success";
}

function outputText() {
    const namesValue = names.value.trim();
    const contactValue = contact.value.trim();
    
    if(namesValue != "" && contactValue != "") {
        document.getElementById("output").innerHTML = "You have successfully submitted your contact details."
    } else {
        document.getElementById("output").innerHTML = "Error: Please check all the details before submitting."
    }
}




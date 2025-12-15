let isValid = false;
export function validateForm(form) {
    console.log(isValid);
    isValid = form.checkValidity();
    console.log(isValid);

    if(!isValid) {
        const message = document.getElementById("validationMessage");
        message.textContent = "Please fill out all fields";
        message.style.color = "red";
        message.style.alignSelf = "center";
        console.log("hola");
    }

    return isValid;

}
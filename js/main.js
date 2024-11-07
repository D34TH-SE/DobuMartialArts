function validateForm() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();


    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const messageError = document.getElementById("messageError");


    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";

    let isValid = true;


    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }


    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (email === "" || !emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }


    const phonePattern = /^[0-9]{10}$/; // 10-digit phone numbers
    if (phone === "" || !phonePattern.test(phone)) {
        phoneError.textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }


    if (message === "") {
        messageError.textContent = "Please enter a message.";
        isValid = false;
    }


    if (isValid) {
        alert("Form submitted successfully!");

    }
}
document.getElementById("subscribeButton").addEventListener("click", function() {
    const emailInput = document.getElementById("emailInput");
    const feedbackMessage = document.getElementById("feedbackMessage");
    const email = emailInput.value.trim();

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        feedbackMessage.style.display = "block";
        feedbackMessage.style.color = "green";
        feedbackMessage.textContent = "Thank you for subscribing!";
        emailInput.value = ""; // Clear the email input
    } else {
        feedbackMessage.style.display = "block";
        feedbackMessage.style.color = "red";
        feedbackMessage.textContent = "Please enter a valid email address.";
    }
});
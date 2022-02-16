const form = document.getElementById("contact-form");
console.log(form);

const email = document.getElementById("email");
email.value = "info@example.com";

const thankYouDiv = document.getElementById("thank-you")
const audioTag = document.getElementById("audio");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("i am submitting the form!");
    thankYouDiv.classList.remove("hide");
    form.classList.add(".hide");

})


// ANIMACIONES AL HACER SCROLL

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }

  });
});

fadeElements.forEach((element) => {
  observer.observe(element);
});


// FORMULARIO

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Mensaje enviado correctamente 🐾");

  form.reset();

});
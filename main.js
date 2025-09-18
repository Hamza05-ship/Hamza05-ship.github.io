var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Wordpress Developer" , "PHP Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = this.name.value;
    const email = this.email.value;
    const subject = this.subject.value;
    const message = this.message.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    alert("Thank you, " + name + "! Your message has been submitted.");

    this.reset();

});

const menuBtn = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});



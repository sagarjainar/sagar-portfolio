// ===============================
// Sticky Header
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 80);
});

// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Typing Effect
// ===============================

const typingElement = document.querySelector(".home-content h2");

const words = [
    "Junior Data Scientist",
    "Machine Learning Engineer",
    "Computer Vision Enthusiast",
    "Python Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typingElement.textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex == words.length){
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect,deleting ? 70 : 120);

}

typeEffect();

// ===============================
// Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
".skill-box,.project-card,.experience-box,.education-box,.publication-box,.about-content"
);

function reveal(){

    const trigger = window.innerHeight - 120;

    revealElements.forEach(element=>{

        const top = element.getBoundingClientRect().top;

        if(top < trigger){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input=>{

        if(input.value.trim()==""){

            input.style.border="2px solid red";

            valid = false;

        }else{

            input.style.border="2px solid #22c55e";

        }

    });

    if(valid){

        alert("Thank you! Your message has been submitted.");

        form.reset();

    }

});

// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#38bdf8";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// Fade Animation
// ===============================

const style = document.createElement("style");

style.innerHTML = `

.skill-box,
.project-card,
.about-content,
.experience-box,
.education-box,
.publication-box{

opacity:0;

transform:translateY(40px);

transition:.8s;

}

.show{

opacity:1;

transform:translateY(0);

}

.active{

color:#38bdf8 !important;

font-weight:600;

}

.sticky{

background:#0f172a;

box-shadow:0 5px 20px rgba(0,0,0,.5);

}

`;

document.head.appendChild(style);

console.log("Portfolio Loaded Successfully 🚀");
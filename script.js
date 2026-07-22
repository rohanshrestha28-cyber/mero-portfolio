// =========================
// Portfolio JavaScript
// =========================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });
});

// =========================
// Typing Effect
// =========================

const typingText = [
    "Cybersecurity Student",
    "Ethical Hacking Learner",
    "Network Security Enthusiast",
    "Future SOC Analyst"
];

let textIndex = 0;
let charIndex = 0;

const heroTitle = document.querySelector(".hero h2");

function typeEffect(){

    if(!heroTitle) return;

    if(charIndex < typingText[textIndex].length){

        heroTitle.textContent += typingText[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,80);

    }

    else{

        setTimeout(eraseEffect,1800);

    }

}

function eraseEffect(){

    if(charIndex>0){

        heroTitle.textContent = typingText[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,40);

    }

    else{

        textIndex++;

        if(textIndex>=typingText.length){

            textIndex=0;

        }

        setTimeout(typeEffect,300);

    }

}

window.onload=()=>{

    if(heroTitle){

        heroTitle.textContent="";

        typeEffect();

    }

};

// =========================
// Scroll Animation
// =========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// =========================
// Back To Top Button
// =========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// =========================
// Navbar Shadow
// =========================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.boxShadow="0 8px 20px rgba(0,0,0,.4)";

}

else{

navbar.style.boxShadow="none";

}

});

// =========================
// Contact Form
// =========================

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Thank you! Your message has been received.");

form.reset();

});

}


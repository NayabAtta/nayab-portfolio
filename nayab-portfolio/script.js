/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});



/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});



/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;


    const subject =
        encodeURIComponent(
            "Portfolio Contact from " + name
        );


    const body =
        encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );


    window.location.href =
        "mailto:inayab1106@gmail.com?subject=" +
        subject +
        "&body=" +
        body;

});



/* =========================================
   CREATIVE LAB BUTTONS
========================================= */

const labButtons =
    document.querySelectorAll(".lab-btn");


labButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "This Creative Lab project is coming soon! ✨"
        );

    });

});
/* =====================================================
   CREATIVE PORTFOLIO EFFECTS
===================================================== */


/* ---------- SCROLL REVEAL ---------- */

const revealElements = document.querySelectorAll(
    ".about-section, .skill-card, .project-card, .creative-card, .contact-section"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   LAVENDER CURSOR
===================================================== */

const cursorGlow =
    document.querySelector(".cursor-glow");


document.addEventListener("mousemove", event => {

    cursorGlow.style.left =
        event.clientX + "px";

    cursorGlow.style.top =
        event.clientY + "px";

});


const clickableElements =
    document.querySelectorAll(
        "a, button, input, textarea"
    );


clickableElements.forEach(element => {

    element.addEventListener(
        "mouseenter",
        () => {

            cursorGlow.classList.add(
                "active"
            );

        }
    );


    element.addEventListener(
        "mouseleave",
        () => {

            cursorGlow.classList.remove(
                "active"
            );

        }
    );

});



/* =====================================================
   FLOATING SPARKLES
===================================================== */

document.addEventListener(
    "click",
    event => {

        const sparkle =
            document.createElement("div");

        sparkle.className =
            "sparkle";

        sparkle.innerHTML = "✦";

        sparkle.style.left =
            event.clientX + "px";

        sparkle.style.top =
            event.clientY + "px";

        document.body.appendChild(
            sparkle
        );


        setTimeout(() => {

            sparkle.remove();

        }, 3000);

    }
);



/* =====================================================
   CREATIVE LAB
===================================================== */

const labModal =
    document.getElementById("labModal");

const closeModal =
    document.getElementById("closeModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");


const labCards =
    document.querySelectorAll(
        ".creative-card"
    );


const creativeContent = [

    {
        title:
            "Interactive Study Planner ✦",

        text:
            "A smart study planner where you can organize subjects, create study goals and build a personalized routine."
    },

    {
        title:
            "Mood Journal ♡",

        text:
            "A simple interactive journal where you can choose your mood, write your thoughts and keep track of your daily feelings."
    },

    {
        title:
            "Data Visualization Stories ✧",

        text:
            "Turn boring datasets into beautiful visual stories using charts, patterns and meaningful insights."
    },

    {
        title:
            "Mini Web Experiments ✦",

        text:
            "A collection of small creative web experiments exploring UI, interactions, animations and front-end development."
    }

];


labCards.forEach(
    (card, index) => {

        const button =
            card.querySelector(".lab-btn");

        if (!button) return;


        button.addEventListener(
            "click",
            () => {

                modalTitle.textContent =
                    creativeContent[index].title;

                modalText.textContent =
                    creativeContent[index].text;

                labModal.classList.add(
                    "show"
                );

            }
        );

    }
);



/* Close modal */

closeModal.addEventListener(
    "click",
    () => {

        labModal.classList.remove(
            "show"
        );

    }
);



/* Close by clicking outside */

labModal.addEventListener(
    "click",
    event => {

        if (
            event.target === labModal
        ) {

            labModal.classList.remove(
                "show"
            );

        }

    }
);



/* Close with ESC */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            labModal.classList.remove(
                "show"
            );

        }

    }
);
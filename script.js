document.addEventListener("DOMContentLoaded", function () {

    // Hamburger Menu Logic
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinksList = document.getElementById("nav-links");
    const navLinks = document.querySelectorAll("#nav-links li a");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navLinksList.classList.toggle("show");
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinksList.classList.contains("show")) {
                navLinksList.classList.remove("show");
            }
        });
    });

    // Dark Mode Toggle Logic
    const darkBtn = document.createElement("button");
    darkBtn.innerHTML = "🌙";
    darkBtn.classList.add("dark-btn");
    darkBtn.setAttribute("aria-label", "Toggle Dark Mode");

    const nav = document.querySelector("nav");
    if (nav) {
        nav.appendChild(darkBtn);
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Optional: Auto dark mode based on system
    }

    darkBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            darkBtn.innerHTML = "☀️";
        } else {
            darkBtn.innerHTML = "🌙";
        }
    });

    // Intersection Observer for Scroll Animations
    const animatedElements = document.querySelectorAll(
        "section, .skill-card, .project-card"
    );

    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-element");
            }
        });
    }, observerOptions);

    animatedElements.forEach((el) => {
        el.classList.add("hidden");
        observer.observe(el);
    });

});
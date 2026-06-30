// =====================================
// Telegram Link
// =====================================

const TG_LINK = "https://svip1027.top/KLH9904";

// =====================================
// All Buttons
// =====================================

document.querySelectorAll("a").forEach(link => {

    const text = link.innerText.toLowerCase();

    if (
        text.includes("telegram") ||
        text.includes("apply")
    ) {

        link.href = TG_LINK;

    }

});

// =====================================
// FAQ
// =====================================

document.querySelectorAll(".faq-item").forEach(item => {

    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        document.querySelectorAll(".faq-item").forEach(i => {

            if (i !== item) {

                i.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

// =====================================
// Header Shadow
// =====================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});

// =====================================
// Reveal Animation
// =====================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("reveal");

    observer.observe(section);

});

// =====================================
// Mobile Sticky Button
// =====================================

const mobileBar = document.querySelector(".mobile-bar");

function mobileButton() {

    if (!mobileBar) return;

    if (window.innerWidth <= 768) {

        if (window.scrollY > 350) {

            mobileBar.style.display = "block";

        } else {

            mobileBar.style.display = "none";

        }

    } else {

        mobileBar.style.display = "none";

    }

}

window.addEventListener("scroll", mobileButton);

window.addEventListener("resize", mobileButton);

mobileButton();

// =====================================
// Smooth Scroll
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =====================================
// Fade In
// =====================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

const toggle = document.querySelector(".toggle");

function updateIcon() {
  if (document.body.classList.contains("dark")) {
    toggle.classList.remove("fa-moon");
    toggle.classList.add("fa-sun");
  } else {
    toggle.classList.remove("fa-sun");
    toggle.classList.add("fa-moon");
  }
}

if (toggle) {
  updateIcon();

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
    updateIcon();
  });
}

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav ul");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}

// Scroll Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
// Contact form → opens Gmail compose with the message pre-filled
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("cf-name").value;
    const email = document.getElementById("cf-email").value;
    const message = document.getElementById("cf-message").value;

    const toEmail = "johnchen121025@gmail.com"; // ប្តូរជា Gmail របស់អ្នក
    const subject = `Message from ${name} (Portfolio Contact Form)`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  });
}
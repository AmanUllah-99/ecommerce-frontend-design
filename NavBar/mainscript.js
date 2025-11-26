// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });
}

// Card click effect
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Product selected!");
  });
});
// Service card hover effect

document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.02)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

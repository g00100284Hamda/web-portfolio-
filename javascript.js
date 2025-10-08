// ===== Back to Top Button =====
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Hover highlight for sections =====
const hoverTargets = document.querySelectorAll('.meetme, .skills, .hobbies, .projects');

// stronger, visible blue
const hoverColor = 'rgba(90, 187, 235, 0.18)';

hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.backgroundColor = hoverColor;
    el.style.boxShadow = '0 10px 28px rgba(0,0,0,.10)';
  });
  el.addEventListener('mouseleave', () => {
    el.style.backgroundColor = '';
    el.style.boxShadow = '';
  });
});

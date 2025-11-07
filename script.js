// Animación de cards e imagen chispi
window.addEventListener('scroll', () => {
  const imgChispi = document.querySelector('.img-chispi');
  if(imgChispi){
    const rect = imgChispi.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      imgChispi.classList.add('aparecer');
    }
  }

  document.querySelectorAll('.cards .card, .producto, .contact-card').forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.style.animationDelay = `${i*0.1}s`;
      el.classList.add('aparecer');
    }
  });
});

// Cita rápida flotante
const citaBtn = document.getElementById('citaRapidaBtn');
citaBtn.addEventListener('click', () => {
  const fecha = prompt("Selecciona la fecha (YYYY-MM-DD):");
  const hora = prompt("Selecciona la hora (HH:MM):");
  if(fecha && hora){
    alert(`Cita registrada para el ${fecha} a las ${hora}.`);
  }
});
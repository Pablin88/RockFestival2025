document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;

    document.querySelectorAll('.faq-item').forEach(other => {
      if (other !== item) {
        other.classList.remove('active');
      }
    });

    item.classList.toggle('active');
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // evita el envío real

    // Ocultar formulario
    document.getElementById('formularioContacto').style.display = 'none';

    // Mostrar mensaje
    document.getElementById('mensajeGracias').style.display = 'block';

    // Reaparecer formulario en 5 segundos
    setTimeout(() => {
        document.getElementById('mensajeGracias').style.display = 'none';
        document.getElementById('formularioContacto').style.display = 'block';
        document.getElementById('contactForm').reset(); // limpiar campos
    }, 5000);
});
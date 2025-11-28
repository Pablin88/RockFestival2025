// Fecha objetivo (22 de noviembre 2025, 20:00 hs)
  const eventDate = new Date("Dec 26, 2025 20:00:00").getTime();

  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // siempre 2 dígitos
    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");

    // si ya terminó
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "<h2>¡RockFEST 2025 ha comenzado! 🎸🔥</h2>";
    }
  }, 1000);
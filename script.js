const card = document.getElementById("card");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Aseguramos que el card tenga position absolute
card.style.position = "absolute";

// Evento cuando intentan presionar "No"
noBtn.addEventListener("mouseover", () => {
    let cardWidth = card.offsetWidth;
    let cardHeight = card.offsetHeight;

    let maxX = window.innerWidth - cardWidth;
    let maxY = window.innerHeight - cardHeight;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    // Mover el cuadro sin que se salga
    gsap.to(card, {
        left: x,
        top: y,
        duration: 0.2,
        ease: "power1.out"
    });

    // Volver al centro después de 2 segundos
    setTimeout(() => {
        gsap.to(card, {
            left: (window.innerWidth - cardWidth) / 2, 
            top: (window.innerHeight - cardHeight) / 2, 
            duration: 0.5,
            ease: "power1.out"
        });
    }, 2000);
});

// Si presiona "Sí", mostrar la ventana con el gatito
yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="thank-you">
            <h2>¡Gracias! Sabía que aceptarías ❤️</h2>
            <img src="https://media.tenor.com/ULkz1KIlzP8AAAAC/cat-love.gif" alt="Gato tierno">
        </div>
    `;
});

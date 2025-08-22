// Efeito de clique nos ícones de contato
const icones = document.querySelectorAll('.icones-contato a');

icones.forEach(icone => {
    icone.addEventListener('click', () => {
        icone.style.transform = 'scale(0.9)';
        setTimeout(() => {
            icone.style.transform = 'scale(1)';
        }, 150);
    });
});

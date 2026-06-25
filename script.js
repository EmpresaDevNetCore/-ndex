const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const anoAtual = document.getElementById('anoAtual');
const contactForm = document.getElementById('contactForm');

anoAtual.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    const numeroWhatsApp = '5511999999999'; // Altere para o WhatsApp da empresa

    const texto = `Olá, sou ${nome}.%0A%0AE-mail: ${email}%0ATelefone: ${telefone}%0A%0AMensagem: ${mensagem}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

    window.open(url, '_blank');
});

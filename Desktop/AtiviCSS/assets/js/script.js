document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Redireciona para a página de sucesso
            window.location.href = 'sucess.html';
        });
    }
});

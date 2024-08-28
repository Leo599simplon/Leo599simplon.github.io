document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.search-form');
    const input = form.querySelector('input[type="text"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêche le formulaire de se soumettre normalement

        const query = input.value.trim().toLowerCase();

        if (query) {
            const elements = document.querySelectorAll('.folder a');

            for (const element of elements) {
                if (element.textContent.toLowerCase().includes(query)) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    element.focus();
                    break; // Arrête après avoir trouvé le premier résultat
                }
            }
        }
    });
});



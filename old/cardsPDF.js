document.addEventListener('DOMContentLoaded', () => {
    fetch('cardsPDF.json')
        .then(response => response.json())
        .then(data => {
            const courseContainer = document.getElementById('cards-categories');

            data.courses.forEach(course => {
                const card = document.createElement('div');
                card.className = 'card';
                card.onclick = () => {
                    window.location.href = course.file;
                };

                const title = document.createElement('h3');
                title.textContent = course.title;

                card.appendChild(title);
                courseContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Erreur lors du chargement des cours:', error);
        });
});

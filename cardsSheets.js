document.addEventListener('DOMContentLoaded', () => {
    fetch('cardsSheets.json')
        .then(response => {
            if (!response.ok) {
                console.error(`Erreur HTTP lors du chargement de cardsSheets.json : ${response.status}`);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Données JSON chargées avec succès :', data);

            const courseContainer = document.getElementById('cards-categories');

            data.courses.forEach(course => {
                const card = document.createElement('div');
                card.className = 'card';

                // Rediriger vers la page de prévisualisation si le fichier est en .md
                if (course.file.endsWith('.md')) {
                    console.log(`Configuration de la carte pour le fichier Markdown : ${course.file}`);
                    card.onclick = () => {
                        const encodedFilePath = encodeURIComponent(course.file);
                        console.log(`Redirection vers visionneuse.html avec le fichier encodé : ${encodedFilePath}`);
                        window.location.href = `visionneuse.html?file=${encodedFilePath}`;
                    };
                } else {
                    console.log(`Configuration de la carte pour un autre fichier : ${course.file}`);
                    card.onclick = () => {
                        console.log(`Ouverture du fichier dans un nouvel onglet : ${course.file}`);
                        window.open(course.file, '_blank');
                    };
                }

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

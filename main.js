document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour générer une carte sans boutons (comportement original pour sheets.html)
    function generateCardOriginal(course, container) {
        const card = document.createElement('div');
        card.className = 'card';

        if (course.file.endsWith('.md')) {
            card.onclick = () => {
                const encodedFilePath = encodeURIComponent(course.file);
                window.location.href = `visionneuse.html?file=${encodedFilePath}`;
            };
        } else {
            card.onclick = () => {
                window.open(course.file, '_blank');
            };
        }

        const title = document.createElement('h3');
        title.textContent = course.title;
        card.appendChild(title);

        container.appendChild(card);
    }

    // Fonction pour générer une carte avec boutons (pour les autres pages)
    function generateCardWithButtons(course, container, buttonLabel) {
        const card = document.createElement('div');
        card.className = 'card';

        const title = document.createElement('h3');
        title.textContent = course.title;
        card.appendChild(title);

        // Création du bouton pour le lien 'file'
        const fileButton = document.createElement('button');
        fileButton.textContent = buttonLabel;  // Texte du bouton basé sur la page
        fileButton.classList.add('file-btn');  // Ajout de la classe CSS
        fileButton.onclick = () => {
            window.open(course.file, '_blank'); // Ouvre le lien 'file' dans un nouvel onglet
        };
        card.appendChild(fileButton);

        // Si l'URL est présente, création du bouton pour le lien 'URL'
        if (course.URL) {
            const urlButton = document.createElement('button');
            urlButton.textContent = 'Voir en ligne';
            urlButton.classList.add('url-btn');  // Ajout de la classe CSS
            urlButton.onclick = () => {
                window.open(course.URL, '_blank'); // Ouvre le lien 'URL' dans un nouvel onglet
            };
            card.appendChild(urlButton);
        }

        container.appendChild(card);
    }

    // Fonction pour charger les données JSON et appeler la bonne fonction selon la page
    function loadData(jsonFile, type, buttonLabel) {
        fetch(jsonFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const courseContainer = document.getElementById('cards-categories') || document.querySelector('.brief-categories');
                if (data.courses) {
                    data.courses.forEach(course => {
                        if (type === 'markdown') {
                            // Comportement pour sheets.html (Markdown ou PDF)
                            generateCardOriginal(course, courseContainer);
                        } else {
                            // Comportement avec boutons pour les autres pages
                            generateCardWithButtons(course, courseContainer, buttonLabel);
                        }
                    });
                }
            })
            .catch(error => {
                console.error('Erreur lors du chargement des cours:', error);
            });
    }

    // Déterminer quelle page est chargée en fonction de l'URL ou d'un élément unique
    const currentPage = window.location.pathname;

    if (currentPage.includes('sheets.html')) {
        // Page des cours (Markdown ou PDF) sans boutons
        loadData('cardsSheets.json', 'markdown');
    } else if (currentPage.includes('PDF.html')) {
        // Page des PDF avec boutons 'Voir le PDF'
        loadData('cardsPDF.json', 'pdf', 'Voir le PDF');
    } else if (currentPage.includes('briefs.html')) {
        // Page des briefs avec boutons 'Voir le brief'
        loadData('cardsBriefs.json', 'brief', 'Voir le brief');
    } else if (currentPage.includes('Cours.html')) {
        // Page des cours avec boutons 'Voir le cour'
        loadData('cardsCours.json', 'cours', 'Voir le cours');
    }
});

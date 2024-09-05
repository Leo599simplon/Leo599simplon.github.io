document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour générer une carte
    function generateCard(course, container, type) {
        const card = document.createElement('div');
        card.className = 'card';

        if (type === 'markdown') {
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
        } else if (type === 'pdf') {
            card.onclick = () => {
                window.location.href = course.file;
            };
        } else if (type === 'brief') {
            card.onclick = () => {
                window.location.href = course.file;
            };
        } else if (type === 'cours') {
            card.onclick = () => {
                window.open(course.file, '_blank');
            };
        }

        const title = document.createElement('h3');
        title.textContent = course.title;

        card.appendChild(title);

        // Si l'URL est renseignée et qu'on est sur les briefs, on ajoute un lien cliquable
        if (type === 'brief' && course.URL) {
            const link = document.createElement('a');
            link.href = course.URL;
            link.target = '_blank';  // Ouvre dans un nouvel onglet
            link.textContent = 'Voir en ligne';
            link.className = 'card-link';  // Ajoutez une classe si vous souhaitez styliser le lien
            card.appendChild(link);
        }

        container.appendChild(card);
    }

    // Fonction pour charger les données JSON
    function loadData(jsonFile, type) {
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
                        generateCard(course, courseContainer, type);
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
        // Page des cours (Markdown ou PDF)
        loadData('cardsSheets.json', 'markdown');
    } else if (currentPage.includes('PDF.html')) {
        // Page des PDF
        loadData('cardsPDF.json', 'pdf');
    } else if (currentPage.includes('briefs.html')) {
        // Page des briefs
        loadData('cardsBriefs.json', 'brief');
    } else if (currentPage.includes('cours.html')) {
        // Page des cours
        loadData('cardsCours.json', 'cours');
    }
});

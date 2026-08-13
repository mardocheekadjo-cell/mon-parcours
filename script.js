// Tab Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const tabName = this.getAttribute('data-tab');
            
            // Masquer tous les onglets
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Retirer la classe active de tous les liens
            navLinks.forEach(l => {
                l.classList.remove('active');
            });
            
            // Afficher l'onglet sélectionné
            document.getElementById(tabName).classList.add('active');
            
            // Ajouter la classe active au lien
            this.classList.add('active');
        });
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Afficher un message de succès
            alert('Merci pour votre message ! Je vous répondrai bientôt.');
            
            // Réinitialiser le formulaire
            this.reset();
        });
    }

    // Animation des barres de compétences au chargement de la page
    observeSkillBars();
});

// Observer pour animer les barres de compétences
function observeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    bar.style.animation = 'slideIn 1s ease-out';
                    observer.unobserve(bar);
                }
            });
        });

        skillBars.forEach(bar => observer.observe(bar));
    }
}

// Animation d'apparition des éléments
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            width: 0 !important;
        }
        to {
            width: var(--final-width);
        }
    }
`;
document.head.appendChild(style);

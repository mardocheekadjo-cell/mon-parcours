// Script pour générer la timeline du portfolio
fetch("education.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP! statut: ${response.status}`);
    }
    return response.json();
  })
  .then((educationData) => {
    const timelineContainer = document.querySelector("#timeline");
    if (!timelineContainer) {
      console.error("Élément #timeline non trouvé");
      return;
    }
    
    if (!Array.isArray(educationData) || educationData.length === 0) {
      timelineContainer.innerHTML = "<p class='error'>Aucune donnée de parcours trouvée.</p>";
      return;
    }
    
    // Vider le conteneur avant d'ajouter le contenu
    timelineContainer.innerHTML = "";

    // Créer la liste de la timeline
    const ul = document.createElement("ul");
    ul.className = "timeline-list";

    educationData.forEach((item) => {
      const li = document.createElement("li");
      li.className = `timeline-item ${item.level}`;

      const modulesList = item.modules.map(mod => `<li>${mod}</li>`).join("");

      li.innerHTML = `
        <div class="timeline-content">
          <h3>${item.title}</h3>
          <h4 class="program">${item.program}</h4>
          <div class="details">
            <p><strong>Compétences clés :</strong> ${item.skills}</p>
            <div class="modules">
              <strong>Modules principaux :</strong>
              <ul>
                ${modulesList}
              </ul>
            </div>
          </div>
        </div>
      `;
      ul.appendChild(li);
    });

    timelineContainer.appendChild(ul);
  })
  .catch((error) => {
    console.error("Erreur lors du chargement des données éducatives:", error);
    const timelineContainer = document.querySelector("#timeline");
    if (timelineContainer) {
      timelineContainer.innerHTML = "<p class='error'>Erreur lors du chargement du parcours.</p>";
    }
  });

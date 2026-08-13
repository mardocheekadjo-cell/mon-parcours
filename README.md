# Mon Parcours

Portfolio professionnel - Mon parcours de la Terminale à la Licence 3

## 🌐 Accès au site

Le site est déployé sur GitHub Pages et accessible à l'adresse suivante :
**https://mardocheekadjo-cell.github.io/mon-parcours/**

## 📁 Structure du projet

```
mon-parcours/
├── index.html          # Page principale (timeline du parcours)
├── style.css           # Feuille de styles
├── script.js           # Script JavaScript pour animations
├── education.json      # Données du parcours éducatif
├── README.md           # Ce fichier
└── .github/
    └── workflows/
        └── deploy.yml  # Workflow de déploiement automatique
```

## ✨ Fonctionnalités

- 📱 **Design Responsive** : Adapté à tous les appareils (mobile, tablette, desktop)
- 🎯 **Timeline Interactive** : Visualisation chronologique de votre parcours
- ✨ **Animations Fluides** : Effets de défilement et transitions élégantes
- 🎨 **Design Moderne** : Interface épurée avec dégradés et ombres subtiles
- 📊 **Section Compétences** : Mise en avant de vos compétences techniques

## 📚 Contenu du portfolio

La timeline affiche votre parcours en 5 étapes :

1. **Terminale** - Dernière année du lycée avec spécialités
2. **Baccalauréat** - Obtention du diplôme et réalisations clés
3. **Licence 1** - Première année universitaire et modules fondamentaux
4. **Licence 2** - Spécialisation et projets importants
5. **Licence 3** - Finalisation avec projet ou stage de fin d'études

## 🔧 Installation locale

1. Clonez le dépôt :
```bash
git clone https://github.com/mardocheekadjo-cell/mon-parcours.git
cd mon-parcours
```

2. Ouvrez `index.html` dans votre navigateur ou utilisez un serveur local :
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server

# Puis accédez à http://localhost:8000
```

## 📝 Personnalisation

### Modifier les informations du parcours

Éditez le fichier `education.json` pour mettre à jour vos données :

```json
{
  "level": "licence1",
  "title": "Licence 1",
  "program": "Licence Informatique - Université Paris",
  "modules": [
    "Algorithmique",
    "Programmation Python",
    "Mathématiques discrètes"
  ],
  "skills": "Maîtrise des concepts fondamentaux en informatique..."
}
```

### Personnaliser le style

Modifiez `style.css` pour changer :
- Les couleurs (actuellement violet et bleu : `#667eea` et `#764ba2`)
- Les polices de caractères
- Les espacements et dimensions
- Les animations

Exemples de variables CSS à modifier :
```css
/* Couleurs principales */
--primary-color: #667eea;
--secondary-color: #764ba2;

/* Ou directement dans les sélecteurs */
header {
  background: linear-gradient(135deg, votre-couleur-1 0%, votre-couleur-2 100%);
}
```

### Ajouter/modifier les sections

Vous pouvez facilement ajouter des éléments supplémentaires :
- Nouvelles sections (certifications, prix, etc.)
- Plus de détails dans chaque étape
- Liens vers des projets GitHub

## 🚀 Déploiement

Le déploiement est **automatique** via GitHub Actions :

1. Toute modification sur la branche `main` déclenche le workflow
2. GitHub Actions compile et déploie le site
3. Le site est accessible après quelques secondes à : https://mardocheekadjo-cell.github.io/mon-parcours/

### Vérifier le statut du déploiement

Allez dans l'onglet **Actions** du dépôt pour voir l'historique des déploiements.

## 💡 Conseils de personnalisation

1. **Détaillez votre parcours** : Ajoutez des projets concrets, des compétences acquises
2. **Ajoutez des liens** : Vers vos projets GitHub, portfolios, LinkedIn
3. **Utilisez des emojis** : Pour rendre la lecture plus agréable et dynamique
4. **Mettez à jour régulièrement** : Gardez votre portfolio à jour avec vos avancées
5. **Testez sur mobile** : Assurez-vous que le rendu est bon sur tous les appareils

## 📄 Licence

Aucune licence spécifiée - Tous droits réservés © 2024

---

**Créé avec ❤️ par mardocheekadjo-cell**

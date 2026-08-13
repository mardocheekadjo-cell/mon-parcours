# Mon Parcours

Portfolio professionnel - Mon parcours de la Terminale à la Licence 3

## 🌐 Accès au site

Le site est déployé sur GitHub Pages et accessible à l'adresse suivante :
**https://mardocheekadjo-cell.github.io/mon-parcours/**

## 📁 Structure du projet

```
mon-parcours/
├── index.html          # Page principale
├── style.css           # Feuille de styles
├── script.js           # Script JavaScript
├── events.json         # Données des dépôts favoris
├── README.md           # Ce fichier
└── .github/
    └── workflows/
        └── deploy.yml  # Workflow de déploiement automatique
```

## ✨ Fonctionnalités

- 📱 **Design Responsive** : Adapté à tous les appareils
- 🚀 **Déploiement Automatique** : Via GitHub Actions
- 📊 **Liste Dynamique** : Chargement des dépôts depuis JSON
- 🎨 **Design Moderne** : Interface élégante et épurée

## 🔧 Installation locale

1. Clonez le dépôt :
```bash
git clone https://github.com/mardocheekadjo-cell/mon-parcours.git
cd mon-parcours
```

2. Ouvrez `index.html` dans votre navigateur ou utilisez un serveur local :
```bash
python -m http.server 8000
# Puis accédez à http://localhost:8000
```

## 📝 Personnalisation

### Modifier les dépôts favoris

Éditez le fichier `events.json` :
```json
[
  {
    "name": "Nom du dépôt",
    "starred": "YYYY-MM-DD",
    "description": "Description optionnelle"
  }
]
```

### Personnaliser le style

Modifiez `style.css` pour changer les couleurs et la mise en page.

## 🚀 Déploiement

Le déploiement est **automatique** :
1. Toute modification sur la branche `main` déclenche le workflow
2. GitHub Actions compile et déploie le site
3. Le site est accessible après quelques secondes

### Vérifier le statut du déploiement

Allez dans l'onglet **Actions** du dépôt pour voir l'historique des déploiements.

## 📄 Licence

Aucune licence spécifiée - Tous droits réservés © 2024

---

**Créé avec ❤️ par mardocheekadjo-cell**

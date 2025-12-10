# Ceepia - Landing Page

Bienvenue sur le projet de la Landing Page de **Ceepia**, la plateforme de pilotage pour domaines viticoles.

Cette page a été conçue pour présenter la proposition de valeur de Ceepia, capturer des leads via une liste d'attente et rassurer les futurs utilisateurs (vignerons).

## 🚀 Déploiement sur GitHub Pages

Ce site est prêt à être hébergé gratuitement sur GitHub Pages.

### Comment mettre en ligne :
1. Créez un nouveau repository sur GitHub.
2. Poussez ces fichiers (index.html, css/, js/, merci.html, etc.) sur le repository.
3. Allez dans **Settings** > **Pages** du repository.
4. Sélectionnez la branche `main` (ou `master`) et sauvegardez.
5. Votre site sera accessible à l'adresse `https://votre-pseudo.github.io/nom-du-repo/`.

### Fonctionnement du formulaire
Le formulaire utilise le service gratuit **FormSubmit.co**.
- Lors de la première soumission sur le site en ligne, vous recevrez un email de confirmation à `loic.ceepia@gmail.com`.
- **Important** : Vous devez cliquer sur le lien dans cet email pour "Activer" le formulaire.
- Ensuite, vous recevrez chaque inscription par email.
- Vous pouvez aussi télécharger toutes les inscriptions au format **CSV** depuis le tableau de bord FormSubmit (lien dans les emails).

## 📂 Structure du Projet

```
/
├── index.html          # La structure principale de la page
├── merci.html          # Page de confirmation après inscription
├── robots.txt          # Configuration pour les robots d'indexation (SEO)
├── sitemap.xml         # Plan du site pour Google (SEO)
├── css/
│   └── style.css       # Tous les styles (Couleurs, Mise en page, Responsive)
└── js/
    └── script.js       # Interactions (Scroll fluide, Formulaire, etc.)
```

## 🎨 Personnalisation

### 1. Vidéo YouTube
La vidéo est intégrée via une `iframe` dans `index.html`.
Pour changer la vidéo, remplacez l'ID `ST3sCzP5KvY` dans l'URL `src` de l'iframe par l'ID de votre nouvelle vidéo.

### 2. Formulaire d'inscription
Actuellement, le formulaire simule une inscription avec une alerte JavaScript (`js/script.js`).
**Pour la mise en production :**
- Connectez le formulaire à un service comme **Mailchimp**, **Typeform**, **Airtable** ou votre propre backend Python.
- Modifiez la balise `<form>` dans `index.html` pour pointer vers votre URL d'API.

### 3. SEO
- Modifiez le fichier `sitemap.xml` avec votre URL de domaine finale (ex: `https://www.ceepia.com`).
- Vérifiez les balises `<meta>` dans le `<head>` de `index.html` pour optimiser le titre et la description.

## 📱 Responsive Design
Le site est conçu en "Mobile First". Il s'adapte automatiquement :
- **Desktop** : Mise en page large, colonnes multiples.
- **Tablette** : Ajustement des grilles.
- **Mobile** : Colonne unique, boutons larges pour le tactile.

## 🛠 Technologies
- **HTML5** : Sémantique et structuré.
- **CSS3** : Variables CSS pour la gestion facile des couleurs (`:root`).
- **JavaScript** : Vanilla JS (pas de framework lourd).
- **FontAwesome** : Pour les icônes (chargé via CDN).
- **Google Fonts** : Montserrat (Titres) et Inter (Texte).

---
© 2025 Ceepia. Tous droits réservés.

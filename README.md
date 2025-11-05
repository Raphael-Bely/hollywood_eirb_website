# Hollywood'eirb Website

Site web de la liste BDS Hollywood'eirb pour la campagne BDS 2024 de l'ENSEIRB-MATMECA.

## 🌐 Live Demo
Ce site web est visible et utilisable à son plein potentiel à l'adresse suivante : 

https://hollywood.eirb.fr/

## 📋 Description
Ce site web présente la liste BDS Hollywood'eirb et ses différentes sections :
- Accueil
- Acteurs (membres de la liste) 
- Allo (système de commande)
- Partenaires
- Jeu (Pac-Man custom)
- Vidéos promotionnelles

## 🛠️ Technologies utilisées
- HTML5
- CSS3 
- JavaScript
- PHP (authentification CAS)

## 🏗️ Structure du projet
```
hollywood_eirb_website/
├── index.html          # Page d'accueil
├── index.css          
├── index.js
├── acteurs/           # Section équipe
├── allo/             # Section commandes
├── partenaire/       # Section partenaires  
├── videos/           # Section vidéos
├── jeu/              # Jeu Pac-Man
├── images/           # Assets
│   ├── logo/
│   ├── produit/
│   └── partenaires/
├── php/              # Backend PHP
└── README.md
```

## 🔒 Authentification
L'authentification se fait via le CAS de Bordeaux INP pour :
- La section vidéos
- Le système de commande Allo

## 🎨 Design
Le site utilise un thème cinéma/Hollywood avec :
- Animations fluides
- Effets néon
- Tapis rouge
- Étoiles et effets visuels
- Design responsive

## 📱 Compatibilité
- Desktop (Chrome, Firefox, Safari)
- Mobile & Tablettes
- Responsive design

## 🔧 Installation locale
1. Cloner le repo
```bash
git clone https://github.com/your-username/hollywood_eirb_website.git
```
2. Configurer un serveur web (Apache/Nginx) 
3. Configurer le virtualhost pour pointer vers le dossier du projet
4. Configurer PHP et les permissions si nécessaire

## ✍️ Auteurs
- Raphaël Bély

## 📝 Licence
Projet privé - Tous droits réservés
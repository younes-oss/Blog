# 📰 BlogApp – Application de blog moderne avec Angular

 une **application de blog moderne et responsive** pour partager tes articles, tes idées ou ton expertise technique. Ce projet t'aidera à maîtriser Angular, la gestion des routes, des formulaires, les appels API et l’organisation modulaire d’une app frontend.

---

## 🔧 Technologies utilisées

- 🌐 **HTML5**
- 🎨 **CSS3 / SCSS**
- ⚙️ **Angular 16+**
- 🔄 **Firebase**
- 🎛️ **Bootstrap**
- 🧠 **TypeScript**
- 🗂️ **LocalStorage**
- 🧪 **Postman**, **Git/GitHub**, **Angular CLI**

---

## ✨ Fonctionnalités principales

### 👤 Utilisateur anonyme
- 📜 Consulter la liste des articles
- 📖 Lire un article en détail
- 🗂️ Filtrer par catégorie ou mot-clé
- 🔍 Rechercher un article par titre

### 🔐 Utilisateur authentifié (auteur/admin)
- 🔑 Connexion via un formulaire de login
- ✍️ Ajouter un article (titre, contenu, image, catégorie)
- 📝 Modifier ses articles
- ❌ Supprimer ses articles
- 💬 Ajouter/supprimer des commentaires
- 🧾 Accéder à un tableau de bord privé

### 🛡️ Sécurité
- ✔️ Les opérations de création/modification/suppression sont protégées
- 🚧 Accès au dashboard restreint via un **Guard**

---

## 🧱 Architecture de l'application

### 📦 Composants Angular
- `navbar` – Barre de navigation dynamique
- `home` – Page d’accueil avec articles récents
- `post-list` – Liste des articles avec pagination
- `post-detail` – Lecture d’un article
- `post-form` – Création/modification d’un article
- `login` – Formulaire de connexion
- `comment-section` – Affichage/ajout des commentaires

### 🔌 Services Angular
- `PostService` – Gestion des articles (CRUD via API)
- `AuthService` – Authentification & session
- `CommentService` – Gestion des commentaires
- `AuthGuard` – Protection des routes privées

---


## 🧠 Compétences mobilisées

- ⚒️ Développement frontend avec Angular
- 🔁 Appels HTTP/API
- 🎨 Responsive design
- 🔐 Sécurisation d’accès via Guards
- 🧱 Architecture modulaire
- 🔍 Manipulation de JSON
- 💼 Utilisation de référentiels Git

---



## 🚀 Lancer le projet

```bash
# Cloner le projet
git clone https://github.comyounes-oss/Blog.git
cd mon-blog-angular

# Installer les dépendances
npm install

# Lancer l’application
ng serve

## 👨‍💻 Auteur

Développé par **Mohamed Iaazi , Mohamed Amiri , Youness ait Chatto **, développeur web freelance passionné par le frontend moderne, l’UX/UI, et les frameworks Angular.



> Ce projet a été réalisé dans le cadre de la formation **Développeur Web et Web Mobile (2023)** et sert de démonstration de compétences sur Angular, l’organisation d’un projet modulaire, et la sécurisation des accès frontend.


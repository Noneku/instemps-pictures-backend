# Plateforme de gestion de prestations photographiques

## 📝 Description

Ce projet est une **application web de gestion de prestations photographiques**, conçue comme un **outil professionnel** permettant de gérer l’ensemble du cycle de vie d’une prestation :  
de la réservation jusqu’à la livraison finale.

L’application propose **deux espaces distincts mais connectés** :
- un **espace professionnel (admin)** destiné au photographe
- un **espace client** permettant la réservation, le suivi et l’accès aux livrables

L’objectif est de fournir une **solution métier structurée, sécurisée et évolutive**, adaptée aux besoins d’un professionnel de la photographie.

---

## 🎯 Objectifs du projet

- Concevoir une **application métier complète**
- Mettre en place un **backend structuré avec NestJS**
- Implémenter une **base de données relationnelle cohérente**
- Gérer des **workflows réels** (réservation → projet → livraison)
- Servir de **projet vitrine professionnel** dans le cadre d’une recherche d’alternance

---

## 👥 Espaces et fonctionnalités

### 🔧 Espace professionnel (Admin)
- Gestion des **profils clients**
- Gestion des **prestations proposées**
- Gestion des **réservations via un calendrier**
- Suivi des **commandes et projets**
- Gestion des **contrats numériques**
- Messagerie centralisée avec les clients
- Livraison des fichiers dans des galeries privées

### 👤 Espace client
- Gestion du **profil personnel**
- Consultation et **commande de prestations**
- Réservation de dates disponibles
- Communication avec le photographe
- Suivi de l’avancement de la commande
- Accès et téléchargement des livrables finaux

---

## 🧱 Entités métier principales

- **User**  
  Représente un utilisateur de la plateforme (client ou administrateur).

- **Service**  
  Représente une prestation photographique proposée.

- **Booking**  
  Représente une réservation effectuée par un client pour un service à une date donnée.

- **Project**  
  Représente le suivi d’un booking validé jusqu’à la livraison finale.

- **Contract**  
  Représente un contrat numérique associé à une prestation.

- **Message**  
  Représente un échange entre un client et le photographe.

- **File**  
  Représente un fichier livré au client (photos, documents, archives).

---

## 🛠️ Stack technique

### Backend
- **NestJS**
- **Prisma**
- **PostgreSQL**
- Authentification JWT
- Gestion des rôles (CLIENT / ADMIN / PROFESSIONNEL)

### Frontend
- **React**
- **TypeScript**

### Outils
- **Docker** (API + base de données)
- Variables d’environnement (`.env`)
- Git & GitHub

---

## 🗂️ Architecture

Le backend est organisé de manière **modulaire**, inspirée des standards en entreprise :

- `auth`
- `users`
- `services`
- `bookings`
- `projects`
- `contracts`
- `messages`
- `files`

Chaque module est responsable de son domaine métier.

---

## 🚀 MVP (Minimum Viable Product)

La première version fonctionnelle inclut :
1. Authentification et gestion des rôles
2. Gestion des profils utilisateurs
3. Gestion des prestations
4. Réservations via calendrier
5. Suivi des projets par statut
6. Messagerie simple
7. Livraison sécurisée des fichiers

---

## 📈 Évolutions possibles

- Notifications temps réel
- Paiement en ligne
- Synchronisation avec des calendriers externes
- Application mobile dédiée
- Extension à d’autres métiers créatifs

---

## 🎓 Objectif pédagogique

Ce projet a pour but de :
- Approfondir la **conception backend**
- Mettre en pratique **NestJS et PostgreSQL**
- Travailler sur un **cas réel et complet**
- Servir de **portfolio professionnel** pour une alternance ou un poste junior

---

## 👨‍💻 Auteur

Projet développé par **Nassim** dans une démarche de montée en compétences et de professionnalisation.

# Instemps-Pictures
Instemps Pictures – Plateforme de gestion de prestations photographiques

Description du projet

Cette application est une plateforme de gestion de prestations photographiques, conçue pour permettre aux photographes de gérer leurs clients et leurs projets tout en offrant aux clients un espace personnalisé pour réserver des services, suivre l’avancement de leurs commandes et accéder aux livrables.

L’application repose sur deux espaces distincts mais connectés :

Espace professionnel (admin) : destiné au photographe, permettant la gestion des clients, des prestations, des réservations, des projets, des contrats et des livraisons.

Espace client : permettant de consulter et commander des prestations, réserver des dates, communiquer avec le photographe et suivre l’avancement des projets.

Le projet est pensé comme un outil professionnel complet, combinant gestion métier, suivi client et workflow digital.

Objectifs principaux

Offrir un outil de gestion professionnel pour les photographes.

Permettre aux clients de réserver et suivre leurs prestations de manière fluide.

Centraliser la communication, les contrats et la livraison des fichiers.

Fournir un backend structuré, sécurisé et évolutif, prêt à être étendu pour d’autres fonctionnalités métier.

Fonctionnalités principales
Espace photographe (admin)

Gestion des profils clients

Gestion des prestations proposées

Gestion des réservations via calendrier

Suivi des commandes et projets

Gestion des contrats numériques

Messagerie centralisée avec les clients

Livraison des fichiers dans des galeries privées

Espace client

Gestion de son profil personnel

Consultation et commande de prestations

Réservation de dates disponibles

Communication avec le photographe via la messagerie

Suivi de l’avancement de sa commande

Accès et téléchargement des livrables finaux

Entités métier principales

User : représente une personne sur la plateforme (client ou photographe)

Service : type de prestation proposée par le photographe

Booking : réservation d’un service par un client à une date donnée

Project : suivi d’un booking validé jusqu’à la livraison finale

Contract : contrat numérique associé à un booking ou projet

Message : échange entre client et photographe

File : livrable (photo ou document) associé à un projet

Stack technique

Backend : NestJS + Prisma + PostgreSQL

Frontend : React + TypeScript

Gestion dev : Docker pour la base de données et l’API

Authentification & sécurité : JWT, gestion des rôles (client / admin)

Organisation du projet

Le projet suit une architecture modulaire :

Modules backend : auth, users, services, bookings, projects, contracts, messages, files

Base de données relationnelle gérée avec Prisma et PostgreSQL

Frontend responsive avec React pour un parcours utilisateur fluide

Roadmap / MVP

Pour une première version fonctionnelle, le MVP inclut :

Authentification et gestion des rôles

Gestion des profils clients et prestations

Réservation via calendrier

Suivi des projets et statuts

Messagerie simple

Livraison de fichiers sécurisée

Les fonctionnalités avancées (notifications, mini e-commerce interne, édition limitée) pourront être ajoutées dans une phase suivante.

Objectif pédagogique et professionnel

Ce projet est conçu pour :

Développer une application métier complète

Maîtriser NestJS et PostgreSQL

Structurer un workflow backend solide

Créer un portfolio crédible pour une alternance ou un poste junior/mid-level

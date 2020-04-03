-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  localhost
-- Généré le :  Jeu 29 Décembre 2016 à 08:40
-- Version du serveur :  5.6.33
-- Version de PHP :  7.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `DB`
--

-- --------------------------------------------------------

--
-- Structure de la table `Person`
--

CREATE TABLE `Person` (
  `id` int(11) NOT NULL,
  `FirstName` varchar(55) NOT NULL,
  `LastName` varchar(55) NOT NULL,
  `Age` int(11) NOT NULL,
  `Hometown` varchar(55) NOT NULL,
  `Job` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Person`
--

INSERT INTO `Person` (`id`, `FirstName`, `LastName`, `Age`, `Hometown`, `Job`) VALUES
(1, 'Marc', 'Dupont', 44, 'Paris', 'Ingenieur'),
(2, 'Jean', 'Martin', 20, 'Toulouse', 'Etudiant');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Person`
--
ALTER TABLE `Person`
  ADD PRIMARY KEY (`id`);

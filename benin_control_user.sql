-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 07 mai 2023 à 19:00
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `benin_control_user`
--

-- --------------------------------------------------------

--
-- Structure de la table `faire_rapport`
--

CREATE TABLE `faire_rapport` (
  `id_employee` int(11) NOT NULL,
  `titre` varchar(200) NOT NULL,
  `date_enregistrement` varchar(200) NOT NULL,
  `nom_fichier_rapport` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `faire_rapport`
--

INSERT INTO `faire_rapport` (`id_employee`, `titre`, `date_enregistrement`, `nom_fichier_rapport`) VALUES
(1, 'xnsnxl:', ',s;nx; ', 'sn, x;sn x'),
(1, 'none', 'none', 'none'),
(1, 'none', 'none', 'none'),
(1, 'none', 'none', 'none');

-- --------------------------------------------------------

--
-- Structure de la table `notes`
--

CREATE TABLE `notes` (
  `id_employee` int(11) NOT NULL,
  `id_note` varchar(200) NOT NULL,
  `statut_ponc` varchar(200) NOT NULL,
  `statut_assiduite` varchar(200) NOT NULL,
  `statut_creat` varchar(200) NOT NULL,
  `statut_conduite` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `notes`
--

INSERT INTO `notes` (`id_employee`, `id_note`, `statut_ponc`, `statut_assiduite`, `statut_creat`, `statut_conduite`) VALUES
(1, 'note_1', '10', '10', '10', '10'),
(1, 'note_2', '15', '15', '15', '15');

-- --------------------------------------------------------

--
-- Structure de la table `note_client`
--

CREATE TABLE `note_client` (
  `email_client` varchar(200) NOT NULL,
  `note` varchar(200) NOT NULL,
  `critique` varchar(300) NOT NULL,
  `id_employee` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `performences`
--

CREATE TABLE `performences` (
  `id` int(11) NOT NULL,
  `id_note_ref` varchar(200) NOT NULL,
  `note` varchar(200) NOT NULL,
  `date` varchar(200) NOT NULL,
  `commentaire` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `performences`
--

INSERT INTO `performences` (`id`, `id_note_ref`, `note`, `date`, `commentaire`) VALUES
(1, 'note_1', '10', 'none', 'good'),
(2, 'note_2', '15', 'none', 'none');

-- --------------------------------------------------------

--
-- Structure de la table `presence`
--

CREATE TABLE `presence` (
  `id_employee` int(11) NOT NULL,
  `date` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `presence`
--

INSERT INTO `presence` (`id_employee`, `date`) VALUES
(1, '2023-05-06 19:12:11');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `num_matricul` int(11) NOT NULL,
  `nom` varchar(200) NOT NULL,
  `prenom` varchar(200) NOT NULL,
  `date_naissance` varchar(200) NOT NULL,
  `lieu_naissance` varchar(200) NOT NULL,
  `nombre_enfant` varchar(200) NOT NULL,
  `reference_contrat` varchar(200) NOT NULL,
  `date_recrutement` varchar(200) NOT NULL,
  `piece_join_name` varchar(200) NOT NULL,
  `numero_compte` varchar(200) NOT NULL,
  `reference_banque` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `telephone` varchar(200) NOT NULL,
  `type_utilisateur` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `situation_matri` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`num_matricul`, `nom`, `prenom`, `date_naissance`, `lieu_naissance`, `nombre_enfant`, `reference_contrat`, `date_recrutement`, `piece_join_name`, `numero_compte`, `reference_banque`, `email`, `telephone`, `type_utilisateur`, `password`, `situation_matri`) VALUES
(1, 'User1', 'User1', '01/02/22', 'cotonou', '0', '02', '02/03/09', '1.pdf', '1283898368T835653877638', 'none', 'user1@gmail.com', '97979797', 'employe', 'user1', 'celibataire'),
(2, 'User2', 'User2', '02/07/90', 'Parakou', '2', '2', '2020', 'User2.pdf', '567574635356587576567', 'none', 'User2@gmail.com', '+22997979797', 'client', 'User2', 'celibataire');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `faire_rapport`
--
ALTER TABLE `faire_rapport`
  ADD KEY `foreign` (`id_employee`);

--
-- Index pour la table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id_note`),
  ADD KEY `id_employee` (`id_employee`);

--
-- Index pour la table `performences`
--
ALTER TABLE `performences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `foreign` (`id_note_ref`);

--
-- Index pour la table `presence`
--
ALTER TABLE `presence`
  ADD KEY `foreign` (`id_employee`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`num_matricul`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `performences`
--
ALTER TABLE `performences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `faire_rapport`
--
ALTER TABLE `faire_rapport`
  ADD CONSTRAINT `FK` FOREIGN KEY (`id_employee`) REFERENCES `utilisateur` (`num_matricul`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `fk2` FOREIGN KEY (`id_employee`) REFERENCES `utilisateur` (`num_matricul`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `performences`
--
ALTER TABLE `performences`
  ADD CONSTRAINT `fk3` FOREIGN KEY (`id_note_ref`) REFERENCES `notes` (`id_note`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `presence`
--
ALTER TABLE `presence`
  ADD CONSTRAINT `fk4` FOREIGN KEY (`id_employee`) REFERENCES `utilisateur` (`num_matricul`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- MySQL dump 10.13  Distrib 8.0.35, for Win64 (x86_64)
--
-- Host: localhost    Database: afac_express
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artist`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE if not exists `artist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `image` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist`
--

LOCK TABLES `artist` WRITE;
/*!40000 ALTER TABLE `artist` DISABLE KEYS */;
INSERT INTO `artist` VALUES (1,'Lara Sousa','Lara Sousa est une cinéaste et artiste numérique mozambicaine. Elle est également conteuse. Le choix de sa profession n\'est pas surprenant puisqu\'elle est la descendante de la poétesse Noémia de Sousa. Née en 1926, Noémia de Sousa était poète et rédactrice en chef de journal ; jeune femme, elle a utilisé le contexte de répression politique comme stimulant pour écrire, dans lequel elle était farouchement critique, ce qui lui a valu d\'être emprisonnée au Mozambique, puis de s\'exiler. Aujourd\'hui, on se souvient d\'elle comme de l\'un des plus importants poètes du Mozambique pour sa contribution à la lutte de libération du pays. Suivant les traces de sa grand-tante en matière d\'expression artistique, Lara laisse sa marque avec son film Fin et sa pseudo-suite, Kalunga. Le visionnage des films est une expérience sensorielle et évocatrice, d\'autant plus que les spectateurs se rendent compte qu\'ils sont en train de dialoguer les uns avec les autres. Le travail de Lara s\'engage dans des récits provenant d\'un pays qui est encore en train d\'accepter son identité passée et présente. Les questions liées à la décolonialité, au traumatisme, à l\'hybridité, à la mort, à l\'utopie et à la mer résonnent dans les histoires que Lara raconte. Consciente que les récits individuels ont été réduits au silence tout au long de l\'histoire du Mozambique, Lara cherche à placer le sujet au centre de ses propres choix. En se concentrant sur les non-lieux où ces récits individuels existent, elle crée un espace imaginaire entre le passé, le présent et le futur où les désirs subjectifs peuvent émerger, comme un acte poétique pour ne pas laisser mourir les expériences subjectives.','https://i.postimg.cc/YCFsjPgP/1-Lara-Sousa.jpg'),(2,'Deepa Bauhadoor','Née à Maurice en 1976, elle passe toute son enfance à Petite Julie dans la maison familiale et au milieu des champs de canne alentours. Après avoir passé son H.S.C., elle se rend en Inde afin d\'y étudier l\'Art, sa passion. Elle obtient brillamment un Bachelor of Fine Arts à Hyderabad et en profite pour visiter la Grande Péninsule et apprendre et pratiquer télégou et hindi. En Inde, en 1999, elle participe déjà à de nombreuses expositions de groupes, notamment à la Potti Sree Ramulu Telugu University d\'Hyderabad. De retour dans son île natale, elle y devient Educator en Art & Design. Puis elle décide de poursuivre et compléter ses études en passant un Post Graduate Certificate in Education du Mauritius Institute of Education (MIE). Enfin, par passion pour la photographie, elle obtient un Advance Certificate in Photography (MQA approved). Elle enchaîne alors les expositions et manifestations culturelles, Exposition organisée par l\'ACA à la Galerie Malcom de Chazal, ou le 3e Salon d\'été en mars 1999, le Salon de mai en 2010, deux Salons auxquels elle ne cessera de participer chaque année. En 2012, elle expose huit toiles à la Galerie Amrita Dyalah de Grand-Baie. La même année, elle réalise sa première exposition en solo à New-Delhi intitulée BENEATH THE BLUE. En 2013, elle prend part à la 12e Convention internationale GOPIO en participant à une exposition collective au Mahatma Gandhi Institute de Moka. Elle se produit alors dans une exposition de groupe en Chine, local culture, à Chengdu et Dujiangyan organisée par le Chengdu Municipal Foreign Affairs Office (FAO), Chengdu Literary and Art Federation and ACA. Le 13 juin 2013, à Bangkok en Thaïlande, elle obtient le prestigieux GLORY OF INDIA AWARD de l\'IIFS (India International Friendship Society). Distinction qu\'elle reçoit de l\'ancien Député-Premier Ministre de Thaïlande, son Excellence KORN DABBARANSI. La même année, le 17 décembre, elle remporte la médaille d\'argent de la Fédération du Tourisme au Coral Azur Beach Resort de Mon Choisy. En 2014, elle participe à la manifestation, GLORIES OF BIHAR ART EXHIBITION destinée à marquer le 180e Anniversaire de l\'arrivée des travailleurs engagés à Maurice. Puis ce sera une exposition au Rabindranath Tagore Institute. Par la suite, elle se rend plusieurs fois en Chine pour participer à diverses expositions internationales et y représenter son pays d\'origine, Maurice. Notamment la prestigieuse 6th Beijing International Art Biennale, au National Art Museum of China. En Italie, elle prend part à une exposition d\'Art et de poésie à Bologne. En tant que photographe, elle participe souvent aux expositions du Cercle des Artistes Photographes. En 2017, elle expose une œuvre grand format dans l\'événement Porlwi by night- Femmes coupeuses de cannes à sucre. Elle pratique toutes sortes de techniques et régulièrement l\'aquarelle en exposant également au sein de l\'International Water Colour society (IWS). Elle participe au groupe Partage lors de l\'exposition à l\'Institut Francais de Maurice en avril 2017.','https://i.postimg.cc/g2P2xfQX/2-Deepa-Bauhadoor.jpg'),(3,'Mahefa Dimbiniaina Randrianarivelo','Mahefa Dimbiniaina Randrianarivelo, né à Antananarivo en 1991, est un photographe surréaliste Malagasy. Commençant par le graphic design et le digital painting, il choisit d\'approfondir la photographie pour s\'exprimer. Inspiré par les grands noms du surréalisme : René Magritte, Claude Cahun, Man Ray, plus récemment, Erik Johansson ou Grégory Crewdson, sa principale source d\'inspiration reste le cinéaste Wes Anderson. En 2022, il est le lauréat du prix Paritana, prix d\'art contemporain malagasy et effectue ainsi une résidence de création d\'une durée de trois mois à la Cité Internationale des Arts à Paris.','https://i.postimg.cc/kGpwjNrz/3-Mahefa-Dimbiniaina-Randrianarivelo.jpg'),(4,'Mathilde Neri','Née en 1982 à Noyon (France), Mathilde Neri est une artiste visuelle du monde hybride et outsider qui œuvre également dans le champ de la performance. Neri explore les dimensions de réalité qui émanent de la rencontre avec le signe dans la nature, avec lequel elle entre en connexion par le médium. Elle vit et travaille à La Réunion.','https://i.postimg.cc/sgcwBGKk/4-Mathilde-Neri.jpg') On DUPLICATE KEY UPDATE `id` = VALUES(`id`), `name` = VALUES(`name`), `description` = VALUES(`description`), `image` = VALUES(`image`);
/*!40000 ALTER TABLE `artist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artwork`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE if not exists `artwork` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  `dimension` varchar(100) DEFAULT NULL,
  `creation_place` varchar(255) DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artwork`
--

LOCK TABLES `artwork` WRITE;
/*!40000 ALTER TABLE `artwork` DISABLE KEYS */;
INSERT INTO `artwork` VALUES (1,'Tirem nos tudo mas deixem nos a música...','https://i.postimg.cc/XJ1h3qYd/1-Tirem-Nos-Tudo-Mas-Deixem-Nosamusica-Quandoeu-Nasci-Era-Meio-Diaeo-Sol-Brillava-regressaremos-Sombrias-Corp.jpg','','',1),(2,'Sementes e imagens','https://i.postimg.cc/qqX1q7k1/2-Sementes-EImagens.jpg','','',1),(3,'Quando eu nasci era...','https://i.postimg.cc/g0VXfL4t/3-Quando-Eu-Nasci-Era.jpg','','',1),(4,'... era meio dia','https://i.postimg.cc/x8zS4M3c/4-Era-Meio-Dia.jpg','','',1),(5,'... e o sol','https://i.postimg.cc/VLz8RrbL/5-EOSol.jpg','','',1),(6,'Brède chouchou','https://i.postimg.cc/HnZBXhyM/6-Brede-Chouchou.jpg','1200 x 1600','Maurice',2),(7,'Brède rave','https://i.postimg.cc/x8zc3kkP/7-Brede-Rave.jpg','1200 x 1600','Maurice',2),(8,'Brède tompouce canvas','https://i.postimg.cc/bN0xtv7h/8-Brede-Tompouce-Canvas.jpg','1158 X 1600','Maurice',2),(9,'Brède tompouce papier','https://i.postimg.cc/3w2YKPyn/9-Brede-Tompouce-Papier.jpg','1158 X 1600','Maurice',2),(10,'Brède songe','https://i.postimg.cc/HkZBrxML/10-Brede-Songe.jpg','4032 x 2172','Maurice',2),(11,'Analakely, Antananarivo','https://i.postimg.cc/DZqN4hFY/11-Analakely-Antananarivo.jpg','4613 x 4613','Madagascar',3),(12,'Ancienne banque de Madagascar et des Comores, Toamasina','https://i.postimg.cc/tRkrK2gP/12-Ancienne-Banque-De-Madagascar-Et-Des-Comores-Toamasina.jpg','','Madagascar',3),(13,'Cathédrale , Antsirabe','https://i.postimg.cc/HxjBg7km/13-Cath-drale-Antsirabe.jpg','4771 x 4771','Madagascar',3),(14,'Cathédrale Andohalo, Antananarivo','https://i.postimg.cc/hvBz0HwY/14-Cathedrale-Andohalo-Antananarivo.jpg','','Madagascar',3),(15,'Gare d\'Antananarivo','https://i.postimg.cc/jj6r7mH2/15-Gare-DAntananarivo.jpg','6906 x 6906','Madagascar',3),(16,'Il ne reste plus que...','https://i.postimg.cc/HxRDDmHS/16-Il-Ne-Reste-Plus-Que.jpg','','Réunion',4),(17,'... réalité fantomatique','https://i.postimg.cc/4xN85MRn/17-Realite-Fantomatique.jpg','','Réunion',4),(18,'Semis du riz. Métamorphosés... sublimés','https://i.postimg.cc/HLMb44nV/18-Semis-Du-Riz-Metamorphoses-sublimes.jpg','','Réunion',4),(19,'... une vertue intrinsèque l\'est au corps','https://i.postimg.cc/HxH8wqFh/19-Une-Vertue-Intrinseque-lest-Au-Corps.jpg','','Réunion',4),(20,'Loading drums of alcohol... rêves','https://i.postimg.cc/P5sXvmg6/20-Loading-Drums-Of-Alcohol-Reves.jpg','','Réunion',4)
On DUPLICATE KEY UPDATE `id` = VALUES(`id`), `title` = VALUES(`title`), `image` = VALUES(`image`), `dimension` = VALUES(`dimension`), `creation_place` = VALUES(`creation_place`), `artist_id` = VALUES(`artist_id`);
/*!40000 ALTER TABLE `artwork` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artwork_users`
--


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE if not exists `artwork_users` (
  
  `users_id` int NOT NULL,
  `artwork_id` int NOT NULL,
  `artist_id` int NOT NULL,
  `artist_name` varchar(255) NOT NULL,
  `artwork_title` varchar(200) NOT NULL,
  `artwork_image` varchar(500) NOT NULL,
  KEY `fk_artwork_users_artwork` (`artwork_id`),
  KEY `fk_artwork_users_artist` (`artist_id`),
  CONSTRAINT `fk_artwork_users_artist` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`id`),
  CONSTRAINT `fk_artwork_users_artwork` FOREIGN KEY (`artwork_id`) REFERENCES `artwork` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artwork_users`
--

LOCK TABLES `artwork_users` WRITE;
/*!40000 ALTER TABLE `artwork_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `artwork_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `upload`
--


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE if not exists `upload` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `url` (`url`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upload`
--

LOCK TABLES `upload` WRITE;
/*!40000 ALTER TABLE `upload` DISABLE KEYS */;
/*!40000 ALTER TABLE `upload` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE if not exists `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` tinyint(1) DEFAULT '0',
  `secret_question` varchar(255) DEFAULT NULL,
  `secret_answer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ben et nuts','noit','ben.noit@test.fr','1234',1,'Quelle était la couleur du cheval blanc d\'Henri IV ?','Blanc'),(2,'Nel','ia','nel.ia@test.fr','3456',1,'Que dit un papier quand il tombe dans l\'eau ?','J\'ai pas pied'),(3,'florian','BRUN','azerty@hotmail.fr','1234',1,'Tu as trois poussins sur une table et tu n\'en veux que deux, que fais-tu ?','T\'en pousses un') ON DUPLICATE KEY UPDATE  `id` = VALUES(`id`), `firstname` = VALUES(`firstname`), `lastname` = VALUES(`lastname`), `email` = VALUES(`email`), `password` = VALUES(`password`), `is_admin` = VALUES(`is_admin`), `secret_question` = VALUES(`secret_question`), `secret_answer` = VALUES(`secret_answer`);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'afac_express'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-29 16:16:20

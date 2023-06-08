-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 07, 2023 at 07:15 PM
-- Server version: 8.0.33-0ubuntu0.22.04.2
-- PHP Version: 8.1.2-1ubuntu2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `control_escolar`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_login` (IN `p_name_user` VARCHAR(100), IN `p_email` VARCHAR(100), IN `p_password` VARCHAR(100), IN `p_confirm_password` VARCHAR(100))  BEGIN
    INSERT INTO `login`(
        `name_user`,
        `email`,
        `password`,
        `confirm_password`
    )
    VALUES(
        p_name_user,
        p_email,
        p_password,
        p_confirm_password
    );
    
    SELECT 'Tarea realizada' AS message;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ObtenerAspirante` (IN `id_login` INT)  BEGIN
    SELECT *
    FROM login
    INNER JOIN aspirante ON login.id_login = aspirante.id_login
    INNER JOIN carrear_silicitada ON login.id_login = carrear_silicitada.id_login
    INNER JOIN datos_aspirante ON login.id_login = datos_aspirante.id_login
    INNER JOIN domicilio ON login.id_login = domicilio.id_login
    INNER JOIN ingresos_economicos ON login.id_login = ingresos_economicos.id_login
    INNER JOIN Dependencia_economica ON login.id_login = Dependencia_economica.id_login
    INNER JOIN metodo_admision ON login.id_login = metodo_admision.id_login
    INNER JOIN egreso_preparatoria ON login.id_login = egreso_preparatoria.id_login
    INNER JOIN padres ON login.id_login = padres.id_login
    WHERE login.id_login = id_login;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `aspirante`
--

CREATE TABLE `aspirante` (
  `id_aspirante` int NOT NULL,
  `id_login` int NOT NULL,
  `apellido_paterno` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `apellido_materno` varchar(100) NOT NULL,
  `nombres` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sexo` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `curp` varchar(18) NOT NULL,
  `nacionalidad` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `estado_civil` varchar(100) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `aspirante`
--

INSERT INTO `aspirante` (`id_aspirante`, `id_login`, `apellido_paterno`, `apellido_materno`, `nombres`, `sexo`, `fecha_nacimiento`, `curp`, `nacionalidad`, `estado_civil`, `fecha_registro`) VALUES
(1, 1, 'rosas', 'garcia', 'alan', 'M', '1997-07-18', 'ROGA970718HMCSRL07', 'mexicana', 'soltero', '2023-06-05 22:41:20'),
(2, 3, 'rosas', 'garcia', 'alan', 'M', '1997-07-18', 'ROGA970718HMCSRL07', 'Mexico', 'soltero', '2023-06-06 15:28:36'),
(3, 3, 'rosas', 'garcia', 'alan', 'M', '1997-07-18', 'ROGA970718HMCSRL07', 'Mexico', 'soltero', '2023-06-06 15:42:12'),
(4, 4, 'nose', 'nose', 'miguel', 'M', '1997-12-07', 'ROGA970718HMCSRL07', 'Mexico', 'casado', '2023-06-07 16:13:37'),
(5, 5, 'Martinez', 'nose', 'gerardo', 'M', '1997-12-07', 'ROGA970718HMCSRL07', 'Mexico', 'soltero', '2023-06-07 20:58:22');

-- --------------------------------------------------------

--
-- Table structure for table `carrear_silicitada`
--

CREATE TABLE `carrear_silicitada` (
  `id_carrera_solicitada` int NOT NULL,
  `id_login` int NOT NULL,
  `opcion` varchar(5) NOT NULL,
  `carrera` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `turno` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `carrear_silicitada`
--

INSERT INTO `carrear_silicitada` (`id_carrera_solicitada`, `id_login`, `opcion`, `carrera`, `turno`) VALUES
(1, 1, '1', 'Ingeniería de Software', 'vespertino'),
(2, 3, '1', 'Ingenieria en Sistemas Computacionales', 'matutino'),
(3, 3, '2', 'Ingenieria en Informatica', 'vespertino'),
(4, 4, '1', 'Ingenieria en Sistemas Computacionales', 'matutino'),
(5, 4, '2', 'Ingenieria en Informatica', 'matutino'),
(6, 5, '1', 'Ingenieria en Sistemas Computacionales', 'vespertino'),
(7, 5, '2', 'Ingenieria Industrial', 'vespertino');

-- --------------------------------------------------------

--
-- Table structure for table `casa`
--

CREATE TABLE `casa` (
  `id_casa` int NOT NULL,
  `id_login` int NOT NULL,
  `tipo_casa` varchar(100) NOT NULL,
  `numero_cuartos` int NOT NULL,
  `numero_habitantes` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `casa`
--

INSERT INTO `casa` (`id_casa`, `id_login`, `tipo_casa`, `numero_cuartos`, `numero_habitantes`) VALUES
(1, 4, 'propia', 10, 7);

-- --------------------------------------------------------

--
-- Table structure for table `datos_aspirante`
--

CREATE TABLE `datos_aspirante` (
  `id_datos_aspirante` int NOT NULL,
  `id_login` int NOT NULL,
  `incapacidad` varchar(100) NOT NULL,
  `afrodecendiente` varchar(2) NOT NULL,
  `beca` varchar(100) NOT NULL,
  `indigena` varchar(100) NOT NULL,
  `dialecto` varchar(100) NOT NULL,
  `localidad` varchar(100) NOT NULL COMMENT 'urbano, urbano marginado, rural',
  `oportunidades` varchar(2) NOT NULL COMMENT 'programa oportunidades',
  `cohabitacion` varchar(100) NOT NULL COMMENT '¿con quien vives actialmente?'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `datos_aspirante`
--

INSERT INTO `datos_aspirante` (`id_datos_aspirante`, `id_login`, `incapacidad`, `afrodecendiente`, `beca`, `indigena`, `dialecto`, `localidad`, `oportunidades`, `cohabitacion`) VALUES
(1, 4, 'no cuento con discapacidad', 'no', 'no', 'no', 'no', 'urbana', 'no', 'padres'),
(2, 5, 'no tengo discapacidad', 'no', 'no', 'no', 'no', 'rural', 'no', 'padres');

-- --------------------------------------------------------

--
-- Table structure for table `Dependencia_economica`
--

CREATE TABLE `Dependencia_economica` (
  `id_dependencia_economica` int NOT NULL,
  `id_login` int NOT NULL,
  `dependencia_economica` varchar(100) NOT NULL,
  `numero_dependientes` int NOT NULL COMMENT '¿cuantas personas dependen de su principal?'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Dependencia_economica`
--

INSERT INTO `Dependencia_economica` (`id_dependencia_economica`, `id_login`, `dependencia_economica`, `numero_dependientes`) VALUES
(1, 4, 'Padre', 6);

-- --------------------------------------------------------

--
-- Table structure for table `domicilio`
--

CREATE TABLE `domicilio` (
  `id_domicilio` int NOT NULL,
  `id_login` int NOT NULL,
  `calle` varchar(100) NOT NULL,
  `numero_interior` varchar(50) NOT NULL,
  `numero_exterior` varchar(50) NOT NULL,
  `estado` varchar(100) NOT NULL,
  `municipio` varchar(100) NOT NULL,
  `codigo_postal` varchar(50) NOT NULL,
  `colonia_o_localidad` varchar(100) NOT NULL,
  `numero_telefonico` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `domicilio`
--

INSERT INTO `domicilio` (`id_domicilio`, `id_login`, `calle`, `numero_interior`, `numero_exterior`, `estado`, `municipio`, `codigo_postal`, `colonia_o_localidad`, `numero_telefonico`) VALUES
(1, 4, 'allende', '7', '7', 'mexico', 'juchitepec', '56860', 'la rosita', '5518667995'),
(2, 5, 'allende', '7', '7', 'mexico', 'juchitepec', '56860', 'la rosita', '5518667995');

-- --------------------------------------------------------

--
-- Table structure for table `egreso_preparatoria`
--

CREATE TABLE `egreso_preparatoria` (
  `id_preparatoria` int NOT NULL,
  `id_login` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `dependencia_financiamiento` varchar(100) NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  `estado` varchar(100) NOT NULL,
  `promedio_general` double NOT NULL,
  `año_egreso` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `egreso_preparatoria`
--

INSERT INTO `egreso_preparatoria` (`id_preparatoria`, `id_login`, `nombre`, `dependencia_financiamiento`, `ciudad`, `estado`, `promedio_general`, `año_egreso`) VALUES
(1, 1, 'epo 254', 'federal', 'Ciudad de México', 'Ciudad de México', 9.5, '2023-06-06'),
(2, 3, 'PREPARATORIA FEDERAL POR COOPERACIÓN', 'estatal', 'mexico', 'mexico', 70.5, '2018-07-18'),
(3, 4, 'PREPARATORIA FEDERAL POR COOPERACIÓN', 'estatal', 'mexico', 'mexico', 7.5, '2018-07-30'),
(4, 5, 'EPO 254 FENIX', 'federal', 'mexico', 'mexico', 85.5, '2018-12-20');

-- --------------------------------------------------------

--
-- Table structure for table `ingresos_economicos`
--

CREATE TABLE `ingresos_economicos` (
  `id_ingresos` int NOT NULL,
  `id_login` int NOT NULL,
  `familiar` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `monto` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ingresos_economicos`
--

INSERT INTO `ingresos_economicos` (`id_ingresos`, `id_login`, `familiar`, `monto`) VALUES
(1, 4, 'papa', 20000),
(2, 4, 'mamá', 15000),
(3, 4, 'hermano', 10000),
(4, 4, 'propio', 10000);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id_login` int NOT NULL,
  `name_user` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `confirm_password` varchar(100) NOT NULL,
  `role` enum('aspirante','estudiante','docente','administrador') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'aspirante'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id_login`, `name_user`, `email`, `password`, `confirm_password`, `role`) VALUES
(1, 'IngAlanRG', 'ingalanrosasgarcia@tesch.edu.mx', '$2a$07$ov1B3QDsIk7D49ZwUQ28hODYjB7Po9ZLQ3tK/VPOtn7jM2QG7pbeS', '$2a$07$ov1B3QDsIk7D49ZwUQ28hODYjB7Po9ZLQ3tK/VPOtn7jM2QG7pbeS', 'aspirante'),
(2, 'bryanRG', 'bryanRG@gmail.com', '$2a$07$D0/Bz8Z1rHYee8VqDoPlquAolYKJmSs8r6/Vb8bNH7V.WHsYVpe.a', '$2a$07$D0/Bz8Z1rHYee8VqDoPlquAolYKJmSs8r6/Vb8bNH7V.WHsYVpe.a', 'aspirante'),
(3, 'AlanING', 'alan_rg@tesch.edu.mx', '$2a$07$RhYQvyKz3sluSl8K/i7Wx.E60/vHLWZe3QW3DmzqnbVDNpomrJbLq', '$2a$07$RhYQvyKz3sluSl8K/i7Wx.E60/vHLWZe3QW3DmzqnbVDNpomrJbLq', 'aspirante'),
(4, 'chamoy', 'chamoy@gmail.com', '$2a$07$wGF1nsQ79n5QB5snPvOZ.eUAdQSxIhPrQpUdQz6x/B0JL1hrnOyFe', '$2a$07$wGF1nsQ79n5QB5snPvOZ.eUAdQSxIhPrQpUdQz6x/B0JL1hrnOyFe', 'aspirante'),
(5, 'gearMX', 'gerardo_mn@gmail.com', '$2a$07$SCsWCBaTE5Q/qi9flbXIp.p.ovKOcxKNlG0YeNGYguiNGas6wkPnq', '$2a$07$SCsWCBaTE5Q/qi9flbXIp.p.ovKOcxKNlG0YeNGYguiNGas6wkPnq', 'aspirante');

-- --------------------------------------------------------

--
-- Table structure for table `metodo_admision`
--

CREATE TABLE `metodo_admision` (
  `id_metodo_admision` int NOT NULL,
  `id_login` int NOT NULL,
  `modalidad` varchar(100) NOT NULL,
  `periodo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `metodo_admision`
--

INSERT INTO `metodo_admision` (`id_metodo_admision`, `id_login`, `modalidad`, `periodo`) VALUES
(1, 1, 'ceneval', '1'),
(2, 1, 'ceneval', '1'),
(3, 3, 'intermedio', '1'),
(4, 2, 'ceneval', '1'),
(5, 3, 'intermedio', '1'),
(6, 3, 'ceneval', '1'),
(7, 4, 'ceneval', '1'),
(8, 5, 'ceneval', '1');

-- --------------------------------------------------------

--
-- Table structure for table `padres`
--

CREATE TABLE `padres` (
  `id_padres` int NOT NULL,
  `id_login` int NOT NULL,
  `apellido_paterno` varchar(100) NOT NULL,
  `apellido_materno` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `progenitor` varchar(50) NOT NULL COMMENT 'padre, madre',
  `vive` varchar(2) NOT NULL,
  `nivel_estudios` varchar(100) NOT NULL,
  `ocupacion` varchar(100) NOT NULL,
  `telefono_emergencia` varchar(15) NOT NULL,
  `telefono_trabajo` varchar(15) NOT NULL,
  `lugar_trabajo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `padres`
--

INSERT INTO `padres` (`id_padres`, `id_login`, `apellido_paterno`, `apellido_materno`, `nombre`, `progenitor`, `vive`, `nivel_estudios`, `ocupacion`, `telefono_emergencia`, `telefono_trabajo`, `lugar_trabajo`) VALUES
(1, 4, 'rosas', 'garcia', 'Bryan', 'padre', 'si', 'preparatoria', 'campesino', '5518667995', '5518667995', ''),
(2, 5, 'rosas', 'rivera', 'ruben', 'padre', 'si', 'secundaria', 'campesino', '5518667995', '5518667994', ''),
(3, 5, 'rosas', 'garcia', 'rosario', 'madre', 'si', 'universidad', 'ama de casa', '5518667995', '5518667995', ''),
(4, 5, 'rosas', 'garcia', 'rosario', 'madre', 'si', 'universidad', 'ama de casa', '5518667995', '5518667995', '');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('0cZejhAwGChmZ-rSSEj28txXg2_B9YBj', 1686240968, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('0jWlG7VmEs_aRrjSDECTRPQIuV-aMCw6', 1686240828, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('0wM4ARm0-VnT8Fx59aQl-AduVFoFzLxX', 1686240882, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('6Jf-oi4fW3L-z6gU4EFH7fFGYW1svc-a', 1686257834, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('8uUHnos3hOOVuurEi3ja6OKNebR20I7Z', 1686258558, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('9aX20LpJWvHZoweeUNuE59pSwKzE-fDT', 1686242660, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('A9DkGU1KXqMdkcTnSvgzGYuIuP8E66Hb', 1686252751, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('BIdqZyItXB315V2w7wlkFkm1IQfotqvI', 1686258985, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('DXIizMMXM2FWqc4z9RWvD-UYL1PR99_4', 1686251826, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"id_login\":4}'),
('Gf7dUsdJfxqtVMG6kVstV3nCPAO0hxiz', 1686240680, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('IbCTnh9s08A-vm8IbDDq5Fe9DCTgnQQh', 1686242520, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('LVjpxpSq2p-acqpKDy9oEOz_wdf36vtH', 1686258456, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('Mp9E3SJwmdQrSEadKZHx0GFO33twxnRv', 1686240725, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('NVzS1QRFLROPU8G0BC9cQdTLJKtphK_y', 1686258053, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('O-l_ruYGtHZHYoXXJvm-zdvnkdaC_3pN', 1686257914, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('Q2r8zXVlFriVXBDkYLK8fPI2Xflq5PzK', 1686242742, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('R0A22nMFMjhJWSMPcc1WUu3JlApdqrUb', 1686240836, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('RM1RJW1RPczsCAYDzRDzEisi2cfOBMax', 1686269460, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('T_4LW30IXE7CAXJbhGctY5M0G_XGSrXB', 1686258246, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('Tl3Y02bkLZbCkVACpNgGjdfMNvAZZ_G-', 1686240760, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('VcdNfJvhM15b8XB1AmiDhLujP2vYiX5y', 1686240818, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('VrRmy86aEBIc8jiDShEzref1KspXz5Pr', 1686241220, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('XdSur8vkA6d77ODFY6t1gsUxIAhjLpec', 1686257866, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('YPbSVOa7U_aneGtnFZ-B-Pa-hFPtnx7x', 1686257924, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('Yrqse5bp4fMiKzeCb4WDKguQ8and9pvW', 1686258306, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('bXN6Nbx8tAFX3YnCpquVVBuwDcKJte1I', 1686240754, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('cPP3wDOywPDMAArJGtJUl9GInSEbTHX-', 1686242441, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('d3qz_yjDL8XbDjF9OnMfbkQJMrkdp08Q', 1686242281, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('ePDZCeenbCU9kJZLlP9z3nHnMYcv8lP3', 1686257902, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('sL06pJ26neR8AB_djv1mu7LvRShcBoOz', 1686269460, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"id_login\":5}'),
('v_di0wc3YqDaWtEX0i0QhpDSzaGrEDz5', 1686258456, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('y2nlJXryIx1CiY5NAkeWPu7_qGkGI2Ch', 1686240724, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('z7K5uSsxAN6tc_X8axGRt83zRbXamEDa', 1686258187, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('zjrPKOm98QzxWFDpPa4H2L4a3EQ76r6I', 1686257858, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aspirante`
--
ALTER TABLE `aspirante`
  ADD PRIMARY KEY (`id_aspirante`),
  ADD KEY `id_login` (`id_login`);

--
-- Indexes for table `carrear_silicitada`
--
ALTER TABLE `carrear_silicitada`
  ADD PRIMARY KEY (`id_carrera_solicitada`),
  ADD KEY `id_login` (`id_login`);

--
-- Indexes for table `casa`
--
ALTER TABLE `casa`
  ADD PRIMARY KEY (`id_casa`),
  ADD KEY `id_login` (`id_login`);

--
-- Indexes for table `datos_aspirante`
--
ALTER TABLE `datos_aspirante`
  ADD PRIMARY KEY (`id_datos_aspirante`),
  ADD KEY `id_login` (`id_login`);

--
-- Indexes for table `Dependencia_economica`
--
ALTER TABLE `Dependencia_economica`
  ADD PRIMARY KEY (`id_dependencia_economica`),
  ADD KEY `id_login` (`id_login`);

--
-- Indexes for table `domicilio`
--
ALTER TABLE `domicilio`
  ADD PRIMARY KEY (`id_domicilio`),
  ADD KEY `id_login` (`id_login`);

--
-- Indexes for table `egreso_preparatoria`
--
ALTER TABLE `egreso_preparatoria`
  ADD PRIMARY KEY (`id_preparatoria`),
  ADD KEY `id_login` (`id_login`);

--
-- Indexes for table `ingresos_economicos`
--
ALTER TABLE `ingresos_economicos`
  ADD PRIMARY KEY (`id_ingresos`),
  ADD KEY `id_login` (`id_login`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id_login`);

--
-- Indexes for table `metodo_admision`
--
ALTER TABLE `metodo_admision`
  ADD PRIMARY KEY (`id_metodo_admision`),
  ADD KEY `id_login` (`id_login`);

--
-- Indexes for table `padres`
--
ALTER TABLE `padres`
  ADD PRIMARY KEY (`id_padres`),
  ADD KEY `id_login` (`id_login`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aspirante`
--
ALTER TABLE `aspirante`
  MODIFY `id_aspirante` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `carrear_silicitada`
--
ALTER TABLE `carrear_silicitada`
  MODIFY `id_carrera_solicitada` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `casa`
--
ALTER TABLE `casa`
  MODIFY `id_casa` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `datos_aspirante`
--
ALTER TABLE `datos_aspirante`
  MODIFY `id_datos_aspirante` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Dependencia_economica`
--
ALTER TABLE `Dependencia_economica`
  MODIFY `id_dependencia_economica` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `domicilio`
--
ALTER TABLE `domicilio`
  MODIFY `id_domicilio` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `egreso_preparatoria`
--
ALTER TABLE `egreso_preparatoria`
  MODIFY `id_preparatoria` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ingresos_economicos`
--
ALTER TABLE `ingresos_economicos`
  MODIFY `id_ingresos` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id_login` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `metodo_admision`
--
ALTER TABLE `metodo_admision`
  MODIFY `id_metodo_admision` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `padres`
--
ALTER TABLE `padres`
  MODIFY `id_padres` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `aspirante`
--
ALTER TABLE `aspirante`
  ADD CONSTRAINT `aspirante_ibfk_1` FOREIGN KEY (`id_login`) REFERENCES `login` (`id_login`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `carrear_silicitada`
--
ALTER TABLE `carrear_silicitada`
  ADD CONSTRAINT `carrear_silicitada_ibfk_1` FOREIGN KEY (`id_login`) REFERENCES `login` (`id_login`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `casa`
--
ALTER TABLE `casa`
  ADD CONSTRAINT `casa_ibfk_1` FOREIGN KEY (`id_login`) REFERENCES `login` (`id_login`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `datos_aspirante`
--
ALTER TABLE `datos_aspirante`
  ADD CONSTRAINT `datos_aspirante_ibfk_1` FOREIGN KEY (`id_login`) REFERENCES `login` (`id_login`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Dependencia_economica`
--
ALTER TABLE `Dependencia_economica`
  ADD CONSTRAINT `Dependencia_economica_ibfk_1` FOREIGN KEY (`id_login`) REFERENCES `login` (`id_login`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `domicilio`
--
ALTER TABLE `domicilio`
  ADD CONSTRAINT `domicilio_ibfk_1` FOREIGN KEY (`id_login`) REFERENCES `login` (`id_login`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `egreso_preparatoria`
--
ALTER TABLE `egreso_preparatoria`
  ADD CONSTRAINT `egreso_preparatoria_ibfk_1` FOREIGN KEY (`id_login`) REFERENCES `login` (`id_login`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ingresos_economicos`
--
ALTER TABLE `ingresos_economicos`
  ADD CONSTRAINT `ingresos_economicos_ibfk_1` FOREIGN KEY (`id_login`) REFERENCES `login` (`id_login`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `metodo_admision`
--
ALTER TABLE `metodo_admision`
  ADD CONSTRAINT `metodo_admision_ibfk_1` FOREIGN KEY (`id_login`) REFERENCES `login` (`id_login`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `padres`
--
ALTER TABLE `padres`
  ADD CONSTRAINT `padres_ibfk_1` FOREIGN KEY (`id_login`) REFERENCES `login` (`id_login`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- DROP DATABASE IF EXISTS `infocons_realestate`;
-- CREATE DATABASE `infocons_realestate`;
-- USE `infocons_realestate`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`(
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(50)not null,
  lastname VARCHAR(50)not null,
  sex VARCHAR(10)not null,
  dob DATETIME not null,
  phone VARCHAR(15),
  email VARCHAR(50)not null,
  password VARCHAR(65)not null,
  avatar VARCHAR(50)not null,
  role VARCHAR(20)not null,
  created int(11)not null
);

-- DROP TABLE IF EXISTS `owner`;
-- CREATE TABLE `owner`(
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   firstname VARCHAR(50)not null,
--   lastname VARCHAR(50)not null,
--   email VARCHAR(50)not null,
--   phone VARCHAR(15)not null,
--   address VARCHAR(50)not null,
--   bio TEXT not null,
--   created INT(11)not null
-- );

-- DROP TABLE IF EXISTS `client`;
-- CREATE TABLE `client`(
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   firstname VARCHAR(50)not null,
--   lastname VARCHAR(50)not null,
--   email VARCHAR(50)not null,
--   phone VARCHAR(15)not null,
--   address VARCHAR(50)not nullUsername: infocons
-- Password: 49VD1r6tpr
-- );


DROP TABLE IF EXISTS `property`;
CREATE TABLE `property`(
  id INT AUTO_INCREMENT PRIMARY KEY,
  owner_id INT(11) not null,
  type VARCHAR(30) not null,
  price INT(50)not null,
  location VARCHAR(50)not null,
  category VARCHAR(50)not null,
  address VARCHAR(50) not null,
  description VARCHAR(50) not null,
  thumbnail VARCHAR(50) not null DEFAULT 'default.png',
  available INT(2) not null DEFAULT 0,
  created INT(11)not null
);

DROP TABLE IF EXISTS `maintanance`;
CREATE TABLE `maintanance`(
  id INT AUTO_INCREMENT PRIMARY KEY,
  property_id INT(11) not null,
  start_date INT(11) not null,
  end_date INT(11) not null
);

DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking`(
  id INT AUTO_INCREMENT PRIMARY KEY,
  client_id INT(11) not null,
  property_id INT(11) not null,
  owner_id INT(11) not null,
  created INT(11) not null
);

DROP TABLE IF EXISTS `contract`;
CREATE TABLE `contract`(
  id INT AUTO_INCREMENT PRIMARY KEY,
  client_id INT(11) not null,
  owner_id INT(11) not null,
  property_id INT(11) not null,
  start_date INT(11) not null,
  end_date INT(11) not null
);

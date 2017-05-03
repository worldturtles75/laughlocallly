-- CREATE DATABASE laughlocally;

USE laughlocally;

DROP TABLE IF EXISTS audience;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS venues;
DROP TABLE IF EXISTS comedians;
DROP TABLE IF EXISTS hosts;

CREATE TABLE `audience` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  `email` VARCHAR(255),
  `phone` VARCHAR(255),
  `id_events` INTEGER,
  PRIMARY KEY (`id`)
);

CREATE TABLE `events` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  `id_comedians` INTEGER NOT NULL,
  `date` DATE NOT NULL,
  `id_venues` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `venues` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `dates_avaliable` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `photoURL` VARCHAR(255) NOT NULL,
  `id_hosts` INTEGER ,
  `zipcode` INTEGER(5),
  PRIMARY KEY (`id`)
);


CREATE TABLE `comedians` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `bio` VARCHAR(255) NOT NULL,
  `photoURL` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `website` VARCHAR(255) NOT NULL,
  `twitter` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `hosts` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ALTER TABLE `audience` ADD FOREIGN KEY (id_events) REFERENCES `events` (`id`);
-- ALTER TABLE `events` ADD FOREIGN KEY (id_venues) REFERENCES `venues` (`id`);
-- ALTER TABLE `events` ADD FOREIGN KEY (id_comedians) REFERENCES `comedians` (`id`);
-- ALTER TABLE `venues` ADD FOREIGN KEY (id_hosts) REFERENCES `hosts` (`id`);


-- Step 1) Load file to mysql from inside directory
--   mysql -u root < database/schema.sql
-- Step 2) Open mysql (no password for root)
--   mysql -u root -p


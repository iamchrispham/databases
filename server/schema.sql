
USE chat;

DROP TABLE IF EXISTS `messages`;

CREATE DATABASE IF NOT EXISTS chat;


CREATE TABLE `messages` (
    user_id INT AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    message VARCHAR(255) '',
    roomname VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);



-- CREATE TABLE rooms (
--     room_id INT NOT NULL AUTO_INCREMENT,
--     roomname VARCHAR(255) NOT NULL,
--     PRIMARY KEY (room_id),
--     FOREIGN KEY (roomname)
-- );

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/


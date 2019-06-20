-- DROP TABLE IF EXISTS messages;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
    username INT AUTO_INCREMENT,
    user_id VARCHAR(255) NOT NULL,
    message_text VARCHAR(255) NOT NULL,
    room VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);


/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


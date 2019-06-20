CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
    message_id INT AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    message_text VARCHAR(255) NOT NULL,
    room VARCHAR(255) NOT NULL,
    PRIMARY KEY (message_id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


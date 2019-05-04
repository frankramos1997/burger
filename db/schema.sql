CREATE DATABASE burgers_db;


USE burgers_db;

CREATE TABLE burgers (
    id int (15) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (50) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

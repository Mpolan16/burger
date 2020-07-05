### Schema
DROP DATABASE IF EXISTS cch02o3kguipd85y;
CREATE DATABASE cch02o3kguipd85y;
USE cch02o3kguipd85y;

CREATE TABLE burgers
(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name varchar(200) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
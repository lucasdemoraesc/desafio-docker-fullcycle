CREATE DATABASE IF NOT EXISTS nodedb;
USE nodedb;

CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
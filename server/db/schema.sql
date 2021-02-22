-- SQL Schema
-- quantity, id, type_dono, sprinkles?, price

DROP DATABASE if exists donutshop;

CREATE DATABASE donutshop;

USE donutshop;

CREATE TABLE if not exists donuts (id INT NOT NULL AUTO_INCREMENT, quantity INT NOT NULL, type_donut VARCHAR(50) NOT NULL, sprinkles BIT, price FLOAT NOT NULL, PRIMARY KEY (id));

INSERT INTO donuts(quantity, type_donut, sprinkles, price) values(10, 'jelly', 1, 1.20);

-- to test: insert donut

-- SQL Schema
-- quantity, id, type_dono, sprinkles?, price

DROP DATABASE if exists donutshop;

CREATE DATABASE donutshop;

USE donutshop;

CREATE TABLE if not exists donuts (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  quantity INT NOT NULL,
  type_donut VARCHAR(50) NOT NULL,
  sprinkles BOOLEAN,
  price FLOAT(6, 2) NOT NULL
);

INSERT INTO donuts(quantity, type_donut, sprinkles, price) values(10, 'jelly', true, 1.20);
INSERT INTO donuts(quantity, type_donut, sprinkles, price) values(150, 'glazed', false, 1.19);
INSERT INTO donuts(quantity, type_donut, sprinkles, price) values(1, 'golden', 1, 1000.01);

-- to test: insert donut

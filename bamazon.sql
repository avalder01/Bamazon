DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50),
  department_name VARCHAR(35),
  price DECIMAL(15,2),
  stock_quantity INT,
  PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Nintendo Switch', 'Video Games', 299, 50),
	   ('Sweeny Todd', 'Movies & TV', 13.99, 10),
       ('Google Home Hub', 'Electronics', 129, 50),
       ('Red Dead Redemption 2', 'Video Games', 59.99, 15),
       ('Jurrasic Park Box Set', 'Movies & TV', 42.99, 5),
       ('Corkcicle Mug', 'Home & Kitchen', 24.99, 20),
       ('Tranquil Weighted Blanket', 'Home & Kitchen', 79.99, 10),
       ('Harry Potter Box Set', 'Books', 52.16, 100),
       ('Cards Against Humanity', 'Toys & Games', 25, 100),
       ('Sushi Cat Costume', 'Pet Supplies', 9.29, 5);
		
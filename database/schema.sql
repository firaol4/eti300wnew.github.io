CREATE DATABASE IF NOT EXISTS zillowlab;
USE zillowlab;

DROP TABLE IF EXISTS homes;

CREATE TABLE homes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state CHAR(2) NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    beds INT NOT NULL,
    baths DECIMAL(3,1) NOT NULL
);

INSERT INTO homes (address, city, state, zip_code, price, beds, baths) VALUES
('201 College Ave', 'State College', 'PA', '16801', 425000.00, 3, 2.0),
('315 W Beaver Ave', 'State College', 'PA', '16801', 389000.00, 2, 2.0),
('1200 E College Ave', 'State College', 'PA', '16801', 515000.00, 4, 3.0),
('1450 Martin St', 'State College', 'PA', '16803', 342500.00, 3, 2.5),
('2200 N Atherton St', 'State College', 'PA', '16803', 468000.00, 4, 2.5);

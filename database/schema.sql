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
('1811 E Branch Rd', 'State College', 'PA', '16801', 329900.00, 3, 2.0),
('221 Ellen Ave', 'State College', 'PA', '16801', 399000.00, 4, 2.0),
('2278 Spruce Dr', 'State College', 'PA', '16801', 409000.00, 3, 3.0),
('327 Fry Dr', 'State College', 'PA', '16801', 479000.00, 3, 2.0),
('234 W Fairmount Ave', 'State College', 'PA', '16801', 2585000.00, 8, 9.0),
('126 W South Hills Ave', 'State College', 'PA', '16801', 199900.00, 2, 2.0),
('2107 Circleville Rd', 'State College', 'PA', '16803', 394000.00, 4, 3.0),
('576 E Shadow Ln', 'State College', 'PA', '16803', 873900.00, 4, 4.0),
('403 Keller St', 'State College', 'PA', '16801', 235000.00, 3, 2.0),
('316 Homan Ave', 'State College', 'PA', '16801', 650000.00, 3, 3.0),
('422 Martin Ter', 'State College', 'PA', '16803', 458000.00, 3, 2.0),
('620 Fawn Valley Rd', 'State College', 'PA', '16803', 465000.00, 4, 3.0);

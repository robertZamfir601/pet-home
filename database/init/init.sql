CREATE TABLE Races (
   id INT,
   name VARCHAR(100) NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE Subraces (
   id INT,
   name VARCHAR(100) NOT NULL,
   description VARCHAR(1000),
   recommandations VARCHAR(1000),
   race_id INT,

   PRIMARY KEY(id),
   CONSTRAINT FK_SubracesRaces FOREIGN KEY (race_id) REFERENCES Races(id)
);

CREATE TABLE Pets (
   id INT,
   name VARCHAR(100) NOT NULL,
   date_of_birth DATE NOT NULL,
   subrace_id INT,
   description VARCHAR(1000),
   photo_url VARCHAR(500) NOT NULL,
   history VARCHAR(1000),
   price INT, 
   adopted BOOLEAN DEFAULT FALSE,

   PRIMARY KEY(id),
   CONSTRAINT FK_PetsSubraces FOREIGN KEY (subrace_id) REFERENCES Subraces(id)
);

CREATE TABLE Users (
   id INT,
   email VARCHAR(100) NOT NULL,
   password VARCHAR(1000) NOT NULL,
   username VARCHAR(100) NOT NULL,
   photo_url VARCHAR(500) NOT NULL,

   PRIMARY KEY(id)
);

CREATE TABLE Reviews (
   id INT,
   text VARCHAR(100) NOT NULL,
   rating FLOAT(10),
   user_id INT,

   PRIMARY KEY(id),
   CONSTRAINT FK_ReviewsUsers FOREIGN KEY (user_id) REFERENCES Users(id)
);



CREATE TABLE Adoptions (
   id INT,
   date TIMESTAMP,
   billing_addres VARCHAR(200),
   user_id INT,
   pet_id INT,

   PRIMARY KEY(id),
   CONSTRAINT FK_AdoptionsUsers FOREIGN KEY (user_id) REFERENCES Users(id),
   CONSTRAINT FK_AdoptionsPets FOREIGN KEY (pet_id) REFERENCES Pets(id)
);


CREATE TABLE Orders (
   id INT,
   billing_addres VARCHAR(200),
   shipping FLOAT(10),
   date DATE NOT NULL,
   user_id INT,

   PRIMARY KEY(id),
   CONSTRAINT FK_ReviewsUsers FOREIGN KEY (user_id) REFERENCES Users(id)
);


CREATE TABLE Products (
   id INT,
   name VARCHAR(200),
   description VARCHAR(1000),
   price FLOAT(10),
   quantity FLOAT(10),

   PRIMARY KEY(id)
);


CREATE TABLE Order_Product (
   id INT,
   order_id INT,
   product_id INT,
   amount FLOAT(10),

   PRIMARY KEY(id),
   CONSTRAINT FK_OrderProductOrders FOREIGN KEY (order_id) REFERENCES Orders(id),
   CONSTRAINT FK_OrderProductProducts FOREIGN KEY (product_id) REFERENCES Products(id)
);

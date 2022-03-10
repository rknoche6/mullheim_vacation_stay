CREATE DATABASE mullheim_vacation;
CREATE DATABASE mullheim_vacation_test;

CREATE TABLE reviews(
  reviews_id SERIAL PRIMARY KEY,
  description VARCHAR(500)
);

CREATE TABLE messages(
  massage_id SERIAL PRIMARY KEY,
  description VARCHAR(500)
);

CREATE TABLE users
(
  user_id SERIAL Primary Key,
  email varchar(255) ,
  username varchar(255) ,
  password varchar(255),
  UNIQUE (email),
  UNIQUE(username)
);

ALTER TABLE reviews
ADD COLUMN user_fk_id INTEGER;

ALTER TABLE messages
ADD COLUMN user_fk_id INTEGER;


ALTER TABLE reviews
ADD CONSTRAINT constraint_fk FOREIGN KEY (user_fk_id) REFERENCES Users
(user_id)
ON
DELETE CASCADE;

ALTER TABLE messages
ADD CONSTRAINT constraint_fk FOREIGN KEY (user_fk_id) REFERENCES Users
(user_id)
ON
DELETE CASCADE;
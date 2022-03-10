CREATE DATABASE mullheim_rental;
CREATE DATABASE mullheim_rental_test;

CREATE TABLE posts(
  post_id SERIAL PRIMARY KEY,
  description VARCHAR(500)
);

CREATE TABLE Users
(
  user_id SERIAL Primary Key,
  email varchar(255) ,
  username varchar(255) ,
  password varchar(255),
  UNIQUE (email),
  UNIQUE(username)
);

ALTER TABLE posts
ADD COLUMN user_fk_id INTEGER;

ALTER TABLE posts
ADD CONSTRAINT constraint_fk FOREIGN KEY (user_fk_id) REFERENCES Users
(user_id)
ON
DELETE CASCADE;
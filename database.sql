CREATE DATABASE jwtauth;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    user_password TEXT NOT NULL
);

SELECT * FROM users;

INSERT INTO users (username, email, user_password) VALUES (
    'Adam',
    'adam@mail.com',
    'adam123'
);

INSERT INTO users (username, email, user_password) VALUES (
    'Adam',
    'adam@mail.com',
    'adam123'
);
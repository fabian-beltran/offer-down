CREATE DATABASE offerdown;

CREATE TABLE "user"(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE
);


CREATE TYPE exchange_method AS ENUM ('pickup', 'delivery');
CREATE TYPE condition AS ENUM ('new', 'used', 'openbox');

CREATE TABLE item(
    id SERIAL PRIMARY KEY,
    seller_id INT NOT NULL REFERENCES "user" (id),
    title VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    condition condition NOT NULL,
    "description" VARCHAR(255),
    exchange_method exchange_method NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE
);
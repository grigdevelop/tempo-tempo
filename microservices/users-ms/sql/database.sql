DROP TABLE IF EXISTS users_ms.users;
DROP TABLE IF EXISTS users_ms.roles;

DROP SCHEMA IF EXISTS users_ms CASCADE;

CREATE SCHEMA users_ms;

CREATE TABLE users_ms.users (
    id serial constraint users_pk primary key,
    username text
);

CREATE TABLE users_ms.roles (
    id int constraint roles_pk primary key,
    name text
);

INSERT INTO users_ms.roles(id, name)
VALUES (1, 'admin'), (2, 'user');

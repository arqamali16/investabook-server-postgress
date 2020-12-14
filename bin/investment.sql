CREATE TABLE users(
    id serial,
    name character varying(50),
    email character varying(50),
    password character varying(50)
);

INSERT INTO users(name,email,password)
VALUES
('Arqam Ali','arqamali@gmail.com','arqamali123');
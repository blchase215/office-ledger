DROP DATABASE IF EXISTS musicStore_db;
CREATE DATABASE musicStore_db;

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    FOREIGN KEY(role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL,
    FOREIGN KEY(manager_id)
    REFERENCES manager(id)
    ON DELETE SET NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    FOREIGN KEY(department_id)
    REFERENCES department(id)
    ON DELETE SET NULL,
    salary DECIMAL(5,2),
    PRIMARY KEY (id)
);

CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);


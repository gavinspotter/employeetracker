
create database employeetracker;

use employeetracker;

CREATE TABLE department (
    id int primary key,
    name varchar(30)
);

create TABLE role (
    id int primary key,
    title varchar(30),
    salary decimal,
    department_id int
);

create TABLE employee (
    id int primary key,
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    manager_id int
)

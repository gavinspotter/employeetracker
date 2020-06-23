
drop database if exists employeetracker

create database employeetracker

use employeetracker

create table employee(
    first_name varchar(30)
    last_name varchar(30)
    role_id int 
    manager_id int
)


create table role (
    title varchar(30)
    salary decimal
    department_id int
)

create table department (
    name varchar(30)
)


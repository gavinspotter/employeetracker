inside of our db index.js is going to be all of our database calls. we can establish these by creating a class. we require our connection.js at the top of the file. we are going to need multiple database querys like - 

# findEmployees - SELECT 
# findManagers - SELECT
# createEmployee - INSERT INTO
# removeEmployee - DELETE FROM
# updateEmployeeRole - UPDATE
# updateEmployeeManager - UPDATE
# findRoles - SELECT
# createRole - INSERT INTO
# removeRole - DELETE FROM
# findDepartments - SELECT
# createDepartment - SELECT

we would select department table and its data through department.id.
we would select the role table and its data through role.id role.title role.salary role.department_id
we would select the employee table and its data through employee.id employee.first_name employee.last_name employee.role_id employee.manager_id

for exmaple: 

# findDepartments would be select department.id, department.name

then finally were going to export the glass with database calls in the constructor 
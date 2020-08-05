* dependencies *

were going to require three things two are dependencies

 the two dependencies are 

  # inquirer 
  # console.table

  the third thing is

  #("./db")


  we are going to write a list of prompts asking the user what they would like to do in the app from viewing the employees to viewing departments

 we are going to have the following inquirer prompts

 # view employees
 # view employees by departments
 # view employees by manager
 # add employee 
 # remove employee 
 # update employee role 
 # update employee manager 
 # view employee roles 
 # add role 
 # remove role
 # view departments 
 # add department 
 # remove department 
 # exit 

 we are going to use an async/await function to call the prompt and finally an if than statement 

 the if than statement is going to look like this 

 if (choice.viewEmployees) {
      and then we are going to return a function 
 } else if (choice.viewEmployeesByDepartments) 
  so on ...

 we can use object destructuring to access the value in the prompt
 
 next we are going to write all the functions that go inside the if statement that containt prompts themsevles. these functions are giong to contain  not only prompts but our database calls are going to be used in these functions. we are giong to to call many different functions. one function for each of our choices and each choice is going to be interacting with the database.   
 
 

 
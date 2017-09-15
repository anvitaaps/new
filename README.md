Setup development environment 
1. install node js (https://nodejs.org/en/)
2. create folder
3. using cmd go to that folder
4. Add dependencies: express, mongodb, body-parser
   npm install --save express mongodb body-parser mongojs
5. npm init (create package.json)
6. (optional)
   npm install -g nodemon (need not to restart server, nodemon automatically             

                start node application)
7. download mongo db (https://www.mongodb.com/)
8. cmd: cd mongo/bin
        mongod  (run mongoDB server at 27017 port)
9. open new cmd window: cd mongo/bin
                        mongo  (create client and establish connection to server)
10. use dbname (create new database and switch to that database)
11. Insert data in employees table of db employeeDetails: 
    db.employees.insert([{"EmployeeName":"Ankur Verma","Designation":"Mobile 

Developer","Project":"OUP","Skills":"Xamarin"}])
12. To get the data from collection: 
    db.employees.find().pretty()


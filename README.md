Clinic Administrative System

This application describes the administrative system of a clinic. Users can log in as a doctor, receptionist, or admin.

When a person calls the clinic, the receptionist answers and enters the person's details, issues, and information into the system. The receptionist selects an available doctor and the city where the doctor will be located. When the doctor logs in, they can view their completed and currently active appointments. The admin has the ability to create new users and new cities, as well as access all appointment and user information.

Database for this application is created locally so to run application, you need to install mongodb, then insert this in mongodb shell:

use FullApp

db.users.insert({first_name:"admin",last_name:"admin",password:"admin",role:"admin"})
db.users.insert({first_name:"doctor",last_name:"doctor",password:"doctor",role:"doctor"})
db.users.insert({first_name:"secretary",last_name:"secretary",password:"secretary",role:"secretary"})

To run application navigate to project in terminal and type "npm i" to install packages.
Then type "node server" and app will be started on localhost:3000.

Userpass for all users:


Username: admin
Password: admin

Username: secretary
Password: secretary

Username: doctor
Password: doctor


Email: josipkordic00@gmail.com

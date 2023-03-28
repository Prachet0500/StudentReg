# StudentReg

REST APIs for a student registration website with the following features.

1)Anyone can access the post API for a student and register as student here certain fields like name , age , email , password , college, majors are required and email has to be unique and the college has to exist in the college database , also the majors enetered have to be present in that college.
2)A student can only access the GET , PATCH , and DELETE requests for their own profile ie they can view , update and delete their own data only after they have logged in using their unique email and the password and receive a token after authentication. Also this token only lasts for 1 hour so they have to log in again after this time . 
3)Only students with Admin access can view , update and delete( GET, PATCH, DELETE) the data of any other student , they can also view data for all students at once and also view students by applying filters based on college , major, email, name using the GET request for all students . 
4)Only Admins can add and update (POST and PATCH) to the college database but other students can view all the colleges(GET) along with applying the various filters based on name, location and state . 

Tech Stack :
  Backend : 1)NodeJS
            2)ExpressJS
            3)MongoDB/noSQL
            4)mongoose ODM
            5)JWT

const express = require('express')
const authentication = express.Router();
// require("dotenv").config({ path: "../.env" })
const {findStudentByEmail}=require("../services/studentService");
const { isEmptyObject } = require('../utils/general');
const  {isPasswordCorrect, generateToken, verifyToken}  = require('../utils/auth');
authentication.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.key;
    const student = await findStudentByEmail(email) 
      if (student && !isEmptyObject(student)) {
        isPasswordCorrect(student.key, password).then((result) => {
          if (!result)
            res
              .status(401)
              .send({ message: "email or password is incorrect" });
          else {
            generateToken(null, email).then((token) => {
              res
                .status(200)
                .send({ email: student.email, role: student.role, token: token });
            });
          }
        });
      } else
        res.status(401).send({ message: "email or password is incorrect" });
    });  
  authentication.get("/logout", verifyToken, (req, res) => {
    res.status(200).send({ message: "Signed out" });
  });


  module.exports={authentication};


require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {findStudentByEmail}=require("../services/studentService");
const Constants = require("./constants");
const { catchError } = require("./catchError");

const encryptPassword=async  (password)=>{
  let hashed;
  const salt = await bcrypt.genSalt();
  hashed = await bcrypt.hash(password, salt);
  return hashed;
    }
const getEmailFromToken = (token) => jwt.decode(token)["sub"];

const getRoleFromToken = (token) => jwt.decode(token)["aud"];

const isPasswordCorrect = async (key, password)=> {
  return await bcrypt.compare(password, key).then((result) => result);
};

const generateToken = async  (prevToken, emailId) =>{
  const email = emailId || getEmailFromToken(prevToken);
  const student = await findStudentByEmail(email) 
  const options = {
    algorithm: process.env.ALGORITHM,
    expiresIn: process.env.EXPIRY,
    issuer: process.env.ISSUER,
    subject: email || student.email,
    audience:
      student.role === "Admin"
        ? "Admin"
        : "Member",
  };
  return jwt.sign({}, process.env.SECRET, options);
};

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization)
    res.status(401).send({ message: "Not authorized to access data" });
  else {
    const token = req.headers.authorization.split(" ")[1];
    if (!token)
      res.status(401).send({ message: "Not Authorized to access data" });
    else {
      jwt.verify(token, process.env.SECRET, function (err) {
        if (err) {
          res.status(401).send({ message: "Please login again" });
        } else next();
      });
    }
  }
};

module.exports={
  isPasswordCorrect,
  encryptPassword,
  getEmailFromToken,
  getRoleFromToken,
  generateToken,
  verifyToken
}
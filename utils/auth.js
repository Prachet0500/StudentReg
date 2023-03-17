const { findStudentByEmail } = require("../services/studentService");
require("dotenv").config({ path: "../.env" });
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Constants = require("./constants");
const { catchError } = require("./catchError");

exports.encryptPassword=async (password)=> {
  let hashed;
  await bcrypt.genSalt(10, async function (err, Salt) {
  
    // The bcrypt is used for encrypting password.
     await bcrypt.hash(password, Salt, function (err, hash) { 
        console.log(hash,"hash")
         hashed=hash;
      })})
      console.log(hashed)
      return hashed;
    }
exports.getEmailFromToken = (token) => jwt.decode(token)["sub"];

exports.getRoleFromToken = (token) => jwt.decode(token)["aud"];

exports.isPasswordCorrect = async function (key, password) {
  return await bcrypt.compare(password, key).then((result) => result);
};

exports.generateToken = async function (prevToken, emailId) {
  const email = emailId || getEmailFromToken(prevToken);
  const student = await findStudentByEmail(email).catch(e=>catchError(e));
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

exports.verifyToken = (req, res, next) => {
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
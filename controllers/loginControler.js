const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"]);
const bcrypt = require("bcrypt");

const loginControler = (req, res) => {
  let name = req.body.name;
  let pw = req.body.password;
  db.users.find(
    {
      first_name: name,
    },
    (err, docs) => {
      if (err) {
        console.log("greska");
        res.redirect("/");
      } else {
        let user = docs[0];
        bcrypt.compare(pw, user.password, function (err, result) {
          if (result) {
            req.session.user = user;
            if (user.role == "admin") {
              res.redirect("/admin");
            } else if (user.role == "secretary") {
              res.redirect("/secretary");
            } else if (user.role == "doctor") {
              res.redirect("/doctor");
            } else {
              res.redirect("/");
            }
          } else {
            res.redirect("/");
          }
        });
      }
    }
  );
};
module.exports = loginControler;

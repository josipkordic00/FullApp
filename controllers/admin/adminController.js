const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"], ["gradovi"], ["proizvodi"]);

//prikazivanje podataka iz baze na admindashboardu - adminDashboard()
const adminController = (req,res) => {
    let user = req.session.user;
    db.users.find({},(err,users)=>{
        db.proizvodi.find({}, (err,proizvodi)=>{
            db.gradovi.find({},(err,gradovi)=>{
                    let operateri = users.filter(user => user.role == "operater");
                    let savjetnici = users.filter(user => user.role == "savjetnik");



                res.render("admin/adminDashboard",{
                    name : user.first_name,
                    gradovi : gradovi,
                    proizvodi : proizvodi,
                    operateri : operateri,
                    savjetnici : savjetnici,
                    role: user.role
                })
            })
        })
    })
    
}

module.exports = adminController;
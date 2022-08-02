const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"], ["cities"], ["products"]);

//showing data from db on admin dashboard - adminDashboard()
const adminController = (req,res) => {
    let user = req.session.user;
    db.users.find({},(err,users)=>{
        db.products.find({}, (err,products)=>{
            db.cities.find({},(err,cities)=>{
                    let secretaries = users.filter(user => user.role == "secretary");
                    let doctors = users.filter(user => user.role == "doctor");



                res.render("admin/adminDashboard",{
                    name : user.first_name,
                    cities : cities,
                    products : products,
                    secretaries : secretaries,
                    doctors : doctors,
                    role: user.role
                })
            })
        })
    })
    
}

module.exports = adminController;
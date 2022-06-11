const mongojs = require("mongojs");
const db = mongojs("FullApp", ["termini"]);

//insert u bazu svih podataka iz termini forme
const noviTerminController = (req,res)=>{
    let user = req.session.user
    db.termini.insert({
        ime_stranke : req.body.ime_stranke,
        prezime_stranke : req.body.prezime_stranke,
        godiste_stranke : req.body.godiste_stranke,
        ime_supruznika : req.body.ime_supruznika,
        prezime_supruznika : req.body.prezime_supruznika,
        godiste_supruznika : req.body.godiste_supruznika,
        fiksni_telefon : req.body.fiksni_telefon,
        mobilni_telefon : req.body.mobilni_telefon,
        adresa : req.body.adresa,
        datum_zakazivanja : req.body.datum_zakazivanja,
        vrijeme_zakazivanja : req.body.vrijeme_zakazivanja,
        savjetnik : req.body.savjetnik,
        grad : req.body.grad,
        djeca : req.body.djeca,
        operacije : req.body.operacija,
        terapija : req.body.terapija,
        napomena : req.body.napomena,
        active : true,
        vrijednost_ugovora : 0,
        rezlog : "",
        ulaz : false,
        proizvod : "",
        operater : user.first_name + " " + user.last_name,
        role: user.role
    },(err,docs)=>{
        res.redirect("/operater")
    })
}

module.exports = noviTerminController;
var router = require("express").Router();
var path = require("path");

router.get("/", function(req, res){
    var auth = req.isAuthenticated();

    if(auth) {
        res.sendFile(path.join(__dirname, "/../../public/home.html"));
        console.log("auth")
    } else {
        res.sendFile(path.join(__dirname, "/../../public/login.html"));
        console.log("else")
    }

});

router.get('/index', function(req, res){
    var auth = req.isAuthenticated();
    if(auth) {
        res.sendFile(path.join(__dirname, "/../../public/index.html"));
    } else {
        res.redirect("/");
    }
})

module.exports = router;
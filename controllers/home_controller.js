module.exports.home = function(req, res){

    console.log(req.cookies);
    res.cookie('user_id',25);
    // return res.send('<h1> Express Is Up For Codial! </h1> ')
    return res.render('home',{
        title: "Home"
    });
}
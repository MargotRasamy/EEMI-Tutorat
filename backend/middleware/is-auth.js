module.exports = (req, res, next) => {
    console.log('hello')
    console.log("req.session.isLoggedIn in MIDDLEWARE",req.session.isLoggedIn)
    if (!req.session.isLoggedIn) {
        res.status(301).json({'data' : req.session.user });
        //return res.redirect('/login');
    }
    console.log('no session')
    next();
}
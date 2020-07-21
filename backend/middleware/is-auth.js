// const jwt = require('jsonwebtoken');
const jwt = require('express-jwt');
  // const token = req.cookies.token;
  // if (!token) {
  //   res.status(401).send('Unauthorized: No token provided');
  // } else {
  //   jwt.verify(token, secret, function(err, decoded) {
  //     if (err) {
  //       res.status(401).send('Unauthorized: Invalid token');
  //     } else {
  //       req.email = decoded.email;
  //       next();
  //     }
  //   });
  // }
const withAuth = () => { 
    app.use(
      jwt({
        secret: 'secret123',
        algorithms: ['HS256'],
        getToken: req => req.cookies.token
      })  
    );
  }
// module.exports = withAuth;
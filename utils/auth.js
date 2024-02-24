const withAuth = (req, res, next) => {
    // If not logged in, redirect to the login route
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
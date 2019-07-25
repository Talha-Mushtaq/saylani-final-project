var session = require("express-session")
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var MongoStore = require('connect-mongo')(session)
// var mongoose = require('mongoose')

var passport = function (server, users) {

    server.use(session({
             secret: "123" 
          })
        );
    //  server.use(session({
    //     store: new MongoStore({ mongooseConnection: mongoose.connection }),
    //     secret: "secret-word" 
    // }));
    server.use(passport.initialize());
    server.use(passport.session());

    passport.use(new LocalStrategy(
        function (username, password, next) {
    
            var user = users.find((user) => {
                return user.username === username && user.password === password;
            })
    
            if (user) {
                next(null, user);
            } else {
                next(null, false);
            }
    
        }
    ));
    
    passport.serializeUser(function (user, next) {
        next(null, user.id);
    });
    
    passport.deserializeUser(function (id, next) {
        var user = users.find((user) => {
            return user.id === id;
        })
    
        next(null, user);
    });

}
module.exports = passport;
// var passport = require('passport')
//   , OAuth2Strategy = require('passport-oauth').OAuth2Strategy;

// passport.use('provider', new OAuth2Strategy({
//     authorizationURL: 'https://www.provider.com/oauth2/authorize',
//     tokenURL: 'https://www.provider.com/oauth2/token',
//     clientID: '123-456-789',
//     clientSecret: 'talha123',
//     callbackURL: 'https://www.example.com/auth/provider/callback'
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate( function(err, user) {
//       done(err, user);
//       if(err)
//       {
//           console.log("passport not match");
//       }
//     });
//   }
// ));

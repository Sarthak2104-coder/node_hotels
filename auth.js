const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/person.js');

passport.use(new LocalStrategy(async(USERNAME,PASSWORD,done)=>{
    try{
        console.log('Recevied credentials:',USERNAME,PASSWORD);
        const user = await Person.findOne({username: USERNAME});
        if(!user){
            return done(null,false,{message:'User not found'});
        }

        const isPasswordMatch =  user.password === PASSWORD ? true : false;
        if(!isPasswordMatch){
            return done(null,false,{message:'Invalid password'})
        }else{
            return done(null,user);
        }
    }catch(error){
        return done(error);
    }
}))
module.exports = passport;
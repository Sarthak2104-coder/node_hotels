// // const jsonString = '{"name":"sarthak","age":20,"address":{"city":"delhi","state":"delhi"}}';
// // const jsonObject = JSON.parse(jsonString); // Parse JSON string to object
// // console.log(jsonObject); 



// // Output: sarthak

// /////////////////////////////////

// const objectToConvert = { name : "Alice", age : 35};
// const jsonString = JSON.stringify(objectToConvert); // Convert object to JSON string
// console.log(jsonString); // Output: {"name":"Alice","age":35}

////////////////////////////
const express = require('express');
const app = express();

require('dotenv').config();

const db = require('./db.js');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());// req.body
const personRoutes = require('./routes/personRoutes.js');
const passport = require('./auth.js');

app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuItems.js');

//////authenticateion




const logRequest = (req,res,next) =>{
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next();
}
app.use(logRequest);

app.use(passport.initialize());



const MenuItem = require('./models/menu.js');


// app.get('/',logRequest,(req,res)=>{
    
//     res.send( 'Hello from the server');
// })
const LocalMiddleware = passport.authenticate('local', {session : false});
app.get('/',LocalMiddleware,(req,res)=>{
    
    res.send( 'Hello from the server');
})

app.use('/Items',LocalMiddleware, menuRoutes);

// app.get('/person/:workType',async(req,res)=>{
//     try{
//     const workType = req.params.workType;
//     if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
//         const response = await Person.find({work: workType});
//         console.log('Response fetched');
//         res.status(200).json(response);
//     }else{
//         res.status(404).json({error: 'Invalid work type'});
//     }
//     }catch(error){
//         console.log(error);
//         res.status(500).json({error: 'Error fetching data'});
//     }
// })



app.listen(PORT, () => {
    console.log('server is running on port 3000');
});
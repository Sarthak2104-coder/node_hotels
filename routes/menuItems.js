const express = require('express');
const router = express.Router();    
const MenuItem = require('./../models/menu.js');

router.get('/', async(req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('Data Saved');
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(500).json({error: 'Error fetching data'});
    }
})

router.post('/',async(req,res)=>{
    try{
        const data = req.body;

        const newItem = new MenuItem(data);
        const response = await newItem.save();
        console.log('data saved');  
        res.status(200).json(response);
    }catch(error){
        console.log(error);
        res.status(500).json({error: ' Error saving data'})
    }
})

router.get('/:tasteType',async(req,res)=>{
    try{
        const tasteType = req.params.tasteType;
        const data = await MenuItem.find({taste:tasteType});
        console.log('Data Saved');
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(500).json({error: 'Error fetching data'});   
    }
})
module.exports = router;
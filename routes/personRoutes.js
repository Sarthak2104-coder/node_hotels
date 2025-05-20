const express = require('express');
const router = express.Router();

const Person = require('./../models/person.js');

router.post('/',async(req,res)=>{
    try{
        const data = req.body;

        const newperson = new Person(data);
        const response = await newperson.save();
        console.log('data saved');

        res.status(200).json(response);
    }catch(error){
        console.log(error);
        res.status(500).json({error:'Error saving data'});
    }
})

router.get('/', async(req,res)=>{
    try{
        const data = await Person.find();
        console.log('Data Saved');
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
})

router.get('/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType;
        const data = await Person.find({work:workType});
        console.log('Data Saved');
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(500).json({error: 'Error fetching data'});
    }
})
router.put('/:id', async(req,res)=>{
    try{
        const personId = req.params.id;
        const updatesPersonData = req.body;

        const respone = await Person.findByIdAndUpdate(personId,updatesPersonData,{
            new:true,
            runValidators:true,
        })
        if(!respone){
            return res.status(404).json({error: 'Person not found'});
        }
        res.status(200).json(respone);
    }catch(error){
        console.log(error);
        res.status(500).json({error: 'Error updating data'});
    }
})
router.delete('/:id', async(req,res)=>{
    try{
       const personId = req.params.id;
       const response = await Person.findByIdAndDelete(personId);
       if(!response){
        return res.status(404).json({error: 'Person not found'});
       }
       res.status(200).json({message: 'Person deleted successfully'});
    }catch(error){
        console.error('Error deleting person:', error);
        res.status(500).json({error: 'Internal server error'});
    }
});
module.exports = router;
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId

const { Employee } = require('../model/employee');

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if(!err){res.send(docs);}
        else{console.log(err);}
    });
});

router.get('/:id',(req,res) =>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`There is no record With given Id: ${req.params.id}`);

    Employee.findById(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        }else{
            console.log(err);
        }
    })
})

router.post('/',(req, res) => {
    const emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, doc) =>{
        if(!err){res.send(doc);}
        else{console.log('error in Employee save : ' + err); }
    })
})

router.put('/:id', (req, res) =>  {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`There is no record With given Id: ${req.params.id}`);

    emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };

    Employee.findByIdAndUpdate(req.params.is, {$set: emp}, {new: true}, (err,doc) => {
        if(!err){res.send(doc);}
        else{console.log('error in Employee Update : ' + err); }
    })
})

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`There is no record With given Id: ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){res.send(doc);}
        else{console.log('error in Employee Delete : ' + err); }
    })
})

module.exports = router;
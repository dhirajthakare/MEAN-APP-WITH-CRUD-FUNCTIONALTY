const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dbconfi = require('./connection/connection');
const cors = require('cors');
const bodyparser = require('body-parser');
const jsonData = bodyparser.json();
const model = require('./model/model');
app.use(cors());

app.get('/fetchData', function(req,res){
    model.find().then((responce)=>{
        res.json(responce);
    }).catch((err)=>{
        console.log(err);
    })
})

app.post('/InsertData',jsonData, function(req,res){

    send = new model({
       Name:req.body.Name,
       Email:req.body.Email,
       Mob :req.body.Mob,
       Gender : req.body.Gender
    })
    send.save().then((responce)=>{
        res.json(responce);
    }).catch((err)=>{
        console.log(err);
    })
})
app.put('/UpdateData/:id',jsonData, function(req,res){

    model.updateOne({_id:req.params.id},{
        $set:({
            Name:req.body.Name,
           Email:req.body.Email,
           Mob :req.body.Mob,
           Gender : req.body.Gender
        })
    })

    .then((responce)=>{
        res.json(responce);
    }).catch((err)=>{
        console.log(err);
    })
})

app.delete('/DeleteData/:id',function(req,res){

    model.deleteOne({_id:req.params.id}).then((responce)=>{
        res.json(responce);
    }).catch((err)=>{
        console.log(err);
    })

})
app.get('/FindData/:id',function(req,res){

    model.findById({_id:req.params.id}).then((responce)=>{
        res.json(responce);
    }).catch((err)=>{
        console.log(err);
    })

})
app.listen(port);
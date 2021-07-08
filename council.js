const knex = require("./connection");
const express =require("express")
const router = express.Router();


router.post("/getting",(req,res) => {
    knex.select("council").from("WorkTB").where("council",req.body.council)
    .then((data) => {
        if(data.length > 0){
            for(var i = 0 ; i < data.length; i++){
                if(data[i]["council"] == req.body.council){
                    console.log("council is already there .");
                    res.send("council is already there .");
                };
            };
        }else{
            if(data.length < 1){
                knex("WorkTB")
                    .insert({
                        council : req.body.council,
                        councilwork : req.body.councilwork
                    })
                    .then(()=>{
                        console.log("council work stored.");
                        res.send("council work stored.")
                    })
                    .catch((err) => {
                        console.log(err)
                        res.send(err)
                    })

            }
        }
    })
    .catch((err) => {
        console.log(err)
        res.send(err)
    })
})


module.exports = router;
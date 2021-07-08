const mysql = require("mysql")

const knex = require('knex')({
    client : "mysql",
    connection : ({
        host : "localhost",
        user : "root",
        password : "Neha@1234",
        database : "councilworkDB"
    })
});


knex.schema.hasTable("WorkTB").then((existe) => {
    if(!existe){
        console.log("hii")
        return knex.schema.createTable("WorkTB",(table) => {
            table.increments("No").primary(),
            table.string("council"),
            table.string("councilwork")
        })
    }
});

module.exports = knex;

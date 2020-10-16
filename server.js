const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/connection");


//catching exported data connection from connection.js file the has jawdb from heroku
const app = express();
const PORT = process.env.PORT || 8080;
//app middleware sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//handlbars middleware sets up the express app to handle data parsing
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routs
require("./controllers/fighterController")(app);

app.get("/",(req, res) =>{
    connection.query("select * from fighter",(err, data) =>{
        console.table(data)
    })
    res.render("index", {name: "Wilmer Rivera Morter"});
});

app.listen(PORT,() =>{
    console.log(`server is runinin on http://localhost:${PORT}`)
}
)


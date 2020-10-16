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
//get rout to render the whats in the index file in main.handlbars file also able to inject values when you res.render
//rendering into index to show on main handlebars file
require()

// test rout/get rout to a web browser api page 
app.get("/api/config",(req, res) => {
    res.json({
        success:true,
    });
});




app.listen(PORT,() =>{
    console.log(`server is runinin on http://localhost:${PORT}`)
}
)


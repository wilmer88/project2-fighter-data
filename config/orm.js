const QueryString = require("qs");
const { default: validator } = require("validator");
const connection = require("../config/connection.js");

orm = {
    fighterselect:(tableInput, colToSearch, valOfCol, cb){
        const queryfighter = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryfighter, [tableInput, colToSearch, valOfCol], function(err, result){
            if (err) throw err;
            cb(result);
        });

    }
    };
    
    modoule.exports = orm;
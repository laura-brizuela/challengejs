var sql = require("./db");


function getUsers(result){
        sql.connect(function(err) {
      if (err) throw err;
      sql.query("SELECT * FROM challengejs.users", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        return(null,result);
      });
    });

}

module.exports = {getUsers};
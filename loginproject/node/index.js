var http = require("http");
const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
var cors = require('cors')
app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}))
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'userDatabase',
    multipleStatements: true,
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log("Database connection Succeded");
    else
        console.log("Database connection failed \n Error : " + JSON.stringify(err, undefined, 2));
});


var server = app.listen(3000, "127.0.0.1", function() {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});

app.post('/user/insertdetails', function(req, res) {

    var data = req.body;
    console.log(data);
    userdata = { fullName: data.fullName, userName: data.userName, email: data.email, password: data.password, gender: data.gender }
    addressdata = { userName: data.userName, houseno: data.houseno, street: data.street, city: data.city }
    console.log(data.fullName);
    console.log(userdata);
    console.log(addressdata);
    mysqlConnection.query('INSERT INTO `userTable` SET ?', userdata, function(error, results, fields) {
        if (error) {
            throw error;
        } else {
            mysqlConnection.query('INSERT INTO `address_table1` SET ?', addressdata, function(error, results, fields) {

                if (error) {
                    throw error;
                } else {
                    res.end(JSON.stringify(results));
                }
            });
        }
    });
})

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
app.post('/Login', function(req, res) {
    mysqlConnection.query('SELECT * FROM userTable where `userName`=? AND `password`= ?', [req.body.userName, req.body.password], function(error, results, fields) {
        if (!error) {
            varEmpty = isEmpty(results)
                //console.log(varEmpty)
            if (varEmpty == false) {
                console.log(JSON.stringify(req.body))
                console.log(JSON.stringify(results))
                res.end(JSON.stringify(results));
                //res.send('Login successful')
            } else {
                console.log('Invalid details')

            }
        } else
            console.log(error);
    });
});

app.post('/Details', function(req, res) {
    if (req.body.userName == 'admin') {
        mysqlConnection.query('select userTable.userName, userTable.fullName, userTable.email, userTable.password,   userTable.gender, address_table1.houseno, address_table1.street, address_table1.city from userTable INNER JOIN address_table1 ON userTable.userName = address_table1.userName ', function(error, results, fields) {
            if (!error) {
                res.end(JSON.stringify(results));
            } else
                console.log(error);
        })
    } else {
        mysqlConnection.query('select userTable.userName, userTable.fullName, userTable.email, userTable.password, userTable.gender, address_table1.houseno, address_table1.street, address_table1.city from userTable INNER JOIN address_table1 ON userTable.userName = address_table1.userName AND userTable.userName = ?', [req.body.userName], function(error, results, fields) {
            if (!error) {
                res.end(JSON.stringify(results));
            } else
                console.log(error);
        })
    }
})

app.post('/Details/delete', function(req, res) {
    mysqlConnection.query('DELETE FROM `userTable` WHERE `userName` = ? ', [req.body.userName], function(error, results, fields) {
        if (!error) {
            console.log(JSON.stringify(results))
            res.end(JSON.stringify(results));
        } else
            console.log(error);
    })
})

app.put('/update', function(req, res) {
    console.log(req.body);
    mysqlConnection.query('UPDATE userTable SET `fullname`=?,`email`=?,`password`=?,  `gender`=? where `userName`=?', [req.body.fullName, req.body.email, req.body.password, req.body.gender, req.body.userName], function(error, results, fields) {
        if (error) {
            throw error;
        } else {
            mysqlConnection.query('UPDATE address_table1 SET `houseno`=? ,`street`=?, `city`=? where `userName`=?', [req.body.houseno, req.body.street, req.body.city, req.body.userName], function(error, results, fields) {

                if (error) {
                    throw error;
                } else {
                    res.end(JSON.stringify(results));
                }
            });
        }
    });
})
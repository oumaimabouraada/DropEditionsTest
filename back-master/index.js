const PORT = 3001;
var express = require("express"),
    app = express(),
    http = require("http").Server(app).listen(PORT),
    bodyParser = require('body-parser');
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    var dbo = db.db("mydb");
    dbo.listCollections({ name: "users" })
        .next(function (err, collinfo) {
            if (collinfo) {


            } else {
                dbo.createCollection("users", function (err, res) {
                    if (err) throw err;
                    console.log("Collection created!");
                    var myobj = { username: "o.bouraada", password: "123456" };
                    dbo.collection("users").insertOne(myobj, function (err, res) {
                        if (err) throw err;
                        console.log("1 document inserted");

                    });

                });

            }
        });

});
console.log(`Server is listening on port: ${PORT}`);

app.get('/', function (req, res) {
    res.send('no get in here !!!!');
});

app.get('/auth', function (req, res) {
    console.log(req.query);
    var url = "mongodb://localhost:27017/mydb";
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        console.log("in it");
        var dbo = db.db("mydb");
        dbo.collection("users").findOne(req.query, function (err, result) {
            if (err) throw err;
            console.log(result);
            if (result) {
                res.send('welcome');
                console.log('welcome')
            } else {
                console.log('not logged')
                res.send('not logged')
            }
        });

    });


});
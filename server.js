var express = require("express")
var app = express()
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/addTwoNumbers', function (req, res) {
    let numberOne = req.query.numberOne;
    let numberTwo = req.query.numberTwo;
    let result = parseInt(numberOne) + parseInt(numberTwo);
    let response = {data: result, message: "success", statusCode: 200}
    res.json(response);

});

app.get('/dateOfBirth', function (req, res) {
    let day = req.query.day;
    let month = req.query.month;
    let year = req.query.year;
    let result = ["Date: " + day + ", " + "Month: " + month + ", " + "Year: " + year];
    let response = {data: result, message: "success", statusCode: 200}
    res.json(response);

});
 

app.listen(port,()=>{
console.log("App listening to: "+port)
})
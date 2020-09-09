
import express=require('express');
import "reflect-metadata";
const user = require('./routes/userroute');
const employee = require('./routes/employeeroute');
const bodyParser = require('body-parser');
const department = require('./routes/department');
const project = require('./routes/project');
const app:express.Application=express();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  };
app.use(allowCrossDomain);
app.use( bodyParser.urlencoded({extended: false}) )
app.use(bodyParser.json({ limit: '50mb' }))
app.get('/',function(req,res){
    res.send('Hello World!');
});
// app.post('/api', (req, res) => {
//     console.log(req.body);
//     res.send('Back End Test Successful');
//   });
app.use("/users",user)
app.use("/employee",employee)
app.use("/department",department)
app.use("/project",project)

app.listen(8080,function(){
    console.log('Example app listening on port 8080!');
})

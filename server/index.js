import login from '../src/components/login';


const express= require('express');
const mysql= require('mysql');
const app= express();
const cors= require('cors');
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({
    origin:['http://localhost:3000'],
    optionSuccessStatus:200
}
));


const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    port:3306,
    database:'confi_dental'
})


const tableName= "form", port=3001;
app.listen(port,() => {
    console.log("hello world");
})

app.get("/",(req,res)=>{
    res.send("Hi");
})

app.post("/getData" ,(req,res)=>{
    const name= req.body.name;
    const email= req.body.email;
    const date= req.body.date;
    const message= req.body.message;
    const query= `INSERT INTO  form VALUES ('${name}','${email}','${date}','${message}')`;
    db.query(query,(err,result,field)=>{
        if(err){
            throw err;
        }
        res.send(result);
    })
})

const http = require('http');
const fs =require('fs');
const pug = require('pug');
const  express= require('express');
const app = express();
const path= require('path')


app.use('/Static',express.static('static'));
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/', (req,res) =>{
    const para ={}
    res.render('Home.pug',para);
})
// app.get('/Home', (req,res) =>{
//     const para ={}
//     res.render('home.pug',para);
// })
app.get('/About_us', (req,res) =>{
    const para ={}
    res.render('About_us.pug',para);
})




const hostname = '127.0.0.1';
const port = 8000;
app.listen(port,  () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
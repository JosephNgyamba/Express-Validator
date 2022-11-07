const express=require('express');
const app=express();
// validation section
const bodyParser=require('body-parser');
const urlencodedParser= bodyParser.urlencoded({ extended: false});
const {check,validationResult}= require('express-validator');

// ejs section

app.set('view engine','ejs');

// post section
app.post('/',urlencodedParser,[check('username','nom non valide!')
.exists()
.isLength({min:3}),
check('email','le champ ne dois pas etre vide')
.isEmail()
.normalizeEmail()],(req,res)=>{
    const erros=validationResult(req)
    if(!erros.isEmpty()){
        const alert=erros.array()
        res.render(('index'),{alert})
    }
})


// Get section
 app.get('/',(req,res)=>{
    res.status(200)
    res.render('index');
    console.log('user connected');
 })
 app.listen(2000);
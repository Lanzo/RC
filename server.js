const express = require('express')
const app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

app.get('/', (req, res,) => {
  
    console.log('Here Home');
        res.render('index')

  

})



app.get('/ce', (req, res,) => {
  
    console.log('Here CE');
        res.render('Cece')
  
        
})


app.get('/reg', (req, res,) => {
  
    console.log('Here');
        res.render('Regi')
  
        
})

app.get('/str', (req, res,) => {
  
    console.log('Here');
        res.render('str.ejs')
  
        
})


app.listen(80)
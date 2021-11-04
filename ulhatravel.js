const express = require('express')

const expressHandlebars= require('express-handlebars')
const app = express()



//configura o view engine handlebars
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => res.render('home'))

app.get('/about',(req, res)=>{
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about',{fortune: randomFortune})})

//pagina 404 personalizada 
app.use((req, res)=>{
    res.status(404)
    res.render('404')})

// pagina 500 personalizada
app.use((err, req, res, next)=>{
    console.error(err.message)
    res.status(500)
    res.render('500')});

app.use(express.static(__dirname + '/public'))  

const fortunes = [
    "conquer your fears or they conquer you.",
    "Rivers need springs.",
    "Do not fear what don't know.",
    "you will have a pleasant surprise.",
    "whenever possible, keep it simple.",
]

const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(
        `Express started on http://localhost:${port}; `
        + `press Ctrl-C to terminate. `))
    

    
 
const express = require('express')

const expressHandlebars= require('express-handlebars')
const app = express()
const handlers = require('./lib/handlers')

//configura o view engine handlebars
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')
app.get('/', handlers.home)

const fortune = require('./lib/fortunes.js')

app.get('/about', handlers.about)

//pagina 404 personalizada 
app.use(handlers.notFound)

// pagina 500 personalizada
app.use(handlers.serverError)


app.use(express.static(__dirname + '/public'))  

const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(
        `Express started on http://localhost:${port}; `
        + `press Ctrl-C to terminate. `))
    

    
 
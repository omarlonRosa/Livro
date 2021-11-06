const express = require("express");

const expressHandlebars= require("express-handlebars");
const app = express();
const handlers = require("./lib/handlers");

//configura o view engine handlebars
app.engine("handlebars", expressHandlebars({
	defaultLayout: "main",
}));

app.set("view engine", "handlebars");

//const fortune = require('./lib/fortunes.js')

app.get("/", handlers.home);


app.get("/about", handlers.about);

//pagina 404 personalizada 
app.use(handlers.notFound);

// pagina 500 personalizada
app.use(handlers.serverError);


// eslint-disable-next-line no-undef
app.use(express.static(__dirname + "/public"));  

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
if(require.main === module){
	app.listen(port, ()=>{console.log(
		`Express started on http://localhost:${port}; `
        + "press Ctrl-C to terminate. ");});
}else{ module.exports = app;}

    

    
 
const express = require('express');
const engine = require('express-handlebars');

const path = require('path');
const app = express();
const port = 3000;

const router = require(path.join(__dirname,'/routes/blog.js'));

app.engine('handlebars', engine.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//app.use(express.static(path.join(__dirname, "static")))

app.use('/', router);

app.listen(port, ()=>{
    console.log(`sample app is listening at http://localhost:${port}`)
})
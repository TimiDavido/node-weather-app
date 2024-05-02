const express = require('express')
 const path = require('path')
 const hbs = require('hbs')
const fetchWeather = require('./utils/geocode')  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       


 
const app = express()

//define paths for express config
const publicPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname,'../templates/views' )

const partialPath = path.join(__dirname, '../templates/partials')


//setup handlebard engine and views location
app.set('views', viewPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialPath)


//setup static directory to serve
app.use(express.static(publicPath))


app.get('', (req,res) => {
    res.render('index', {
        title : "Weather ",
        name : "Timi Brenda"
    })
})

app.get('/about', (req,res) => {
    res.render('about', {   
        title : "About Me",
        name: "Timi Him"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        text : "Help page",
        title : "Help",
        name : "Timi Brenda",
        
    })
})


app.get('', (req, res) => {
    res.send('<h1>Hello express</h1>')
})

app.get('/weather', async (req,res) => {
 
    try{
        const data = await fetchWeather(req.query.search);
        res.send(data)
    }
    catch(error){
        res.send("Invalid Location")
    }
})
    

    
app.get('/products', (req,res) => {
    if (!req.query.search) {
        return res.send({
            error : "you must provide a search time"
        })
    }

    console.log(req.query.search)
    res.send({
        products : []
    })
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        title : 404,
        name: "Timi David",
        errorMessage : "Help article not found"
    })
})

app.get('*', (req,res) => {
    res.render('404', {
        title : 404,
        name : "Timi genius",
        errorMessage : "page not found"
    })
})


app.listen(3000, () => {
    console.log('server is up on port 3000')
})


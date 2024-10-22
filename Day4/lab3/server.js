const express = require('express')
const mongoose= require('mongoose')
const bodyParser=require('body-parser')
const app = express()
const port = 3000

const productRoutes=require('./routes/productRoutes')

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use(bodyParser.json())

app.use('/api/products', productRoutes)

  mongoose.connect('mongodb+srv://admin:KOMyIcHeUQMaVrip@saharsh.vtfr6.mongodb.net/?retryWrites=true&w=majority&appName=Saharsh')
  .then(() => console.log("connected successfully"))
  .catch( err =>console.log(err))

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


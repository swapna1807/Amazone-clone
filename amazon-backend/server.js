import express from 'express'
import cors from 'cors'
import {products} from "./products.js"

const app = express()
const port = process.env.PORT || 5000



app.use(express.json());
app.use(cors());



app.get('/api/products',(req,res)=>{
    res.status(200).send(products);
})


app.get('/',(req,res)=>res.status(200).send('Hello Debjit here. It is Amazon clone project.'))





// Listening to  server

app.listen(port,()=>console.log(`Listening on local host:${port}`))
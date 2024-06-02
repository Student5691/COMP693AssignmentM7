import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
// load route into main file
app.use(bodyParser.json()) //must be before the line below: "app.use('/', routes)"
app.use('/', routes)

app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})

const PORT = process.env.PORT || 5000

const init = async () => {
    try {
        await connectDB(process.env.DB)
        console.log('Connected to the database...')
        app.listen(PORT, () => console.log(`Listening on port :${PORT}`))
    } catch (err) {
        console.log(err)
    }
}
init()
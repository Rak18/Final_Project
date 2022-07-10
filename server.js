const express = require('express')
const dotenv = require ('dotenv')
const connectDB = require ('./config/config')
require('colors')

const morgan = require('morgan')


//testing
// const stripe = require("./routes/orderRoutes")

//config dotenv
dotenv.config()

//connection MOngoDB
connectDB()

const app = express()

//middleware
app.use(express.json())
app.use(morgan('dev'))

//route
app.use('/api/products', require('./routes/productRoute'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/orders', require('./routes/orderRoutes'))
app.get('/', (req,res) => res.send('API Running'))




const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))











//testing
// app.use('/api/stripe', stripe)


//payment intent api
// app.post('/', async (req,res) => {
// const paymentIntent = await Stripe.PaymentIntentsResource.create(
//     {
//         amount: subTotal * 100,
//         currency: "inr",
//         customer: customer.id,
//         receipt_email: token.email,
//       },
//       {
//         idempotencyKey: uuidv4(),
// })
//     res.json({ clientSecret : paymentIntent.client_Secret})
// })

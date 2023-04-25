const express = require('express')
const dotenv = require('dotenv').config();
const colors = require('colors')

const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const { notFound, errorHandler} = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running....')
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.green.bold))


const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const colors = require('colors')

const users = require('./data/users')
const products = require('./data/products')
const User = require('./model/userModel')
const Product = require('./model/productModel')
const Order = require('./model/orderModel')
const connectDB = require('./config/db')

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map(product => {
            return {...product, user: adminUser}
        });

        await Product.insertMany(sampleProducts)
        console.log('Data Imported!'.green.inverse)
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!'.yellow.inverse)
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1);
    }
}

if (process.argv[2] === 'd') {
    destroyData();
} else {
    importData();
}

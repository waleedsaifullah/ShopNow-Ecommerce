const bcrypt = require('bcryptjs')

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Naruto Uzumaki',
        email: 'naruto@example.com',
        password: bcrypt.hashSync('naruto', 10),
    },
    {
        name: 'Gon Freecs',
        email: 'gon@example.com',
        password: bcrypt.hashSync('gonkill', 10),
    },
]

module.exports = users
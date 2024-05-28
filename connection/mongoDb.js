const mongoose = require('mongoose');

const mongoDb = () => {

    mongoose.connect('mongodb://localhost:27017/graphql').then(()=>{
        console.log('connect mongodb');
    }).catch(()=>{
        console.log('connction error')
    })
}

module.exports = mongoDb;
const mongoose = require('mongoose');

module.exports = function () {
    mongoose.connect(`mongodb+srv://root:root@cluster0.hvbi2dd.mongodb.net/`).then(() => {
        console.log("MongoDB Connected Succsessfully");
    }).catch(() => {
        console.log("MongoDB Connection Fails");
    })
};

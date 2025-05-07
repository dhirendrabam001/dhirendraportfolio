// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/userdata")
// .then(() => {
//     console.log("Mongoose DB Connect Sucussful")
// }).catch((error) => {
//     console.log("Mongoose DB Connect Failed")
// });





// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/userdata";

// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((err) => console.error('MongoDB connection error:', err));

const mongoose = require('mongoose');

const dB = "mongodb+srv://dhirendrabam12345:%40Dhirendra123@portfolio.f9wmcck.mongodb.net/?retryWrites=true&w=majority&appName=portfolio";
mongoose.connect(dB).then(() => {
    console.log('Connection Sucussfully');
}).catch((error) => {
    console.log(`No Connection DB`)
    
});

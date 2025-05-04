const mongoose = require("mongoose");
const userScheme = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});
// Contact form scheme
const formScheme = new mongoose.Schema ({
    yourname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    yoursubject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    }
});

// Support form scheme
const supportForm = new mongoose.Schema ({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    subject: {
        type: String,
        required: true
    },
    yourname1: {
        type: String,
        required: true
    },
    yournumber: {
        type: Number,
        required: true
    },
    messagesupport: {
        type: String,
        required: true  
    },
    data: {
        type: Date,
        default: Date.now
    }   
});

// Create models
const User = mongoose.model("User", userScheme);
const Contact = mongoose.model("Contact", formScheme);
const Customer = mongoose.model("Customer", supportForm);
// Exports models
module.exports = {
    User,
    Contact,
    Customer
};
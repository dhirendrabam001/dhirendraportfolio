const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
require("./config/connnection"); // Require MongooseDb
const {User, Contact, Customer} = require("./models/user"); // Require Model
const bcrypt = require("bcrypt");





// Define Port 5000
const port = process.env.port || 5000;
// const host = "172.20.10.4";

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "./views"));

// Link CSS
app.use(express.static(path.join(__dirname, "public")));

//Link Boostrap 5
app.use("/css", express.static(path.join(__dirname, "node_modules", "bootstrap", "dist", "css")))
app.use("/js", express.static(path.join(__dirname, "node_modules", "bootstrap", "dist", "js")));


// login section hide //

// app.get("/", (req,res) => {
//     res.render("login")
// })

app.get("/", (req,res) => {
    res.render("index")
});

app.get("/index", (req,res) => {
    res.render("index")
});
// about-section get
app.get("/about", (req,res) => {
    res.render("about")
});
// services-section get
app.get("/services", (req,res) => {
    res.render("services")
});

// Portfolio Section get 
app.get("/portfolio", (req,res) => {
    res.render("portfolio")
});

// Blog section get
app.get("/blog", (req,res) => {
    res.render("blog")
});

// Contact section get
app.get("/contact", (req,res) => {
    res.render("contact")
});


// Registr Post
// app.post("/register", async (req,res) => {
//     try {
       
//         const {username, email, password, cpassword} = req.body;
//         check when empty field check
//         if(!username || !email || !password) {
//             return res.send("All field are required")
//         }
    
//         Check if email already exits
//         const existingUser = await User.findOne({email});
//         if(existingUser) {
//             return res.send("Email Already Exit")
//         }
//         Hash password before saving

//         const hasheedPassword = await bcrypt.hash(password,10);

//         Create New User
//         const user = new User({
//             username,
//             email,
//             password: hasheedPassword,
//             });
//         await user.save();

//         res.send("Registration successful!");

//     }catch(error) {
//         console.error(error);
//         res.status(500).send("Someting is Wrong");
//     } 
// });

// post login form

// app.post("/login", async (req,res) => {
//     try {
//         const {email,password} = req.body;
//         const user = await User.findOne({email});
//         if(!user) {
//             return res.send("User not found")
//         }

//         Password Match
//         const isMatch = await bcrypt.compare(password, user.password)
//         if(!isMatch) {
//             return res.status(404).send("Password does not match")
//         }

//         res.redirect("/index");

//     }catch(error){
//         console.error(error);
//         res.status(404).send("Login Failed");
//     }
// });


// Contact Form
app.post("/contact", async (req,res) => {
    try {
        const {yourname, email, yoursubject, message} = req.body;
        console.log("Data Received", req.body);
        
        
        const newContact = new Contact({yourname, email, yoursubject, message});
        await newContact.save();
        res.send("Message Submitted Successfully");
        

    }catch(error) {
        console.error("Error");
        res.status(404).send("Server Error");

    }
});

// SupportForm
app.post("/supportform", async (req,res) => {
    try {
        const {username, email, subject, yourname1, yournumber, messagesupport} = req.body;
        console.log("Received Data", req.body);
        
        const newCustomerForm = new Customer({username, email, subject, yourname1, yournumber, messagesupport});
        await newCustomerForm.save();
        res.send("Message Submitted Sucussfully");

    }catch(error) {
        console.error("Error");
        res.status(500).send("Server Error")

    }
});





// app.listen(port, ()=> {
//     console.log(`Server is running at:${port}`);
// })


// module.exports = app;

// if (require.main === module) {
//     app.listen(port, () => {
//         console.log(`Server is running at:${port}`);
//     });
// }


// [Keep all your existing middleware and routes...]



// Only start server locally (not on Vercel)
if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Local server running on ${PORT}`));
}

// ▼▼▼ Add this at the VERY END ▼▼▼
module.exports = app; // Critical for Vercel




// const port = 4000;
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");
// app.use(express.json());
// app.use(cors());

// //Databse connection with mongodb
// mongoose.connect("mongodb+srv://727722euec054:harinii@cluster0.fncxq.mongodb.net/e-commerce")
// //api creation
// app.get("/",(req,res)=>{
//     res.send("Express App is Running")
// })
// //img storage engine
// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename:(req,file,cb)=>
//     {
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })
// //schema creating for user model
// const Users=mongoose.model('Users',{
//     name:{
//         type:String,
//     },
//     email:{
//         type:String,
//         unique:true,
//     },
//     password:{
//         type:String,
//     },
//     cartData:{
//         type:Object,
//     },
//     date:{
//         type:Date, 
//         default:Date.now,
//     }
// })
// //creating endpoint for reg the user
// app.post('/signup',async(req,res)=>{
//     let check=await Users.findOne({email:req.body.email});
//     if(check){
//         return res.status(400).json({success:false,errors:"existing user found with same email address"})
//     }
//     let cart={};
//     for (let i=0;i>300;i++){
//         cart[i]=0;
//     }
//     const user=new Users({
//         name:req.body.username,
//         email:req.body.email,
//         password:req.body.password,
//         cartData:cart,
//     })

//     await user.save();
//     const data={
//         user:{
//             id:user.id
//         }
//     }

//     const token=jwt.sign(data,'secret_ecom');
//     res.json({success:true,token})
// })

// //creatinf end point for user login
// app.post('/login',async(req,res)=>{
//     let user=await Users.findOne({email:req.body.email});
//     if(user){
//         const passCompare=req.body.password===user.password;
//         if(passCompare){
//             const data={
//                 user:{
//                     id:user.id
//                 }
//             }
//             const token=jwt.sign(data,'secret_ecom');
//             res.json({success:true,token});
//         }
//         else{
//             res.json({success:false,errors:"Wrong Password"});
//         }
//     }
//     else{
//         res.json({success:false,errors:"Wrong Email Id"})
//     }
// })

// const upload = multer({storage:storage})
// //creating uplad endpoint for img
// app.use('/images',express.static('upload/images'))
// app.post("/upload",upload.single('image'),(req,res)=>{
//     res.json({
//         success:1,
//         img_url:`http://localhost:${port}/images/${req.file.filename}`
//     })
// })
// //schema for creating products
// const Product=mongoose.model("Product",{
//     id:{
//         type:Number,
//         required:true,
//     },
//     name:{
//         type:String,
//         required:true,

//     },
//     image:{
//         type:String,
//         required:true,
//     },
//     category:{
//         type:String,
//         required:true,
//     },
//     new_price:{
//         type:Number,
//         required:true,
//     },
//     old_price:{
//         type:Number,
//         required:true,
//     },
//     date:{
//         type:Date,
//         // required:true,
//         default:Date.now,
//     },
//     available:{
//         type:Boolean,
//         default:true,
        
//     }
// })
// app.post('/addproduct',async (req,res)=>{ 
//     let products =await Product.find({});
//     let id;
//     if(products.length>0)
//     {
//         let last_product_array=products.slice(-1);
//         let last_product=last_product_array[0];
//         id=last_product.id+1;
//     }
//     else{
//         id=1;

//     }
//     const product=new Product ({
//         id:id,
//         name:req.body.name,
//         image:req.body.image,
//         category:req.body.category,
//         new_price:req.body.new_price,
//         old_price:req.body.old_price,
//     });
//     console.log(product);
//     await product.save();
//     console.log("Saved");
//     res.json({
//         success: true,
//         name :req.body.name,
//     })
// })
// //creaating api for deleting pro
// app.post('/removeproduct',async (req,res)=>{
//  await Product.findOneAndDelete({
//     id:req.body.id
//  });
//  console.log("Removed");
//  res.json({
//     success:true,
//     name:req.body.name
//  })
// })
// //creating api for getting all products
// app.get('/allproducts',async (req,res)=>
// {
//     let products=await Product.find({});
//     console.log("All Products Fetched");
//     res.send(products);
// })
// app.listen(port,(error)=>
// {
//     if(!error){
//         console.log("Server Running on Port "+port)
//     }
//     else{
//         console.log("Error : "+error)
//     }
// })


// const port = 4000;
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");
// app.use(express.json());
// app.use(cors());

// // Database connection with MongoDB
// mongoose.connect("mongodb+srv://727722euec054:harinii@cluster0.fncxq.mongodb.net/e-commerce", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useCreateIndex: true
// });

// // API to check if the server is running
// app.get("/", (req, res) => {
//     res.send("Express App is Running");
// });

// // Image storage engine
// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// });

// // User schema and model
// const Users = mongoose.model('Users', {
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     cartData: {
//         type: Object,
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });

// // Signup endpoint
// app.post('/signup', async (req, res) => {
//     try {
//         let check = await Users.findOne({ email: req.body.email });
//         if (check) {
//             return res.status(400).json({ success: false, errors: "Existing user found with the same email address" });
//         }

//         let cart = {};
//         for (let i = 0; i < 300; i++) {
//             cart[i] = 0;
//         }

//         const user = new Users({
//             name: req.body.username,
//             email: req.body.email,
//             password: req.body.password,
//             cartData: cart,
//         });

//         await user.save();
//         const data = {
//             user: {
//                 id: user.id
//             }
//         }

//         const token = jwt.sign(data, 'secret_ecom');
//         res.json({ success: true, token });

//     } catch (error) {
//         console.error("Error in /signup:", error);
//         res.status(500).json({ success: false, errors: "Internal Server Error" });
//     }
// });

// // Login endpoint
// app.post('/login', async (req, res) => {
//     try {
//         let user = await Users.findOne({ email: req.body.email });
//         if (user) {
//             const passCompare = req.body.password === user.password;
//             if (passCompare) {
//                 const data = {
//                     user: {
//                         id: user.id
//                     }
//                 }
//                 const token = jwt.sign(data, 'secret_ecom');
//                 res.json({ success: true, token });
//             } else {
//                 res.status(400).json({ success: false, errors: "Wrong Password" });
//             }
//         } else {
//             res.status(400).json({ success: false, errors: "Wrong Email Id" });
//         }
//     } catch (error) {
//         console.error("Error in /login:", error);
//         res.status(500).json({ success: false, errors: "Internal Server Error" });
//     }
// });

// // Image upload configuration and endpoint
// const upload = multer({ storage: storage });
// app.use('/images', express.static('upload/images'));
// app.post("/upload", upload.single('image'), (req, res) => {
//     res.json({
//         success: 1,
//         img_url: `http://localhost:${port}/images/${req.file.filename}`
//     });
// });

// // Product schema and model
// const Product = mongoose.model("Product", {
//     id: {
//         type: Number,
//         required: true,
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     image: {
//         type: String,
//         required: true,
//     },
//     category: {
//         type: String,
//         required: true,
//     },
//     new_price: {
//         type: Number,
//         required: true,
//     },
//     old_price: {
//         type: Number,
//         required: true,
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     },
//     available: {
//         type: Boolean,
//         default: true,
//     }
// });
// // Add product endpoint
// app.post('/addproduct', async (req, res) => {
//     try {
//         let products = await Product.find({});
//         let id;
//         if (products.length > 0) {
//             let last_product_array = products.slice(-1);
//             let last_product = last_product_array[0];
//             id = last_product.id + 1;
//         } else {
//             id = 1;
//         }

//         const product = new Product({
//             id: id,
//             name: req.body.name,
//             image: req.body.image,
//             category: req.body.category,
//             new_price: req.body.new_price,
//             old_price: req.body.old_price,
//         });
//         await product.save();
//         res.json({
//             success: true,
//             name: req.body.name,
//         });
//     } catch (error) {
//         console.error("Error in /addproduct:", error);
//         res.status(500).json({ success: false, errors: "Internal Server Error" });
//     }
// });

// // Remove product endpoint
// app.post('/removeproduct', async (req, res) => {
//     try {
//         await Product.findOneAndDelete({
//             id: req.body.id
//         });
//         res.json({
//             success: true,
//         });
//     } catch (error) {
//         console.error("Error in /removeproduct:", error);
//         res.status(500).json({ success: false, errors: "Internal Server Error" });
//     }
// });

// // Get all products endpoint
// app.get('/allproducts', async (req, res) => {
//     try {
//         let products = await Product.find({});
//         res.send(products);
//     } catch (error) {
//         console.error("Error in /allproducts:", error);
//         res.status(500).json({ success: false, errors: "Internal Server Error" });
//     }
// });

// //creating endpoint for newcoolection data
// app.get('/newcollections',async (req,res)=>{
//     let products=await Product.find({});
//     let newcollection=products.slice(1).slice(-8);
//     console.log("NewCollection Fetched");
//     res.send(newcollection);
// })

// // Start the server
// app.listen(port, (error) => {
//     if (!error) {
//         console.log("Server Running on Port " + port);
//     } else {
//         console.log("Error: " + error);
//     }
// });
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://727722euec054:harinii@cluster0.fncxq.mongodb.net/e-commerce")
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// API to check if the server is running
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

// User schema and model
const Users = mongoose.model('Users', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Signup endpoint
app.post('/signup', async (req, res) => {
    try {
        let check = await Users.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, errors: "Existing user found with the same email address" });
        }

        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        const user = new Users({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
        });

        await user.save();
        const data = {
            user: {
                id: user.id
            }
        }

        const token = jwt.sign(data, 'secret_ecom');
        res.json({ success: true, token });

    } catch (error) {
        console.error("Error in /signup:", error);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    try {
        let user = await Users.findOne({ email: req.body.email });
        if (user) {
            const passCompare = req.body.password === user.password;
            if (passCompare) {
                const data = {
                    user: {
                        id: user.id
                    }
                }
                const token = jwt.sign(data, 'secret_ecom');
                res.json({ success: true, token });
            } else {
                res.status(400).json({ success: false, errors: "Wrong Password" });
            }
        } else {
            res.status(400).json({ success: false, errors: "Wrong Email Id" });
        }
    } catch (error) {
        console.error("Error in /login:", error);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});

// Image upload configuration and endpoint
const upload = multer({ storage: storage });
app.use('/images', express.static('upload/images'));
app.post("/upload", upload.single('image'), (req, res) => {
    res.json({
        success: 1,
        img_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Product schema and model
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    }
});

// Add product endpoint
app.post('/addproduct', async (req, res) => {
    try {
        let products = await Product.find({});
        let id;
        if (products.length > 0) {
            let last_product_array = products.slice(-1);
            let last_product = last_product_array[0];
            id = last_product.id + 1;
        } else {
            id = 1;
        }

        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });
        await product.save();
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error("Error in /addproduct:", error);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});

// Remove product endpoint
app.post('/removeproduct', async (req, res) => {
    try {
        await Product.findOneAndDelete({
            id: req.body.id
        });
        res.json({
            success: true,
        });
    } catch (error) {
        console.error("Error in /removeproduct:", error);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});

// Get all products endpoint
app.get('/allproducts', async (req, res) => {
    try {
        let products = await Product.find({});
        res.send(products);
    } catch (error) {
        console.error("Error in /allproducts:", error);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});

// Creating endpoint for new collection data
app.get('/newcollections', async (req, res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection);
})

//popular in women collection

app.get('/popularinwomen',async(req,res)=>{
    let products=await Product.find({category:"women"});
    let popular_in_women=products.slice(0,4);
    console.log("Popular in woman fetched");
    res.send(popular_in_women);
})

//middleware to fetch user
const fetchUser=async(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else{
        try{
            const data=jwt.verify(token,'secret_ecom');
            req.user=data.user;
            next();
        }
        catch(error){
            res.status(401).send({errors:"please authenticate using valid token"})
        }
    }
}

//adding products
app.post('/addtocart',fetchUser,async(req,res)=>{
    // console.log(req.body,req.user);
    console.log("Added",req.body.itemId);
    let userData=await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId]+=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")
})

//endpoint to remove cart data
app.post('/removefromcart',fetchUser,async(req,res)=>{
    console.log("removed",req.body.itemId);
    let userData=await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId]-=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")
})

//endpoint for cartData

app.post('/getcart',fetchUser,async(req,res)=>{
    console.log("GetCart");
    let userData=await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})

// Start the server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port " + port);
    } else {
        console.log("Error: " + error);
    }
});

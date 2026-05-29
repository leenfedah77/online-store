
const express=require("express");
const cors=require("cors");
const app=express();

app.use(cors());

const products=[
{id:1,name:"Gaming Laptop",price:1500,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"},
{id:2,name:"Smart Phone",price:900,image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"},
{id:3,name:"Headphones",price:250,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"},
{id:4,name:"Smart Watch",price:350,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"}
];

app.get("/products",(req,res)=>{res.json(products);});

app.listen(3000,()=>{console.log("Server running on port 3000");});

import  prisma  from '@repo/db/client';
import express from "express";

const app = express();

app.use(express.json());



app.get("/users",async (req,res)=>{
    const users = await prisma.user.findMany();

    res.json({
        message:"Users fetched successfully",
        data:users
    })
})


app.post("/user",async (req,res)=>{
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).json({
            message:"Username and password are required"
        })
    }

    const user = await prisma.user.create({
        data:{
            username,
            password
        }
    });

    res.json({
        message:"User created successfully",
        data:user
    })

});

app.listen(3001,()=>{
    console.log("Server is running on port 3001");
})



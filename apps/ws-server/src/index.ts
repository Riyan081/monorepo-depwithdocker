import prisma from "@repo/db/client"
import { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 8080 });

ws.on("connection",async (socket)=>{
    const user = await prisma.user.create({
        data:{
            username:Math.random().toString(36).substring(2, 15),
            password:Math.random().toString(36).substring(2, 15)
           

        }
    })
    socket.send(`Welcome ${user.username}!`);
    console.log("Client connected");
})





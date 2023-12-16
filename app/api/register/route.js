import { connectMongoDB } from "@/middleware/mongoose";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import User from "@/models/User";

export async function POST(req) {
    try {
        const {restoname, name, email, password} = await req.json();
        // console.log("Restoname:", restoName)
        // console.log("name:", name)
        // console.log("email:", email)
        // console.log("password:", password)
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectMongoDB();
        await User.create({restoname, name, email, password: hashedPassword});

        return NextResponse.json({message: "User Registered."}, {status:201 });
    } catch (error) {
        return NextResponse.json({message: "Trouble Registering User."}, {status: 500})
    }
}
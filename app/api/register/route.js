import connectDB from "@/config/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req, res){
    let {username, email, password} = await req.json();
    console.log(username, email, password)
    await connectDB();

    const existingUser = await User.findOne({email});

    if (existingUser){
        return NextResponse.json({error: "User already exists"}, {status: 400})
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = User({username, password:hashPassword, email});
    try {
        await newUser.save()
    return NextResponse.json({success:"User successfully registered"}, {status: 201})
    } catch (error) {
        return NextResponse.json({error: error}, {status: 500})
    }
}
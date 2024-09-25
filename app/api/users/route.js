import connectDB from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(){
    await connectDB();
    const users = await User.find({});
    return NextResponse.json(users, {status: 200})
   
}
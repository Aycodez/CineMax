import connectDB from "@/config/db";
import Movie from "@/models/Movie";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await connectDB();
        const newMovies = await Movie.find().sort({ createdAt: -1 }).limit(12);
        return NextResponse.json(newMovies, {status: 200})    
      } catch (error) {
        console.error(error)
        return NextResponse.json({ error: error.message }, {status: 500})
      }
}
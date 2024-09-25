import connectDB from "@/config/db";
import Movie from "@/models/Movie";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await connectDB();
        const topRatedMovies = await Movie.find()
        .sort({ numReviews: -1 })
        .limit(10);
        return NextResponse.json(topRatedMovies, {status: 200})    
      } catch (error) {
        return NextResponse.json({ error: error.message }, {status: 500})
      }
}
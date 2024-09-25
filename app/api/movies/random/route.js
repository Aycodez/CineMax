import connectDB from "@/config/db";
import Movie from "@/models/Movie";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await connectDB();
        const randomMovies = await Movie.aggregate([{ $sample: { size: 10 } }]);
        return NextResponse.json(randomMovies, {status: 200})    
      } catch (error) {
        console.error(error)
        return NextResponse.json({ error: error.message }, {status: 500})
      }
}
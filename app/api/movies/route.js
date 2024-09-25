import connectDB from "@/config/db";
import Movie from "@/models/Movie";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await connectDB();
        const movies = await Movie.find({});
        return NextResponse.json(movies, {status: 200})    
      } catch (error) {
        return NextResponse.json({ error: error.message }, {status: 500})
      }
}

export async function POST(req, res){
    try {
      const movie = await req.json()
        await connectDB();
        const newMovie = new Movie(movie);
        const savedMovie = await newMovie.save();
        console.log('Added successfully')
        return NextResponse.json({savedMovie},  {status: 200});
      } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error.message }, {status: 500})
      }
}
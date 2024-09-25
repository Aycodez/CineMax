import connectDB from "@/config/db";
import Movie from "@/models/Movie";
import { NextResponse } from "next/server";


export async function GET(_, res){
    try {
        await connectDB();
        const id = await res.params.id;
        const specificMovie = await Movie.findById(id);
        if (!specificMovie) {
        return NextResponse.json({ message: "Movie not found" },{status: 404});
        }

        return NextResponse.json(specificMovie, {status: 200})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error.message }, {status: 500})

    }
    
}
export async function PUT(req, res){
   
    try {
        await connectDB();
        const id = await res.params.id;
        const movie = await req.json()
        const updatedMovie = await Movie.findByIdAndUpdate(id, movie, {
            new: true,
          });
      
          if (!updatedMovie) {
        return NextResponse.json({ message: "Movie not found" },{status: 404});
        }

        return NextResponse.json({updatedMovie}, {status: 200})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error.message }, {status: 500})

    }
    
}
export async function DELETE(req, res){
   
    try {
        await connectDB();
        const id = await res.params.id;
        const deleteMovie = await Movie.findByIdAndDelete(id);

        if (!deleteMovie) {
            return NextResponse.json({ message: "Movie not found" },{status: 404});
            }

        return NextResponse.json({ message: "Movie Deleted Successfully" }, {status: 200})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error.message }, {status: 500})

    }
    
}


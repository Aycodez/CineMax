import connectDB from "@/config/db";
import Genre from "@/models/Genre";
import { NextResponse } from "next/server"


//creating genre
export async function POST(req, res){
    try {
        // console.log(req.json())
        const {name} = await req.json()
    
        if (!name) {
          return NextResponse.json({ error:"Name is required" })
        }
        await connectDB()
        const existingGenre = await Genre.findOne({ name });
    
        if (existingGenre) {
          return NextResponse.json({ error: "Already exists" }, {status: 500});
        }
    
        const newGenre = await new Genre({ name }).save();
        return NextResponse.json({success: newGenre},{status: 200});
      } catch (error) {
        console.log(error);
       return NextResponse.json({ error: error.message }, {status: 400})
      }
    

}


export async function GET(){
    try {
        await connectDB();
        const genres = await Genre.find({});
        return NextResponse.json(genres, {status: 200})    
      } catch (error) {
        return NextResponse.json({ error: error.message }, {status: 500})
      }
}



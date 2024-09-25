import connectDB from "@/config/db";
import Genre from "@/models/Genre";
import { NextResponse } from "next/server"


export async function PUT(req, res){
    try {
        const { name } = await req.json();
        const { id } = await res.params;
        // await connectDB()
        const gen = await Genre.findOne({ _id: id })
    
        if (!gen) {
          return NextResponse.json({ error:"Genre not found" },{status:404})
        }
        gen.name = name;

        const updatedGenre = await gen.save();
        return NextResponse.json({success: updatedGenre},{status: 200});
      } catch (error) {
        console.log(error);
       return NextResponse.json({ error: error.message }, {status: 500})
      }
    

}

export async function DELETE(req, res){
    
        try {
            const { id } = await res.params;
            const removed = await Genre.findByIdAndDelete(id);
        
            if (!removed) {
                return NextResponse.json({ error: "Genre not found" },{status:404});
            }
        
             return NextResponse.json({success: removed});
          } catch (error) {
            console.error(error);
            return NextResponse.json({ error: "Interval server error" }, {status:500});
          }

}

export async function GET(req, res){   
        try {
            const genre = await Genre.findOne({ _id: res.params.id });
        
             return NextResponse.json({genre});
          } catch (error) {
            console.error(error);
            return NextResponse.json({ error: error.message }, {status: 400});
          }

}


import connectDB from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

//get particular user
// export async function GET(_, res){
   
//     try {
//         await connectDB();
//         const params = await res.params;
        
//             const user = await User.findOne({email:id});
//             return NextResponse.json({user}, {status: 200})
       
//         return NextResponse.json({error: 'Enter the id of the user'}, {status: 500})
        
        
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json({error: 'User does not exists'}, {status: 404})

//     }
    
// }

// update users
export async function PUT(req, res){
    try {
        await connectDB();
        const updateData = await req.json()
        console.log(updateData)
        const user = await User.findOne({_id:updateData._id});
        if (user){
            user.username = updateData.username || user.username
            user.email = updateData.email || user.email

            if (updateData.password){
                const hashPassword = await bcrypt.hash(updateData.password, 10)
                user.password = hashPassword
            }
        }
        const updatedUser = await user.save()
        return NextResponse.json({updatedUser}, {status: 200})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: 'User does not exists'}, {status: 404})

    }


}
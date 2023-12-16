import connectMongoDB from "@/middleware/mongoose";
import Data from "@/models/data";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
 const { id } = params;
 const {newImg: img, newTitle: title, newPrice: price, newCategory: category, newDesc: desc, newRating: rating, newRating_no: rating_no} = await request.json();
 await connectMongoDB();
 await Data.findByIdAndUpdate(id, {img, title, price, category, desc, rating, rating_no});
 return NextResponse.json({message: "Data Updated"}, {status: 200});
 
}

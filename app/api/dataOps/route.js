import connectMongoDB from '@/middleware/mongoose';
import Data from '@/models/data';
import { NextResponse } from 'next/server';
import React from 'react'

export async function POST(request) {
   const { img, title, price, category, desc, rating, rating_no} = await request.json();
    await connectMongoDB();
    await Data.create({img, title, price, category, desc, rating, rating_no});
    return NextResponse.json({message: "Data Generated"}, {status: 201})
}


export async function GET() {
    await connectMongoDB();
    const menu = await Data.find();
    return NextResponse.json({menu});
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Data.findByIdAndDelete(id);
    return NextResponse.json({message: "Data Deleted"}, {status: 200})
}
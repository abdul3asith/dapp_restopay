import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema(
    {
        img: {type:String, required: true},
        title: {type: String, required: true},
        price: {type: Number, required: true},
        category: {type:String, required: true},
        desc: {type:String, required: true},
        rating: {type:Number, required: true},
        rating_no: {type:Number, required: true},
    }, {timestamps: true}
)

const Data = mongoose.models.Data || mongoose.model("Data", dataSchema);

export default Data;
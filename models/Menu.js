

const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main () {
//     await mongoose.connect(process.env.MONGO_URI)
    
// }

const MenuSchema = new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type:String, required: true, unique: true},
    description: {type:String, required: true},
    img: {type:String, required: true},
    category: {type:String, required: true},
    price: {type: Number, required: true},
   
    
}, {timestamps : true})

mongoose.models = {};
export default  mongoose.model("Menu",MenuSchema );
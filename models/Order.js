

const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    menus: [
        {
            menuId: {type: String},
            quantity: {type: Number, default: 1}
        }
    ],
    amount: {type: Number, required: true}
    
}, {timestamps : true})

export default mongoose.model("Order",OrderSchema );
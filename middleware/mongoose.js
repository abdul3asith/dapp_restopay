// import mongoose from "mongoose";

//  const connectDb =  async (req, res) => {
//     // try {
//     //     await mongoose.connect('mongodb+srv://abdulbasith0792:Fd5kA320CK4wB1If@cluster0.0cah0m1.mongodb.net/authapp');
//     //     console.log("Connected to MONGODB");
//     // }
//     // catch (error) {
//     //     console.log("error connecting mongdb:", error);
//     // }
//     if(mongoose.connections[0].readyState){
//         return handler(req, res)
//     }
//     await mongoose.connect(process.env.MONGO_URI, {
//         bufferTimeoutMS: 30000, 
//       })
//     return handler(req, res);

// };

// export default connectDb;



import mongoose from "mongoose";

const connectMongoDB = async() => {
    try {
      await  mongoose.connect(process.env.MONGO_URI);
        // console.log("connected to mongodb");
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB
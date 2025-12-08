// import mongoose from "mongoose";

// const connectDB = async () => {

//   mongoose.connection.on('connected', ()=>{
//     console.log("DB connected");
//   })
  
//   await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
// }

// export default connectDB;



import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB connected");
  });

  await mongoose.connect(process.env.MONGO_URI);
};

export default connectDB;

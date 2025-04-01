import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://pankaj_44:pankaj_44@cluster0.vau2g.mongodb.net/Blog_DB"
  );
  console.log("DB Connected");
};

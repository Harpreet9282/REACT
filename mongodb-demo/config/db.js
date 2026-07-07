import mongoose from "mongoose";

const connectDB=() => {
  mongoose.connect("mongodb://hmehmi118_db_user:HarpreetMehmi@ac-511g7ot-shard-00-00.bk2j5w2.mongodb.net:27017,ac-511g7ot-shard-00-01.bk2j5w2.mongodb.net:27017,ac-511g7ot-shard-00-02.bk2j5w2.mongodb.net:27017/?ssl=true&replicaSet=atlas-b1mmsv-shard-0&authSource=admin&appName=Cluster0").then(console.log("Connected to MongoDB")).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });
};

export default connectDB;
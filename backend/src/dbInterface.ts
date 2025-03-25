import { MongoClient, ObjectId } from "mongodb";


// get mongo db uri string from enviroment file
const uri: string | undefined = process.env.MONGODB_URI;
const client = new MongoClient(uri!);
const database = client.db('cotangles');
  
  process.on("SIGINT", async () => {
    await client.close();
    console.log("MongoDB connection closed");
    process.exit(0);
  });
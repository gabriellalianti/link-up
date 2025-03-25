import { MongoClient, ObjectId } from "mongodb";


// get mongo db uri string from enviroment file
const uri: string | undefined = process.env.MONGODB_URI;
const client = new MongoClient(uri!);
const database = client.db('cotangles');

// export async function setData(collectionName: string, data: User | Calendar) {
//     try {
//       await client.connect();
//       const collection = database.collection(collectionName);
//       return await collection.insertOne(data);  // insert data in collection
//     } catch (error) {
//       console.error("failed set data", error);
//     }
//   }
  
//   // query a document from a collection (calendars or users)
//   export async function getData(collectionName: string, query = {}) {
//     try {
//       await client.connect();
//       const collection = database.collection(collectionName);
//       return await collection.find(query).toArray(); // finds data in collection
//     } catch (error) {
//       console.error("failed fetching data", error);
//     }
//   }
  
  process.on("SIGINT", async () => {
    await client.close();
    console.log("MongoDB connection closed");
    process.exit(0);
  });
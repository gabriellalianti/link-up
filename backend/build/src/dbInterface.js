"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
// get mongo db uri string from enviroment file
const uri = process.env.MONGODB_URI;
const client = new mongodb_1.MongoClient(uri);
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
process.on("SIGINT", () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.close();
    console.log("MongoDB connection closed");
    process.exit(0);
}));

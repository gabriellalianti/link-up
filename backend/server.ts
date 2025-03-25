import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserProfile from "./src/UserProfile";
import { uuid } from "uuidv4";
const app = express();
app.use(cors({
  origin: "http://localhost:5173", // Only allow this origin
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],}));
app.use(express.json());

const uri = "mongodb+srv://atmandy345:andy0304@linkup.z9xlt.mongodb.net/LinkUp?retryWrites=true&w=majority&appName=LinkUp";

// MongoDB Connection
mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Error connecting to MongoDB:", err));


// Profile
app.post("/api/profile", async (req, res) => {
  try {
    const newUserProfile = new UserProfile(req.body);
    newUserProfile.userId = uuid();
    // saves the data mongo inbuilt
    await newUserProfile.save();
    res.status(201).json({ message: "Profile Created", profile: newUserProfile });
  } catch (error) {
    res.status(400).json({ error: "Invalid data format", details: error });
  }
});

// Get Profile Info
app.get("/api/getProfile", async (req, res) => {
  try {
    const userProfiles = await UserProfile.find();
    res.status(200).json({ profiles: userProfiles });
  } catch (error) {
    res.status(400).json({ error: "Unable to fetch profiles", details: error });
  }
});

// Start Server
app.listen(5001, () => console.log("Server running on port 5001"));

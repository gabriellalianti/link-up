import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserProfile from "./src/UserProfile";
import Post from "./src/UserProfile";
import Market from "./src/UserProfile";
import { uuid } from "uuidv4";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // Only allow this origin
  methods: ["GET", "POST", "PUT", "DELETE",],
  credentials: true
}));

app.use(express.json({ limit: "100mb" })); // Increase limit (default is ~1MB)
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

const uri = "mongodb+srv://atmandy345:andy0304@linkup.z9xlt.mongodb.net/LinkUp?retryWrites=true&w=majority&appName=LinkUp";

// MongoDB Connection
mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Error connecting to MongoDB:", err));


app.post("/api/login", async(req, res) => {
  try {
    const { email, password } = req.body;
    console.log (email);
    console.log (password);
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await UserProfile.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const JWT_SECRET = "Hello you can steal this"
    const token = jwt.sign({ userId: user.userId, username: email }, JWT_SECRET, {
      expiresIn: '1h', // EXPIRATION TIME !!!
    });
    
    console.log(token);

    res.cookie('token', token, {
      httpOnly: false,
      secure: false, // Set to true in production when using HTTPS
      maxAge: 3600000, // 1 hour in milliseconds
      sameSite: "lax", // KEEP THIS AS LAX DO NOT CHANGE TO NONE OR CHROME WILL FUCK YOU OVER
    })

    // Login successful
    res.status(200).json({ message: "Login successful", user });

  } catch (error) {
    res.status(400).json({ error: "Invalid Login", details: error });
  }
})

app.post("/api/logout", async(req, res) => {
  try {
    // Clear the cookie
    res.clearCookie('token', {
      httpOnly: false, // This should match how the cookie was set
      secure: false,   // Set to true in production when using HTTPS
      sameSite: 'lax', // This should match how the cookie was set
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: "Logout failed", details: error });
  }
})
// Profile
app.post("/api/profile", async (req, res) => {
  try {
    const newUserProfile = new UserProfile(req.body);
    console.log(newUserProfile);
    newUserProfile.userId = uuid();

    const JWT_SECRET = "Hello you can steal this"
    const token = jwt.sign({ userId: newUserProfile.userId, username: newUserProfile.name }, JWT_SECRET, {
      expiresIn: '1h', // EXPIRATION TIME !!!
    });
    // saves the data mongo inbuilt
    await newUserProfile.save();

    res.cookie('token', token, {
      httpOnly: false,
      secure: false, // Set to true in production when using HTTPS
      maxAge: 3600000, // 1 hour in milliseconds
      sameSite: "lax", // KEEP THIS AS LAX DO NOT CHANGE TO NONE OR CHROME WILL FUCK YOU OVER
    })

    res.status(201).json({ message: "Profile Created", profile: newUserProfile });
  } catch (error) {
    res.status(400).json({ error: "Invalid data format", details: error });
  }
});

// Get Profile Info
app.get("/api/getProfile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const userProfile = await UserProfile.findOne({ userId });
    console.log(userProfile);
    if (userProfile) {
      res.status(200).json(userProfile);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Unable to fetch profile", details: error });
  }
});

app.post("/api/post", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    console.log(newPost);

    // saves the data mongo inbuilt
    await newPost.save();
  } catch (error) {
    res.status(400).json({ error: "Invalid post format", details: error })
  }
})

// Start Server
app.listen(5001, () => console.log("Server running on port 5001"));

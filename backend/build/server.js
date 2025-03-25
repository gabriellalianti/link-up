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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const UserProfile_1 = __importDefault(require("./src/UserProfile"));
const uuidv4_1 = require("uuidv4");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:5173", // Only allow this origin
    methods: ["GET", "POST", "PUT", "DELETE",],
    credentials: true
}));
app.use(express_1.default.json({ limit: "100mb" })); // Increase limit (default is ~1MB)
app.use(express_1.default.urlencoded({ extended: true, limit: "100mb" }));
const uri = "mongodb+srv://atmandy345:andy0304@linkup.z9xlt.mongodb.net/LinkUp?retryWrites=true&w=majority&appName=LinkUp";
// MongoDB Connection
mongoose_1.default.connect(uri)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("Error connecting to MongoDB:", err));
app.post("/api/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        console.log(email);
        console.log(password);
        // Validate input
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }
        const user = yield UserProfile_1.default.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        if (user.password !== password) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const JWT_SECRET = "Hello you can steal this";
        const token = jsonwebtoken_1.default.sign({ userId: user.userId, username: email }, JWT_SECRET, {
            expiresIn: '1h', // EXPIRATION TIME !!!
        });
        console.log(token);
        res.cookie('token', token, {
            httpOnly: false,
            secure: false, // Set to true in production when using HTTPS
            maxAge: 3600000, // 1 hour in milliseconds
            sameSite: "lax", // KEEP THIS AS LAX DO NOT CHANGE TO NONE OR CHROME WILL FUCK YOU OVER
        });
        // Login successful
        res.status(200).json({ message: "Login successful", user });
    }
    catch (error) {
        res.status(400).json({ error: "Invalid Login", details: error });
    }
}));
app.post("/api/logout", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Clear the cookie
        res.clearCookie('token', {
            httpOnly: false, // This should match how the cookie was set
            secure: false, // Set to true in production when using HTTPS
            sameSite: 'lax', // This should match how the cookie was set
        });
        res.status(200).json({ message: "Logged out successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Logout failed", details: error });
    }
}));
// Profile
app.post("/api/profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUserProfile = new UserProfile_1.default(req.body);
        console.log(newUserProfile);
        newUserProfile.userId = (0, uuidv4_1.uuid)();
        const JWT_SECRET = "Hello you can steal this";
        const token = jsonwebtoken_1.default.sign({ userId: newUserProfile.userId, username: newUserProfile.name }, JWT_SECRET, {
            expiresIn: '1h', // EXPIRATION TIME !!!
        });
        // saves the data mongo inbuilt
        yield newUserProfile.save();
        res.cookie('token', token, {
            httpOnly: false,
            secure: false, // Set to true in production when using HTTPS
            maxAge: 3600000, // 1 hour in milliseconds
            sameSite: "lax", // KEEP THIS AS LAX DO NOT CHANGE TO NONE OR CHROME WILL FUCK YOU OVER
        });
        res.status(201).json({ message: "Profile Created", profile: newUserProfile });
    }
    catch (error) {
        res.status(400).json({ error: "Invalid data format", details: error });
    }
}));
// Get Profile Info
app.get("/api/getProfile/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const userProfile = yield UserProfile_1.default.findOne({ userId });
        console.log(userProfile);
        if (userProfile) {
            res.status(200).json(userProfile);
        }
        else {
            res.status(404).json({ error: "User not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: "Unable to fetch profile", details: error });
    }
}));
// app.post("/api/post", async (req, res) => {
//   try {
//     const newPost = new Post(req.body);
//     console.log(newPost);
//     // saves the data mongo inbuilt
//     await newPost.save();
//   } catch (error) {
//     res.status(400).json({ error: "Invalid post format", details: error })
//   }
// })
// Start Server
app.listen(5001, () => console.log("Server running on port 5001"));

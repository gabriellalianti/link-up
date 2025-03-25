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
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:5173", // Only allow this origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));
app.use(express_1.default.json());
const uri = "mongodb+srv://atmandy345:andy0304@linkup.z9xlt.mongodb.net/LinkUp?retryWrites=true&w=majority&appName=LinkUp";
// MongoDB Connection
mongoose_1.default.connect(uri)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("Error connecting to MongoDB:", err));
// Profile
app.post("/api/profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUserProfile = new UserProfile_1.default(req.body);
        newUserProfile.userId = (0, uuidv4_1.uuid)();
        // saves the data mongo inbuilt
        yield newUserProfile.save();
        res.status(201).json({ message: "Profile Created", profile: newUserProfile });
    }
    catch (error) {
        res.status(400).json({ error: "Invalid data format", details: error });
    }
}));
// Get Profile Info
app.get("/api/getProfile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userProfiles = yield UserProfile_1.default.find();
        res.status(200).json({ profiles: userProfiles });
    }
    catch (error) {
        res.status(400).json({ error: "Unable to fetch profiles", details: error });
    }
}));
// Start Server
app.listen(5001, () => console.log("Server running on port 5001"));

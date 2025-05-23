"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Market = exports.Post = exports.UserProfile = void 0;
const mongoose_1 = __importStar(require("mongoose"));
// MongoDB Schema for user profile
const UserProfileSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    yearOfStudy: { type: String, required: true },
    degree: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true },
    bio: { type: String, required: true },
    courses: { type: [String], required: true },
    links: { type: [String], default: [] },
    password: { type: String, required: true },
    profilePicture: { type: String },
    backgroundPicture: { type: String },
});
// Create and export the Mongoose model
exports.UserProfile = mongoose_1.default.model("UserProfile", UserProfileSchema, "Users");
exports.default = exports.UserProfile;
const PostSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    title: { type: String, required: true },
    captions: { type: String, required: true },
    photo: { type: String, default: "" },
    timestamp: { type: String, default: Date.now().toLocaleString() },
    likes: { type: Number, default: 0 },
    comments: { type: [String], default: [] }
});
exports.Post = mongoose_1.default.model("Post", PostSchema, "Posts");
const MarketSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    productName: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true, default: "" },
    timestamp: { type: String, default: Date.now().toLocaleString() },
    price: { type: Number, required: true, default: 0 },
    tags: { type: [String], default: [] },
    star: { type: [] }
});
exports.Market = mongoose_1.default.model("Market", MarketSchema, "Market");

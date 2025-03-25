import mongoose, { Schema, Document } from "mongoose";

// TypeScript interface for user profile
interface IUserProfile extends Document {
  userId: string;
  name: string;
  yearOfStudy: string;
  degree: string;
  dateOfBirth: Date;
  email: string;
  bio: string;
  courses: Array<string>;
  links: Array<string>;
  password: string;
  profilePicture?: string;
  backgroundPicture?: string;
}

// MongoDB Schema for user profile
const UserProfileSchema = new Schema<IUserProfile>({
  userId: { type: String, required: true, unique: true },  
  name: { type: String, required: true }, 
  yearOfStudy: { type: String, required: true },
  degree: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: true },
  bio: { type: String, required: true },
  courses: { type: [String], required: true }, 
  links: { type: [String], default: [] }, 
  password: { type: String, required: true},
  profilePicture: { type: String },
  backgroundPicture: { type: String },
});

// Create and export the Mongoose model
export const UserProfile = mongoose.model<IUserProfile>("UserProfile", UserProfileSchema, "Users");

export default UserProfile;

interface IPost extends Document {
  username: string;
  title: string;
  captions: string;
  photo?: string;
  timestamp: string;
  likes: number;
  comments: string[];
}

const PostSchema = new Schema<IPost>({
  username: { type: String, required: true},
  title: { type: String, required: true },
  captions: { type: String, required: true },
  photo: { type: String, default: "" },
  timestamp: { type: String, default: Date.now().toLocaleString() },
  likes: { type: Number, default: 0 },
  comments: { type: [String], default:[] }
})

export const Post = mongoose.model<IUserProfile>("Post", PostSchema, "Posts");

interface IMarket extends Document {
  username: string;
  productName: string;
  description: string;
  photo: string;
  timestamp: string;
  price: number;
  tags?: string[];
  star?: number;
}

const MarketSchema = new Schema<IMarket>({
  username: { type: String, required: true},
  productName: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true, default: "" },
  timestamp: { type: String, default: Date.now().toLocaleString() },
  price: { type: Number, required: true, default: 0 },
  tags: { type: [String], default:[] },
  star: { type: [] }
})

export const Market = mongoose.model<IUserProfile>("Market", MarketSchema, "Market");

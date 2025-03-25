import mongoose, { Schema, Document } from "mongoose";

// TypeScript interface for user profile
interface IUserProfile extends Document {
  userId: string;
  name: string;
  yearOfStudy: string;
  degree: string;
  dateOfBirth: Date;
  bio: string;
  courses: Array<string>;
  links: Array<string>;
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
  bio: { type: String, required: true },
  courses: { type: [String], required: true }, 
  links: { type: [String], default: [] }, 
  profilePicture: { type: String },
  backgroundPicture: { type: String },
});

// Create and export the Mongoose model
const UserProfile = mongoose.model<IUserProfile>("UserProfile", UserProfileSchema, "Users");

export default UserProfile;

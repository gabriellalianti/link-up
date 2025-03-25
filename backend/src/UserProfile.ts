import mongoose, { Schema, Document } from "mongoose";

// TypeScript interface
interface IUserProfile {
  profileName: string;
  yearOfStudy: string;
  degree: string;
  yearOfBirth: Date;
  bio: string;
  courses: string;
  profilePicture?: string; // Optional field
  userId: string;
}

// Example MongoScheme
const UserProfileSchema = new Schema<IUserProfile>({
  profileName: { type: String, required: true },
  yearOfStudy: { type: String, required: true },
  degree: { type: String, required: true },
  yearOfBirth: { type: Date, required: true },
  bio: { type: String, required: true },
  courses: { type: String, required: true },
  profilePicture: { type: String }, 
  userId: { type: String, required: true, unique: true }
});

// Create and export the Mongoose model
const UserProfile = mongoose.model<IUserProfile>("UserProfile", UserProfileSchema, "Users");
export default UserProfile;

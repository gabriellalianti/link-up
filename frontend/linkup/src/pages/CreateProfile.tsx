import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "../components/components/ui/card";
import { Button } from "../components/components/ui/button";
import { Input } from "../components/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "../components/components/ui/avatar";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CreateProfile() {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    yearOfStudy: "",
    degree: "",
    dateOfBirth: "",
    bio: "",
    courses: ["", "", ""], // Ensuring at least 3 course inputs
    profilePicture: "",
    email: "",
    password: "",
  });

  const blobToBase64 = (blob: Blob) =>
    new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });

  // Handle Profile Picture Change
  const handleProfilePicChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64Image = await blobToBase64(file); // Convert to Base64
      setProfilePic(base64Image); // Preview image
      setFormData((prev) => ({ ...prev, profilePicture: base64Image })); // Store in state
    }
  };

  const handleCourseChange = (index: number, value: string) => {
    const newCourses = [...formData.courses];
    newCourses[index] = value;
    setFormData((prev) => ({ ...prev, courses: newCourses }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (response.ok) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100 p-4">
      <Card className="w-4/5 p-6 bg-white mx-auto my-8">
        <CardHeader>
          <h2 className="text-2xl font-bold mb-4 text-left">Create Your Profile</h2>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/3 space-y-4 flex flex-col items-start">
                <div className="flex flex-col items-start">
                  <Avatar className="w-48 h-48 border border-black rounded-full">
                    {profilePic ? <AvatarImage src={profilePic} alt="Profile Picture" /> : null}
                    <AvatarFallback>{formData.name.charAt(0) || "U"}</AvatarFallback>
                  </Avatar>
                  <label htmlFor="profilePicInput" className="mt-2 cursor-pointer bg-yellow-300 text-black px-3 py-2 rounded-md text-sm">
                    Choose File
                  </label>
                  <input id="profilePicInput" type="file" accept="image/*" onChange={handleProfilePicChange} className="hidden" />
                </div>
                <div className="w-full">
                  <label className="block mt-2 text-sm font-medium text-gray-700">Full Name</label>
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="w-full" />
                </div>
              </div>

              <div className="w-full md:w-2/3 space-y-4">
                <div className="max-w-xs">
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <Input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Title of Studies</label>
                  <Input name="degree" value={formData.degree} onChange={handleChange} placeholder="e.g. Bachelor of Computer Science" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Year of Studies</label>
                  <Input name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} placeholder="e.g. Year 2 Term 2" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Bio (max 80 words)</label>
                  <textarea name="bio" rows={3} value={formData.bio} onChange={handleChange} placeholder="Tell us about yourself..." className="w-full p-2 border rounded-md bg-transparent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Courses (up to 4 - e.g. COMP1511)</label>
                  <div className="flex gap-2">
                    {formData.courses.map((course, index) => (
                      <Input key={index} value={course} onChange={(e) => handleCourseChange(index, e.target.value)} placeholder={`Course ${index + 1}`} className="flex-1" />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <Input name="email" value={formData.email} onChange={handleChange} className="bg-gray-100" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Create Password</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter a password"
                      className="w-full pr-12"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center px-3 bg-white border">
                      {showPassword ? <EyeOff className="w-5 h-5 text-gray-600" /> : <Eye className="w-5 h-5 text-gray-600" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="bg-yellow-300 text-black">
                Create Profile
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreateProfile;

import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "../components/components/ui/card";
import { Button } from "../components/components/ui/button";
import { Input } from "../components/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "../components/components/ui/avatar";
import { Eye, EyeOff, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom"
import backgroundImg from "../assets/defaultbackgroundimg.png"

function UpdateProfile() {
  const [profilePic, setProfilePic] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [studiesTitle, setStudiesTitle] = useState("");
  const [yearOfStudies, setYearOfStudies] = useState("");
  const [bio, setBio] = useState("");
  const [courses, setCourses] = useState(["", "", "", ""]);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Email from previous page (fixed for now - call from db?)
  const email = "z1234567@ad.unsw.edu.au";

  const handleBackgroundImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackgroundImage(URL.createObjectURL(file));
    }
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleCourseChange = (index, value) => {
    const newCourses = [...courses];
    newCourses[index] = value;
    setCourses(newCourses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const wordCount = bio.trim().split(/\s+/).filter((word) => word).length;
    if (wordCount > 80) {
      alert("Bio cannot exceed 60 words.");
      return;
    }
    const profileData = {
      profilePic,
      fullName,
      dob,
      studiesTitle,
      yearOfStudies,
      bio,
      courses: courses.filter((c) => c.trim() !== ""),
      email,
      password,
    };
    // console.log("Profile Updated:", profileData);
    // alert("Profile updated successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100 p-4">
      <Card className="w-4/5 p-6 bg-white mx-auto my-8">
        <CardHeader>
          <h2 className="text-2xl font-bold mb-4 text-left">Update Your Profile</h2>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              {/* LEFT COLUMN CARD */}
              <Card className="w-full bg-white md:w-1/3 flex flex-col relative">
                {/* BACKGROUND IMAGE CONTAINER */}
                <div className="w-full h-[150px] overflow-hidden rounded-t-xl">
                  <img
                    className="w-full h-full object-cover"
                    src={backgroundImage || backgroundImg}
                    alt="Background"
                  />

                  <div className="absolute top-40 right-2">
                    <label
                      htmlFor="bgImageInput"
                      className="bg-yellow-300 text-black px-3 py-2 rounded-md text-sm cursor-pointer flex items-center justify-center">
                        <Camera className="w-4 h-4" />
                    </label>
                    <input
                      id="bgImageInput"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleBackgroundImageChange}/>
                  </div>
                </div>

                {/* PROFILE PICTURE - ON TOP OF BACKGROUND IMAGE */}
                {profilePic ? (
                  <Avatar
                    className="absolute w-40 h-40 border border-black rounded-full left-4 top-[72px]">
                    <AvatarImage src={profilePic} alt="Profile Picture" />
                    <AvatarFallback>{fullName.charAt(0) || "Profile Picture"}</AvatarFallback>
                  </Avatar>
                ) : (
                  <Avatar
                    className="absolute w-40 h-40 border border-black rounded-full left-4 top-[72px]">
                    <AvatarFallback>Profile Picture</AvatarFallback>
                  </Avatar>
                )}

                {/* CARD CONTENT */}
                <CardContent className="mt-[100px] flex-grow">
                  <div className="space-y-4 flex flex-col items-start">
                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="profilePicInput"
                        className="mt-0 cursor-pointer bg-yellow-300 text-black px-3 py-2 rounded-md text-sm">
                        Choose File
                      </label>
                      <input
                        id="profilePicInput"
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePicChange}
                        className="hidden"
                      />
                    </div>

                    <div className="w-full">
                      <label className="block mt-2 text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <Input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>

                    <div className="max-w-xs">
                      <label className="block text-sm font-medium text-gray-700">
                        Date of Birth
                      </label>
                      <Input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full custom-date"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* RIGHT COLUMN CARD */}
              <div className="w-full md:w-2/3 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Degree</label>
                  <Input
                    value={studiesTitle}
                    onChange={(e) => setStudiesTitle(e.target.value)}
                    placeholder="e.g. Bachelor of Computer Science"
                    className="w-full"/>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Year of Degree</label>
                  <Input
                    value={yearOfStudies}
                    onChange={(e) => setYearOfStudies(e.target.value)}
                    placeholder="e.g. Year 2 Term 2"
                    className="w-full"/>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Bio (max 60 words)</label>
                  <textarea
                    rows={3}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell us about yourself..."
                    className="w-full p-2 border rounded-md bg-transparent"/>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Courses (up to 4 - e.g. COMP1511)</label>
                  <div className="flex gap-2">
                    {courses.map((course, index) => (
                      <Input
                        key={index}
                        value={course}
                        onChange={(e) => handleCourseChange(index, e.target.value)}
                        placeholder={`Course ${index + 1}`}
                        className="flex-1"/>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <Input value={email} readOnly className="bg-gray-100" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Create Password</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter a password"
                      className="w-full pr-12"/>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 bg-transparent border-0 outline-none flex items-center px-3">
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-gray-600" />
                      ) : (
                        <Eye className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end" onClick={() => navigate('/home')}>
              <Button type="submit" className="bg-yellow-300 text-black">
                Update Profile
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default UpdateProfile;

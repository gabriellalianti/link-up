import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FirstProfile() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        profileName: "",
        yearOfStudy: "",
        degree: "",
        yearOfBirth: "",
        bio: "",
        courses: "",
    });

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5001/api/profile", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                navigate("/home"); 
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="flex flex-row items-center justify-center w-screen h-screen bg-yellow-200">
            <div className="w-[600px] h-[800px] bg-yellow-200 rounded-xl flex flex-col items-center">
                <form 
                    className="bg-white p-10 rounded-xl shadow-xl min-w-[450px] h-[820px]"
                    onSubmit={handleSubmit}
                    onClick={(e) => e.stopPropagation()}
                >
                    <p className="gap-2 mt-3 mb-2 font-bold text-xl ">Create Your Profile</p>
                    
                    <input name="profileName" placeholder="Profile Name" className="mb-5 w-full p-2 border rounded text-black bg-white"
                        value={formData.profileName} onChange={handleChange} required />

                    <input name="yearOfStudy" placeholder="Year Of Study" className="mb-5 w-full p-2 border rounded bg-white"
                        value={formData.yearOfStudy} onChange={handleChange} required />

                    <input name="degree" placeholder="Degree" className="mb-5 w-full p-2 border rounded bg-white"
                        value={formData.degree} onChange={handleChange} required />

                    <div className="flex justify-between items-baseline border rounded mb-5 p-2">
                        <p className="text-base font-thin">Year Of Birth</p>
                        <input name="yearOfBirth" type="date" className="w-2/5 rounded px-2 cursor-pointer hover:bg-gray-100 bg-white"
                            value={formData.yearOfBirth} onChange={handleChange} required />
                    </div>

                    <textarea name="bio" placeholder="Bio" className="mb-5 w-full p-2 border rounded bg-white h-[160px]"
                        value={formData.bio} onChange={handleChange} required />

                    <input name="courses" placeholder="Course Taking this Term" className="mb-5 w-full p-2 border rounded bg-white"
                        value={formData.courses} onChange={handleChange} required />

                    <div className="flex flex-row items-end justify-end">
                        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-lg w-[150px] h-[50px]">
                            <p>Update Profile</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FirstProfile;

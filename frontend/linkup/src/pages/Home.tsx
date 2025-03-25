import { Card, CardHeader, CardContent, CardFooter } from "../components/components/ui/card";
import { Button } from "../components/components/ui/button";
import { Input } from "../components/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "../components/components/ui/avatar";
import { ScrollArea } from "../components/components/ui/scroll-area";
import { Home, MessageCircle, Bell, Users, Edit } from "lucide-react";

import home from "../assets/home.svg"
import links from "../assets/links.svg"
import market from "../assets/market.svg"
import messages from "../assets/messages.svg"
import notification from "../assets/notification.svg"
import logo from "../assets/1.png"
import logout from "../assets/logout.svg"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Cookies from "js-cookie"
import { jwtDecode }from "jwt-decode";

function HomePage() {
  const navigate = useNavigate();
  
  const [profile, setProfile] = useState<{
    bio: string,
    courses: string[],
    name: string,
    degree: string,
    userId: string,
    dateOfBirth: string,
    yearOfStudy: string,
    links: string[],
    __v: string,
    _id: string,
  }>({
    bio: "",
    courses: [],
    degree: "",
    name: "",
    userId: "",
    dateOfBirth: "",
    yearOfStudy: "",
    links: [],
    __v: "",
    _id: ""
  });

  useEffect (() => {
    const fetchProfile = async () => {
      try {
          const cooks = Cookies.get("token")
          if (cooks) {
            const decodedToken = jwtDecode(cooks);
            const userId = decodedToken.userId;
            console.log(userId);
            const response = await fetch(`http://localhost:5001/api/getProfile/${userId}`, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            });
  
            if (response.ok) {
                const data = await response.json();  
                const date = new Date(data.dateOfBirth);

                const formattedDate = date.toISOString().split('T')[0];
                data.dateOfBirth = formattedDate;
                
                console.log(data);
                setProfile(data);
            }
          }
      } catch (error) {
          console.error("Error submitting form:", error);
      }
    }
    fetchProfile();
  }, [])

  return (
    <div className="flex flex-col w-screen h-screen">
      {/* Nav Bar */}
      <header className="fixed bg-white w-full min-h-[8%] border-b justify-center">
        <img src={logo} className="fixed left-0 ml-5 h-[80px] w-[100px]"/>

        <div className="flex flex-row w-screen justify-center text-sm mt-2 gap-20">
            <div 
                className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer"
                onClick={() => navigate('/home')}
            >
                <img src={home} className="w-[25px]"/>
                <span className="mb-1">Home</span>
            </div>

            <div 
                className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer "
                onClick={() => navigate('/my-links')}
            >
                <img src={links} className="w-[25px]"/>
                <span className="mb-1">My Links</span>
            </div>

            <div 
                className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer"
                onClick={() => navigate('/market')}
            >
                <img src={market} className="w-[25px]"/>
                <span className="mb-1">Market</span>
            </div>

            <div 
                className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer"
                onClick={() => navigate('/messages')}
            >
                <img src={messages} className="w-[25px]"/>
                
                <span className="mb-1">Messages</span>
                
            </div>

            <div 
                className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer"
                onClick={() => navigate('/notifications')}
            >
                <img src={notification} className="w-[25px]"/>
                <span className="mb-1">Notifications</span>
            </div>
    </div>
</header>

      {/* Main Content */}
      <main className="mt-[80px] flex flex-col flex-grow overflow-y-auto">
        <div className="flex flex-grow p-6 gap-6">
          {/* Left Column */}
          <Card className="w-1/4 p-4 h-fit">
            <CardHeader>
              <h2 className="text-lg font-bold">People You Might Know</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {["Alisha Asparagus", "Benny Broccoli", "Fine shyt", "Smol Waifu", "Simp Slayer"].map((person) => (
                  <li key={person} className="flex justify-between">
                    <span>{person}</span>
                    <Button size="sm" className="bg-white text-black hover:bg-black/10">+</Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Middle Column - Posts Section */}
          <div className="w-[60%] flex flex-col gap-4">
            {/* Post Input Card */}
            <Card className="p-4 h-[110px]">
              <div className="flex items-center gap-4">
                <Avatar className="self-start">
                  <AvatarImage src="https://via.placeholder.com/40" />
                  <AvatarFallback>FN</AvatarFallback>
                </Avatar>
                <Button className="w-full h-[70px] bg-white text-black py-2 px-4 rounded-lg text-left flex justify-start items-center hover:bg-white">
                  <span>Start a post...</span>
                </Button>
              </div>
            </Card>

            {/* Posts Feed Section */}
            <ScrollArea className="h-[calc(100vh-180px)] space-y-4">
              {[1, 2, 3].map((post) => (
                <Card key={post} className="p-2 shadow-md border border-gray-200 mb-4">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src="https://via.placeholder.com/40" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div>
                        <h2 className="text-xl font-bold">User {post}</h2>
                        <h3 className="text-lg">Studies {post}</h3>
                        <p className="text-sm text-gray-500">5 minutes ago</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mx-6">
                    <p className="mb-4">
                      This is a sample post content for user {post}. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                    </p>
                    {/* Post Image */}
                    <img
                      src="https://kpopping.com/documents/8e/5/800/240607-aespa-Winter-Makestar-Fansign-documents-1(10).jpeg?v=c10dd"
                      alt="Post content"
                      className="max-h-[300px] w-auto rounded-lg border border-gray-200"
                    />
                  </CardContent>
                  <div className="h-4"></div>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Like</Button>
                    <Button variant="outline">Comment</Button>
                  </CardFooter>
                </Card>
              ))}
            </ScrollArea>
          </div>

          {/* Right Column - Profile Card */}
          <Card className="w-1/3 p-1 h-fit relative">
            <Button className="absolute top-10 right-8">
              <Edit className="w-5 h-5" />
            </Button>
            <CardHeader>
              <div className="flex flex-col items-left">
                <Avatar className="w-40 h-40">
                  <AvatarImage src="https://via.placeholder.com/80" />
                  <AvatarFallback>FN</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-bold mt-4">{profile.name}</h1>
                <p className="text-sm text-gray-700">{ profile.dateOfBirth }</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-start justify-between">
                <div>
                  <p> {profile.degree} </p>
                  <p> {profile.yearOfStudy} </p>
                </div>
                <div className="flex flex-wrap gap-2 max-w-[50%] justify-end items-start">
                  {profile.courses
                    .map((course) => (
                      <Card key={course} className="px-2 py-1 bg-gray-200 rounded-md text-xs font-semibold flex items-center">
                        {course}
                      </Card>
                  ))}
                </div>
              </div>
            </CardContent>
            <div className="bg-white p-4 mt-2 rounded-lg shadow-sm border border-gray-200 w-[90%] mx-auto mb-4">
              <h3 className="text-lg font-bold">Bio</h3>
              <p> {profile.bio} </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default HomePage;

  
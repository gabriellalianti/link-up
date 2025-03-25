import home from "../assets/home.svg"
import links from "../assets/links.svg"
import market from "../assets/market.svg"
import messages from "../assets/messages.svg"
import notification from "../assets/notification.svg"
import logo from "../assets/1.png"
import logout from "../assets/logout.svg"
import { useNavigate } from "react-router-dom"
import avatar from "../assets/avatar-1.jpg"
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode"
import { Card, CardHeader, CardContent, CardFooter } from "../components/components/ui/card";
import { Button } from "../components/components/ui/button";
import { Input } from "../components/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "../components/components/ui/avatar";
import { ScrollArea } from "../components/components/ui/scroll-area";
import { Home, MessageCircle, Bell, Users, Edit } from "lucide-react";
import StarRatings from 'react-star-ratings';
import search from "../assets/search.svg"
import { useEffect, useState } from "react"

function Market () {
    const navigate = useNavigate();
    // ! note: maybe would just make backend pass the type of notif instead of the msg string?
    const people = [
            {name: "Alisha Asparagus", pfp: avatar, notification: "sent you a new message"},
            {name: "Lebron Huang", pfp: avatar, notification: "replied to your market message (LV Supreme Leather Bomber Jacket)"},
            {name: "Alisha Asparagus", pfp: avatar, notification: "liked your post (Why is everyone doing CS?  This is a genuine question. T...)"}
        ]
    const [profile, setProfile] = useState<{
        bio: string,
        courses: string[],
        name: string,
        degree: string,
        userId: string,
        dateOfBirth: string,
        yearOfStudy: string,
        email: string,
        profilePicture: string,
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
        email: "",
        profilePicture: "",
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
                    console.log(data.profilePicture)
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
        <>
            <div className="flex flex-col w-screen h-screen">
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
                                className="flex flex-col justify-center items-center border-b-2 border-black rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer"
                                onClick={() => navigate('/notifications')}
                            >
                                <img src={notification} className="w-[25px]"/>
                                <span className="mb-1">Notifications</span>
                            </div>
                             <img src={logout} className="fixed right-0 mt-3 h-[30px] w-[100px]" onClick={()=> navigate('/')}/>
                    </div>
                </header>

                <div className="flex flex-row bg-gray-200 w-full h-full overflow-y-scroll justify-center items-center gap-8">
                    {/* <div className="flex justify-center bg-gray-200 w-full">
                            <div className='xl:hidden lg:hidden md:hidden flex flex-col w-full max-w-[97%] mt-4 gap-4'>
                                <div className='flex flex-row justify-between'>
                                </div>
                            </div>
                            <div className="xl:flex md:flex lg:flex sm:hidden flex flex-row w-full max-w-[97%] justify-between mt-4 gap-x-4">
                            </div>
                    </div> */}
                    <div className="bg-white w-[780px] h-[600px] rounded-xl shadow-md flex flex-col items-center pt-[18px]">
                        <p className="font-semibold text-lg">Notifications</p>
                        <div className="p-3 w-[100%] h-[12px] border-b-2">
                        </div>
                        {/* new notifs */}
                        { people.map((people, index) => (
                            <div className="flex items-center p-3 bg-yellow-300 w-[100%] h-[60px] bg-opacity-40 border-b-2">
                                <img src={people.pfp} className="w-[32px] h-[32px] rounded-full mr-3" />
                                <span className="mb-1 font-semibold"> {people.name} </span>
                                <span className="mb-1 ml-[3px] font-light">{people.notification}</span>
                            </div>
                        ))}
                        {/* read notifs */}
                        { people.map((people, index) => (
                            <div className="flex items-center p-3 w-[100%] h-[60px] bg-opacity-40 border-b-2">
                                <img src={people.pfp} className="w-[32px] h-[32px] rounded-full mr-3" />
                                <span className="mb-1 font-semibold"> {people.name} </span>
                                <span className="mb-1 ml-[3px] font-light">{people.notification}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Profile Card */}
                    <Card className="w-1/4 p-1 h-fit relative">
                        <Button className="absolute top-10 right-8">
                        <Edit className="w-5 h-5" />
                        </Button>
                        <CardHeader>
                        <div className="flex flex-col items-left">
                            <Avatar className="w-40 h-40">
                            <AvatarImage src={profile.profilePicture} />
                            <AvatarFallback>FN</AvatarFallback>
                            </Avatar>
                            <h1 className="text-xl font-bold mt-4">{profile.name}</h1>
                            <p className="text-sm text-gray-700">{profile.dateOfBirth}</p>
                        </div>
                        </CardHeader>
                        <CardContent>
                        <div className="flex items-start justify-between">
                            <div>
                            <p>{profile.degree}s</p>
                            <p>{profile.yearOfStudy}</p>
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
                        <p>{profile.bio} </p>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Market;
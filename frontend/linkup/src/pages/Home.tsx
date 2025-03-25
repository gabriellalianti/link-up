import { Card, CardHeader, CardContent, CardFooter } from "../components/components/ui/card";
import { Button } from "../components/components/ui/button";
import { Input } from "../components/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "../components/components/ui/avatar";
import { ScrollArea } from "../components/components/ui/scroll-area";
import { Home, MessageCircle, Bell, Users, Edit, X } from "lucide-react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose
  } from "../components/components/ui/dialog"
  import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuContent,
  } from "../components/components/ui/dropdown-menu"

import home from "../assets/home.svg"
import links from "../assets/links.svg"
import market from "../assets/market.svg"
import messages from "../assets/messages.svg"
import notification from "../assets/notification.svg"
import logo from "../assets/1.png"
import logout from "../assets/logout.svg"
import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import avatar1 from "../assets/avatar1.jpg"
import avatar2 from "../assets/avatar2.jpg"
import avatar3 from "../assets/avatar3.jpg"

import SinglePost from "./Comment";
import MiddleColumn from "./Post";

function HomePage() {
  const navigate = useNavigate();
	const [people, setPeople] = useState([
    { name: "Lebron James", pfp: avatar1 },
    { name: "Stephen Curry", pfp: avatar2 },
    { name: "Luka Doncic", pfp: avatar3 }
  ]);
	const handleRemove = (name) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.name !== name));
  };
  return (
    <div className="flex flex-col w-screen h-screen">
      {/* NAV BAR */}
      <header className="fixed bg-white w-full min-h-[8%] border-b justify-center">
        <img src={logo} className="fixed left-0 ml-5 h-[80px] w-[100px]"/>
				<div className="flex flex-row w-screen justify-center text-sm mt-2 gap-20">
          <div 
            className="flex flex-col justify-center items-center w-24 mt-2 border-b-2 border-black transition cursor-pointer"
            onClick={() => navigate('/home')}>
            <img src={home} className="w-[25px]"/>
            <span className="mb-1">Home</span>
          </div>
        
          <div 
            className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer "
            onClick={() => navigate('/my-links')}>
            <img src={links} className="w-[25px]"/>
            <span className="mb-1">My Links</span>
          </div>
        
          <div 
            className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer"
            onClick={() => navigate('/market')}>
            <img src={market} className="w-[25px]"/>
            <span className="mb-1">Market</span>
          </div>
        
          <div 
            className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer"
            onClick={() => navigate('/messages')}>
            <img src={messages} className="w-[25px]"/>
            <span className="mb-1">Messages</span>
          </div>
        
          <div 
            className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer"
            onClick={() => navigate('/notifications')}>
            <img src={notification} className="w-[25px]"/>
            <span className="mb-1">Notifications</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT PAGE */}
      <main className="pt-[80px] flex w-full h-full bg-gray-100">
        <div className="flex flex-grow p-6 gap-6">
          {/* Left Column Card */}
          <Card className="w-1/4 p-1 h-fit">
            <CardHeader>
              <h2 className="text-lg font-bold">People You Might Know</h2>
            </CardHeader>
            <CardContent>
						<ul className="space-y-4">
							{people.map((person) => (
								<li key={person.name} className="flex items-center justify-between">
									{/* Avatar + Name */}
									<div className="flex items-center">
										<Avatar className="w-8 h-8">
											<AvatarImage src={person.pfp} alt={person.name} />
										</Avatar>
										<span className="ml-2">{person.name}</span>
									</div>
									{/* Add Button */}
									<Button size="sm" onClick={() => handleRemove(person.name)}>+</Button>
								</li>
      				))}
    				</ul>
          </CardContent>
        </Card>

        {/* Middle Column Card - Create Posts Section */}
        <MiddleColumn />

				{/* Right Column Card - Profile Card */}
				<Card className="w-1/3 p-1 h-fit relative">
					<div onClick={() => navigate('/update-profile')}>
						<Button className="absolute top-10 right-8 ">
							<Edit className="w-5 h-5" />
						</Button>
					</div>

					<CardHeader>
						<div className="flex flex-col items-left">
							<Avatar className="w-40 h-40">
								<AvatarImage src="https://via.placeholder.com/80" />
								<AvatarFallback>FN</AvatarFallback>
							</Avatar>
							<h1 className="text-xl font-bold mt-4">Full Name</h1>
							<p className="text-sm text-gray-700">Age years old</p>
						</div>
					</CardHeader>

					<CardContent>
						<div className="flex items-start justify-between">
							<div>
								<p>Title of Studies</p>
								<p>Year of Studies</p>
							</div>
							<div className="flex flex-wrap gap-2 max-w-[50%] justify-end items-start">
								{["COMP6080", "COMP3311", "COMP2511"].map((course) => (
									<Card key={course} className="px-2 py-1 bg-gray-200 rounded-md text-xs font-semibold flex items-center">
											{course}
									</Card>
								))}
							</div>
						</div>
					</CardContent>
					
					{/* WORD LIMIT IS 80? */}
					<div className="bg-white p-4 mt-2 rounded-lg shadow-sm border border-gray-200 w-[90%] mx-auto mb-4 max-h-40 break-words">
						<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
					</div>
				</Card>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
  
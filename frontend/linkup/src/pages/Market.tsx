import { Card, CardHeader, CardContent, CardFooter } from "../components/components/ui/card";
import { Button } from "../components/components/ui/button";
import { Input } from "../components/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "../components/components/ui/avatar";
import { ScrollArea } from "../components/components/ui/scroll-area";
import { Home, MessageCircle, Bell, Users, Edit } from "lucide-react";
import StarRatings from 'react-star-ratings';

import home from "../assets/home.svg"
import links from "../assets/links.svg"
import market from "../assets/market.svg"
import messages from "../assets/messages.svg"
import notification from "../assets/notification.svg"
import logo from "../assets/1.png"
import search from "../assets/search.svg"

import { useNavigate } from "react-router-dom"

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-screen h-screen">
      {/* Nav Bar */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b flex items-center h-[80px] z-10">
        <img src={logo} className="ml-5 h-[80px] w-[100px]" alt="Logo" />
        <div className="flex flex-row w-full justify-center text-sm gap-20">
          <div 
            className="flex flex-col justify-center items-center rounded-xl w-24 hover:bg-black/5 transition cursor-pointer"
            onClick={() => navigate('/home')}
          >
            <img src={home} className="w-[25px]" alt="Home" />
            <span>Home</span>
          </div>
          <div 
            className="flex flex-col justify-center items-center rounded-xl w-24 hover:bg-black/5 transition cursor-pointer"
            onClick={() => navigate('/my-links')}
          >
            <img src={links} className="w-[25px]" alt="My Links" />
            <span>My Links</span>
          </div>
          <div 
            className="flex flex-col justify-center items-center rounded-xl w-24 hover:bg-black/5 transition cursor-pointer"
            onClick={() => navigate('/market')}
          >
            <img src={market} className="w-[25px]" alt="Market" />
            <span>Market</span>
          </div>
          <div 
            className="flex flex-col justify-center items-center rounded-xl w-24 hover:bg-black/5 transition cursor-pointer"
            onClick={() => navigate('/messages')}
          >
            <img src={messages} className="w-[25px]" alt="Messages" />
            <span>Messages</span>
          </div>
          <div 
            className="flex flex-col justify-center items-center rounded-xl w-24 hover:bg-black/5 transition cursor-pointer"
            onClick={() => navigate('/notifications')}
          >
            <img src={notification} className="w-[25px]" alt="Notifications" />
            <span>Notifications</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-[80px] flex flex-col flex-grow overflow-y-auto">
        <div className="flex flex-grow p-6 gap-6">
          {/* Left Column */}
          <Card className="w-1/4 p-4 h-fit">
            <CardHeader>
              <h2 className="text-lg font-bold">Filter Products</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {["Alisha Asparagus", "Benny Broccoli", "Fine shyt", "Smol Waifu", "Simp Slayer"].map((person) => (
                  <li key={person} className="flex justify-between">
                    <span>{person}</span>
                    <Button size="sm">+</Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Middle Column - Posts Section */}
          <div className="w-[60%] flex flex-col gap-4">
            {/* Post Input Card */}
            <Card className="p-4 h-[80px]">
              <div className="flex items-center gap-4 bg-white text-black py-2 px-4 rounded-lg">
              <img src={search} className="w-[25px]" alt="search" />
                <input className="w-full h-[32px]  text-left flex justify-start items-center focus:outline-none" placeholder="Search for a product...">
                </input>
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
                        <h2 className="text-xl font-bold">Product {post}</h2>
                        <h3 className="text-lg">Being sold by user {post}</h3>
                        <p className="text-sm text-gray-500">5 minutes ago</p>
                      </div>
                      <div className="ml-auto mr-1">
                      <StarRatings
                        rating={post}
                        starRatedColor="black"
                        // changeRating={this.changeRating}
                        numberOfStars={5}
                        name='rating'
                        starDimension="25px"
                        starSpacing="3px"
                        />       
                        <div className="text-right mt-3 text-xl mr-1">
                            $12
                        </div>            
                        </div>
                    </div>
                  </CardHeader>
                  <CardContent className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mx-6">
                    <p className="mb-4">
                        User {post} is selling product {post}... ulsnrers rsnersienrsinesr rsa irsein rsaei rsie rsai ersaei rsenirsa ∑ th w fy yu lrsaully ullfauyl rfyu lafnsnskr er srstd rsts s h fpgfpgfpg ftsd ts sththstd straaa rststdsym ttet. tetiset, tedufirt tutut yrosose sisisesnr.
                    </p>
                    {/* Post Image */}
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WUQJ92egI-9jlFIBBjcsIEEcwP4DzVH7oA&s"
                      alt="Post content"
                      className="max-h-[300px] w-auto rounded-lg border border-gray-200"
                    />
                  </CardContent>
                  <div className="h-4"></div>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Message</Button>
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
                  {["COMP6080", "COMP3311", "COMP2511"]
                    .slice(0, Math.floor(Math.random() * 3) + 1)
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a est et diam ullamcorper.</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default HomePage;

  
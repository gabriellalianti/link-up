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
import logout from "../assets/logout.svg"
import search from "../assets/search.svg"
import brokenGlass from "../assets/broken-magnifying-glass.jpeg"


import { useNavigate } from "react-router-dom"
import { useState } from "react";

function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([
    {
      "productId": 5353, 
      "product": "example product", 
      "seller": "person a", 
      "sellerId": 123123, 
      "price": 12, 
      "stars": 4.3, 
      "description": " ulsnrers rsnersienrsinesr rsa irsein rsaei rsie rsai ersaei rsenirsa ∑ th w fy yu lrsaully ullfauyl rfyu lafnsnskr er srstd rsts s h fpgfpgfpg ftsd ts sththstd straaa rststdsym ttet. tetiset, tedufirt tutut yrosose sisisesnr.", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WUQJ92egI-9jlFIBBjcsIEEcwP4DzVH7oA&s",
      "tags": ["Food", "Cheap"],
      "listTime": new Date(Date.now() - (3600 * 1000 * 24)),
    },
    {
      "productId": 1234, 
      "product": "tshirt", 
      "seller": "Daniel Donkey", 
      "sellerId": 55221, 
      "price": 599291, 
      "stars": 0.3, 
      "description": "tshirt. used.", 
      "image": "https://i.ebayimg.com/images/g/N34AAOSwibJfTXXm/s-l400.jpg",
      "tags": ["Clothes"],
      "listTime": new Date(Date.now() - (3600 * 1000 * 42)),      
    },
    {
      "productId": 2, 
      "product": "Chair", 
      "seller": "Fine shyt", 
      "sellerId": 92921, 
      "price": 1, 
      "stars": 4.8, 
      "description": "I no longer require the services of this chair.", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpJxJZwqvAATI0CZI6w0uAFOM2APbPxt7sw&s",
      "tags": ["Cheap"],
      "listTime": new Date(Date.now() - (3600 * 1000 * 2)),      
    },
    {
      "productId": 6323, 
      "product": "Lab Coat", 
      "seller": "Benny Broccoli", 
      "sellerId": 2293992, 
      "price": 42, 
      "stars": 3.4, 
      "description": "Prestained", 
      "image": "https://i.ebayimg.com/images/g/9hYAAOSwVmNjMyQU/s-l1200.jpg",
      "tags": ["Clothes"],
      "listTime": new Date(Date.now() - (1000 * 1000)),      
    }
  ]);

  const [tags, setTags] = useState([]);

  function getTags(): String[] {
    let tags: String[] = [];
    products.map((product) => {
      product["tags"].forEach((tag) => {
        if (tags.indexOf(tag) === -1) {
          tags.push(tag);
        }
      });
    });
    return tags;
  }

  function timeSince(timeStamp: Date) {
    var now = new Date(),
      secondsPast = (now.getTime() - timeStamp) / 1000;
    if (secondsPast < 60) { 
      return Math.floor(secondsPast).toString() + ' seconds ago';
    }
    if (secondsPast < 3600) {
      return Math.floor(secondsPast / 60).toString() + ' minutes ago';
    }
    if (secondsPast <= 86400) {
      return Math.floor(secondsPast / 3600).toString() + ' hours ago';
    }
    if (secondsPast > 86400) {
      const day = timeStamp.getDate();
      const month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
      const year = timeStamp.getFullYear() == now.getFullYear() ? "" : " " + timeStamp.getFullYear();
      return day + " " + month + year;
    }
  }
  
  return (
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
                      className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer"
                      onClick={() => navigate('/notifications')}
                  >
                      <img src={notification} className="w-[25px]"/>
                      <span className="mb-1">Notifications</span>
                  </div>
                    <img src={logout} className="fixed right-0 mt-3 h-[30px] w-[100px]" onClick={()=> navigate('/')}/>
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
                {getTags().map((tag) => (
                  <li key={tag} className="flex justify-between">
                    <span>{tag}</span>
                    <Button size="sm" className={"text-black hover:bg-black/10".concat(tags.indexOf(tag.toString()) === -1 ? " bg-white" : " bg-gray-200")} onClick={
                      () => tags.indexOf(tag.toString()) === -1 ? 
                      setTags(tags.concat(tag))
                      : setTags(tags.filter((t) => t !== tag))
                      }>
                    {tags.indexOf(tag.toString()) === -1 ? "+" : "×"}
                    </Button>
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
                <input className="w-full h-[32px]  text-left flex justify-start items-center bg-white focus:outline-none" autoComplete="off"
                                onChange={(ev) => setSearchQuery(ev.target.value)} placeholder="Search for a product...">
                </input>
              </div>
            </Card>

            {/* Posts Feed Section */}
            <ScrollArea className="h-[calc(100vh-180px)] space-y-4">
              {
                products.map((product) => {
                  if (product["product"].concat(product["description"]).concat(product["seller"]).concat(product["tags"].join()).toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 && ((tags.filter(value => product["tags"].some((v) => v == value)).length) || tags.length === 0)) {
                    return (
                      <Card key={product["productId"]} className="p-2 shadow-md border border-gray-200 mb-4">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <Avatar className="w-16 h-16">
                              <AvatarImage src="https://via.placeholder.com/40" />
                              <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <div>
                              <h2 className="text-xl font-bold">{product["product"]}</h2>
                              <h3 className="text-lg">Being sold by {product["seller"]}</h3>
                              <p className="text-sm text-gray-500">{timeSince(product["listTime"])}</p>
                            </div>
                            <div className="ml-auto mr-1">
                            <StarRatings
                              rating={product["stars"]}
                              starRatedColor="black"
                              // changeRating={this.changeRating}
                              numberOfStars={5}
                              name='rating'
                              starDimension="25px"
                              starSpacing="3px"
                              />       
                              <div className="text-right mt-3 text-xl mr-1">
                                  ${product["price"]}
                              </div>            
                              </div>
                          </div>
                        </CardHeader>
                        <CardContent className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mx-6">
                          <p className="mb-4">
                              {product["description"]}
                          </p>
                          {/* Post Image */}
                          <img
                            src={product["image"]}
                            alt="Post content"
                            className="max-h-[300px] w-auto rounded-lg border border-gray-200"
                          />
                        </CardContent>
                        <div className="h-4"></div>
                        <CardFooter className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => navigate('/messages')}>Message</Button>
                        </CardFooter>
                      </Card>
                    )
                  }
                })
              }
              <Card>
                <CardContent className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 m-6 text-xl">
                    There are no more products matching the filters and search query!
                    <img src={brokenGlass} className="mx-auto mt-10"/>
                </CardContent>
              </Card>
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

  
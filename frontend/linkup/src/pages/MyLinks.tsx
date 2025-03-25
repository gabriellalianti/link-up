import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import home from "../assets/home.svg"
import links from "../assets/links.svg"
import market from "../assets/market.svg"
import { Avatar, AvatarImage, AvatarFallback } from "../components/components/ui/avatar";
import messages from "../assets/messages.svg"
import notification from "../assets/notification.svg"
import logo from "../assets/1.png"
import background from "../assets/backgroundProfile.jpeg";
import search from "../assets/search.svg";
import { jwtDecode }from "jwt-decode";
import Cookies from "js-cookie";

function MyLinks() {
  const navigate = useNavigate();
  const peoplesData = [
    { name: "user1", 
      major: "This is the first card", 
      userId: "fapncsa",
      links: ["user2", "user3"], 
      courses: ["COMP1541", "COMP1521", "COMP1531"],
      dateOfBirth: "",
      bio: "",
      backgroundPic: "",
      profilePic: "",
    },
    { name: "user2", 
      major: "This is the second card", 
      userId: "fapncsa",
      links: ["user1", "user2"], 
      courses: ["COMP1511", "COMP1521", "COMP1541"],
      dateOfBirth: "",
      bio: "",
      backgroundPic: "",
      profilePic: ""

    },
    { name: "user3", 
      major: "This is the third card", 
      userId: "fapncsa",
      links: ["user1", "user3"], 
      courses: ["COMP1511", "COMP1521", "COMP1541"],
      dateOfBirth: "",
      bio: "",
      backgroundPic: "",
      profilePic: ""
    },
    { name: "user4", 
      major: "This is the fourth card", 
      userId: "fapncsa",
      links: ["user4", "user3"], 
      courses: ["COMP1511", "COMP1521", "COMP1531"],
      dateOfBirth: "",
      bio: "",
      backgroundPic: "",
      profilePic: ""
    },
    { name: "user5", 
      major: "This is the fifth card", 
      userId: "fapncsa",
      links: ["user3", "user2"], 
      courses: ["COMP1511", "COMP1521", "COMP1531"],
      dateOfBirth: "",
      bio: "",
      backgroundPic: "",
      profilePic: ""
    },
    { name: "user6", 
      major: "This is the sixth card", 
      userId: "fapncsa",
      links: ["user3", "user2"], 
      courses: ["COMP1511", "COMP1521", "COMP1531"],
      dateOfBirth: "",
      bio: "",
      backgroundPic: "",
      profilePic: ""
    },
    { name: "user7", 
      major: "This is the seventh card", 
      userId: "fapncsa",
      links: ["user5", "user2"], 
      courses: ["COMP1511", "COMP1521", "COMP1531"],
      dateOfBirth: "",
      bio: "",
      backgroundPic: "",
      profilePic: ""
    },
    { name: "user8", 
      major: "This is the eight card", 
      userId: "fapncsa",
      links: ["user3", "user2"], 
      courses: ["COMP1511", "COMP1521", "COMP1531"],
      dateOfBirth: "",
      bio: "",
      backgroundPic: "",
      profilePic: ""
    },
    { name: "user9", 
      major: "This is the ninth card", 
      userId: "fapncsa",
      links: ["user3", "user2"], 
      courses: ["COMP1511", "COMP1521", "COMP1531"],
      dateOfBirth: "",
      bio: "",
      backgroundPic: "",
      profilePic: ""
    },
    { name: "user10", 
      major: "This is the tenth card", 
      userId: "fapncsa",
      links: ["user3", "user2"], 
      courses: ["COMP1511", "COMP1521", "COMP1531"],
      dateOfBirth: "",
      bio: "",
      backgroundPic: "",
      profilePic: ""
    },
    { name: "user11", 
      major: "This is the eleventh card", 
      userId: "fapncsa",
      links: ["user6", "user2"], 
      courses: ["COMP1511", "COMP1521", "COMP1531"],
      dateOfBirth: "",
      bio: "",
      backgroundPic: "",
      profilePic: ""
    },
    { name: "user12", 
      major: "This is the twelveth card", 
      userId: "fapncsa",
      links: ["user3", "user2"], 
      courses: ["COMP1511", "COMP1521", "COMP1531"],
      dateOfBirth: "",
      bio: "",
      backgroundPic: "",
      profilePic: ""
    },
    { name: "user13", 
      major: "This is the tenth card", 
      userId: "fapncsa",
      links: ["user3", "user2"], 
      courses: ["COMP1511", "COMP1521", "COMP1531"],
      dateOfBirth: "",
      bio: "",
      backgroundPic: "",
      profilePic: ""
    },
    { name: "user14", 
      major: "This is the eleventh card", 
      userId: "fapncsa",
      links: ["user3", "user2"], 
      courses: ["COMP1511", "COMP1521", "COMP1531"],
      dateOfBirth: "",
      bio: "",
      backgroundPic: "",
      profilePic: ""
    },
    { name: "user15", 
      major: "This is the twelveth card", 
      userId: "fapncsa",
      links: ["user7", "user2"], 
      courses: ["COMP1511", "COMP1521", "COMP1531"],
      dateOfBirth: "",
      bio: "",
      backgroundPic: "",
      profilePic: ""
    },
  ];

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

  const userData = {
    name: "user1", 
    major: "Bachelor of Computer Science", 
    userId: "fapncsa",
    links: ["user2", "user3"], 
    courses: ["COMP3222", "COM1234"],
    dateOfBirth: "",
    bio: "",
    backgroundPic: "",
    profilePic: ""
  };

  const [profilePopup, setProfilePopup] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("")
  const [filteredPeoples, setFilteredPeoples] = useState<{ name: string, major: string, links: string[], courses: string[] }[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<{ name: string, major: string, links: string[], courses: string[] }[]>([]);
  const [needsUpdated, setNeedsUpdated] = useState(false);
  const [user, setUser] = useState<{ name: string, major: string, links: string[], courses: string[] }>({name:"", major:"", links:[], courses:[]});
  const [peoples, setPeoples] = useState<{ name: string, major: string, links: string[], courses: string[] }[]>([]);
  const [searchResultLinks, setSearchResultsLinks] = useState<{ name: string, major: string, links: string[], courses: string[] }[]>([]);
  const [searchResultPeoples, setSearchResultsPeoples] = useState<{ name: string, major: string, links: string[], courses: string[] }[]>([]);

  useEffect(() => {
    setPeoples(peoplesData);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (!selectedCourse || needsUpdated) {
        setFilteredPeoples(peoplesData.filter((people) => !people.links.includes(userData.name) && people.name != userData.name));
        setFilteredLinks(peoplesData.filter((people) => people.links.includes(userData.name) && people.name != userData.name));
        console.log(peoplesData)
        setNeedsUpdated(false);
      } 
      if (selectedCourse || needsUpdated) {
        const filteredPeeps = peoplesData.filter((people) => people.courses.includes(selectedCourse) && !people.links.includes(userData.name) && people.name != userData.name);
        const filteredHomies = peoplesData.filter((people) => people.courses.includes(selectedCourse) && people.links.includes(userData.name) && people.name != userData.name);
        setFilteredPeoples(filteredPeeps);
        setFilteredLinks(filteredHomies);
        setNeedsUpdated(false);
      }
    }, 200)
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (peoples && (!selectedCourse || needsUpdated)) {
        setFilteredPeoples(peoples.filter((people) => !people.links.includes(userData.name) && people.name != userData.name));
        setFilteredLinks(peoples.filter((people) => people.links.includes(userData.name) && people.name != userData.name));
        console.log(peoplesData)
        setNeedsUpdated(false);
      } 
      if (peoples && (selectedCourse || needsUpdated)) {
        const filteredPeeps = peoples.filter((people) => people.courses.includes(selectedCourse) && !people.links.includes(userData.name) && people.name != userData.name);
        const filteredHomies = peoples.filter((people) => people.courses.includes(selectedCourse) && people.links.includes(userData.name) && people.name != userData.name);
        setFilteredPeoples(filteredPeeps);
        setFilteredLinks(filteredHomies);
        setNeedsUpdated(false);
      }
    }, 100)
  }, [selectedCourse, needsUpdated]);

  const handleSearchChangeLinks = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    if (!query) {
      if (!peoples) {
        setSearchResultsLinks(peoplesData);
      }
      setSearchResultsLinks(filteredLinks);
    } else {
      const filteredResults = filteredLinks.filter((links) =>
        links.name.toLowerCase().includes(query)
      );
      setSearchResultsLinks(filteredResults);
    }
  };

  const handleSearchChangePeoples = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    if (!query) {
      setSearchResultsPeoples(peoplesData);
    } else {
      const filteredResults = filteredPeoples.filter((links) =>
        links.name.toLowerCase().includes(query)
      );
      setSearchResultsPeoples(filteredResults);
    }
  };

  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <header className="fixed bg-white w-full min-h-[8%] border-b justify-center">
          <img src={logo} className="fixed left-0 ml-5 h-[80px] w-[100px]" />
          <div className="flex flex-row w-screen justify-center text-sm mt-2 gap-20">
            <div
              className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer"
              onClick={() => navigate('/home')}
            >
              <img src={home} className="w-[25px]" />
              <span className="mb-1">Home</span>
            </div>

            <div
              className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer "
              onClick={() => navigate('/my-links')}
            >
              <img src={links} className="w-[25px]" />
              <span className="mb-1">My Links</span>
            </div>

            <div
              className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer"
              onClick={() => navigate('/market')}
            >
              <img src={market} className="w-[25px]" />
              <span className="mb-1">Market</span>
            </div>

            <div
              className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer"
              onClick={() => navigate('/messages')}
            >
              <img src={messages} className="w-[25px]" />

              <span className="mb-1">Messages</span>

            </div>

            <div
              className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer"
              onClick={() => navigate('/notifications')}
            >
              <img src={notification} className="w-[25px]" />
              <span className="mb-1">Notifications</span>
            </div>
          </div>
        </header>

        <div className="flex flex-col bg-gray-200 w-full h-full overflow-y-scroll">
          <div className="flex justify-center bg-gray-200 w-full">
            <div className='xl:hidden lg:hidden md:hidden flex flex-col w-full max-w-[97%] mt-4 gap-4'>
              <div className='flex flex-row justify-between'>

              </div>
            </div>
            <div className="xl:flex md:flex lg:flex sm:hidden flex flex-row w-full max-w-[97%] justify-between mt-4 gap-x-4">

            </div>
          </div>
        </div>

        <div className="flex bg-white py-6 justify-center px-10 gap-6 h-[92%] mt-10 ">
          <div className="flex flex-col min-w-[250px] gap-4">
            {/* Profile Box */}
            <div className="flex flex-col bg-yellow-300 w-full h-2/3 rounded-xl border">
              <img className="w-[250px] rounded-xl" src={background} />
              <div className="absolute flex flex-col bg-yellow-300 w-[250px] h-[295px] mt-[158px] px-4 items-center justify-center">
                <h3 className="text-black font-bold text-xl w-full mt-14 text-center">
                  {profile.name}
                </h3>
                <h4 className="text-gray-400 font-semibold text-sm w-full text-center">
                  {profile.degree}
                </h4>
                <button className="w-1/2 bg-white rounded-full mt-4 text-xs text-gray-400">
                  {profile.links.length} Links
                </button>
                <div className="flex flex-wrap bg-yellow-300 w-full rounded-xl h-[100px] mt-8  p-3 gap-3 justify-center items-center ">
                  {profile.courses.map((course, index) => (
                    <button key={index} className="w-[80px] h-[30px] rounded-full text-[10px] text-gray-400 bg-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCourse(course);
                      }}>{course}</button>
                  ))}
                </div>
              </div>
              {/* <div className="absolute rounded-full  w-[100px] h-[100px] z-10 ml-[75px] mt-[105px]"> */}
                <Avatar className="absolute w-32 h-32 top-52 ml-[60px]">
                  <AvatarImage src={profile.profilePicture} />
                  <AvatarFallback>FN</AvatarFallback>
                </Avatar>
              {/* </div> */}
            </div>

            {/* Extra Box to Use (can fyb) */}
            <div className="flex bg-yellow-300 w-full h-1/3 rounded-xl border">
              {selectedCourse
                ? <div className="flex w-full items-start justify-between gap-2 p-4">
                  <div className="text-black font-semibold">Selected Course</div>
                  <button className="flex justify-between w-[90px] h-[30px] rounded-full text-start text-[10px] text-gray-400 bg-gray-200 p-[5px] cursor-pointer"
                    onClick={() => { setSelectedCourse("") }}>
                    <div className="mt-[1px] ml-[2px]">{selectedCourse}</div>
                    <div className="flex w-[18px] h-[18px] rounded-full bg-white justify-center items-center">X</div>
                  </button>
                </div>
                : <div className="text-black p-4">Helaur, nice to see you buddy!</div>
              }
            </div>
          </div>

          <div className="flex flex-col bg-yellow-300  rounded-xl border p-3 w-[1080px] h-[720px] ">
            {/* Grid Parent Box */}
            <div className="overflow-y-scroll no-scrollbar rounded-lg">
              {filteredLinks.length != 0
                ? <div className="bg-white flex flex-col px-1 justify-start items-center rounded-lg mb-6">
                  <div className="flex flex-row w-full py-3 items-center">
                    <div className="bg-white text-[30px] font-bold w-1/2 text-start px-2">Links</div>
                    {/* Post Input Card */}
                    <div className="flex items-center gap-4 bg-white border border-yellow-300 border-2 text-black py-2 px-4 mr-2 h-[40px] w-[50%] rounded-full">
                      <img src={search} className="w-[25px]" alt="search" />
                      <input className="w-full h-[32px] text-left flex justify-start items-center bg-white focus:outline-none" placeholder="Search your links..."
                        onChange={handleSearchChangeLinks}>
                      </input>
                    </div>
                    <div className="w-1/2"/>
                  </div>
                  <div className="bg-white rounded-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                    { searchResultLinks.length != 0 
                      ? searchResultLinks.map((people, index) => (
                        <div key={index} className="relative bg-white border rounded-lg shadow-lg w-[250px] h-[400px] justify-center cursor-pointer"
                          onClick={() => { setProfilePopup(true) }}>
                          {/* Image at the top */}
                          <img className="w-[250px] rounded-lg" src={background} onClick={() => { setProfilePopup(true) }} />

                          {/* Sticky Container */}
                          <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute bg-white w-[248px] h-[160px] top-28 left-0 px-3 text-center">
                              <h3 className="text-xl text-black font-semibold mt-12 text-center">{people.name}</h3>
                              <p className="text-gray-600 text-center">{people.major}</p>
                              <text className="text-black mt-2 text-sm">{people.links.length} links</text>
                              <div className="flex flex-wrap bg-white w-full rounded-xl h-[80px] p-2 mt-3 gap-[7px] justify-center items-center">
                                {people.courses.map((course, index) => (
                                  <button key={index} className="w-[80px] h-[30px] rounded-full text-[10px] text-gray-400 bg-gray-200"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedCourse(course);
                                    }}>{course}</button>
                                ))}
                              </div>
                              <div className="flex flex-row justify-center mt-4 bg-white">
                                <button className="rounded-full w-full h-[38px] text-sm text-black bg-yellow-300"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate('/Messages')
                                  }}>
                                  Message
                                </button>
                              </div>
                            </div>
                            <div className="absolute bg-black w-[80px] h-[80px] rounded-full top-[70px] left-[85px]"></div>
                          </div>
                        </div>
                      ))
                      : filteredLinks.map((people, index) => (
                        <div key={index} className="relative bg-white border rounded-lg shadow-lg w-[250px] h-[400px] justify-center cursor-pointer"
                          onClick={() => { setProfilePopup(true) }}>
                          {/* Image at the top */}
                          <img className="w-[250px] rounded-lg" src={background} onClick={() => { setProfilePopup(true) }} />

                          {/* Sticky Container */}
                          <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute bg-white w-[248px] h-[160px] top-28 left-0 px-3 text-center">
                              <h3 className="text-xl text-black font-semibold mt-12 text-center">{people.name}</h3>
                              <p className="text-gray-600 text-center">{people.major}</p>
                              <text className="text-black mt-2 text-sm">{people.links.length} links</text>
                              <div className="flex flex-wrap bg-white w-full rounded-xl h-[80px] p-2 mt-3 gap-[7px] justify-center items-center">
                                {people.courses.map((course, index) => (
                                  <button key={index} className="w-[80px] h-[30px] rounded-full text-[10px] text-gray-400 bg-gray-200"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedCourse(course);
                                    }}>{course}</button>
                                ))}
                              </div>
                              <div className="flex flex-row justify-center mt-4 bg-white">
                                <button className="rounded-full w-full h-[38px] text-sm text-black bg-yellow-300"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate('/Messages')
                                  }}>
                                  Message
                                </button>
                              </div>
                            </div>
                            <div className="absolute bg-black w-[80px] h-[80px] rounded-full top-[70px] left-[85px]"></div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
                : null
              }
              { filteredPeoples.length != 0
                ? <div className="bg-white flex flex-col px-1 justify-start items-center rounded-lg">
                  <div className="flex flex-row w-full py-3 items-center">
                    <div className="bg-white text-[30px] font-bold w-1/2 text-start px-2">Peoples</div>
                    {/* Post Input Card */}
                    <div className="flex items-center gap-4 bg-white border border-yellow-300 border-2 text-black py-2 px-4 mr-2 h-[40px] w-[50%] rounded-full">
                      <img src={search} className="w-[25px]" alt="search" />
                      <input className="w-full h-[32px] text-left flex justify-start items-center bg-white focus:outline-none" placeholder="Search more peoples..."
                        onChange={handleSearchChangePeoples}>
                      </input>
                    </div>
                    <div className="w-1/2"/>
                  </div>
                  <div className="bg-white rounded-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                    { searchResultPeoples.length != 0 
                      ? searchResultPeoples.map((people, index) => (
                        <div key={index} className="relative bg-white border rounded-lg shadow-lg w-[250px] h-[400px] justify-center cursor-pointer"
                          onClick={() => { setProfilePopup(true) }}>
                          {/* Image at the top */}
                          <img className="w-[250px] rounded-lg" src={background} onClick={() => { setProfilePopup(true) }} />

                          {/* Sticky Container */}
                          <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute bg-white w-[248px] h-[160px] top-28 left-0 px-3 text-center">
                              <h3 className="text-xl text-black font-semibold mt-12 text-center">{people.name}</h3>
                              <p className="text-gray-600 text-center">{people.major}</p>
                              <text className="text-black mt-2 text-sm">{people.links.length} links</text>
                              <div className="flex flex-wrap bg-white w-full rounded-xl h-[80px] p-2 mt-3 gap-[7px] justify-center items-center">
                                {people.courses.map((course, index) => (
                                  <button key={index} className="w-[80px] h-[30px] rounded-full text-[10px] text-gray-400 bg-gray-200"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedCourse(course);
                                    }}>{course}</button>
                                ))}
                              </div>
                              <div className="flex flex-row justify-center mt-4 bg-white gap-3">
                                <button className="rounded-full w-full h-[38px] text-sm text-black bg-yellow-300"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    user.links.push(people.name)
                                    const peop = peoples.find((peep) => peep.name === people.name);
                                    const userP = peoples.find((peep) => peep.name === userData.name);
                                    userP.links.push(peop.name)
                                    peop.links.push(userData.name);
                                    if (!selectedCourse || needsUpdated) {
                                      setFilteredPeoples(peoples.filter((people) => !people.links.includes(user.name) && people.name != user.name));
                                      setFilteredLinks(peoples.filter((people) => people.links.includes(user.name) && people.name != user.name));
                                    } 
                                    if (selectedCourse || needsUpdated) {
                                      const filteredPeeps = peoples.filter((people) => people.courses.includes(selectedCourse) && !people.links.includes(user.name)  && people.name != user.name);
                                      const filteredHomies = peoples.filter((people) => people.courses.includes(selectedCourse) && people.links.includes(user.name)  && people.name != user.name);
                                      setFilteredPeoples(filteredPeeps);
                                      setFilteredLinks(filteredHomies);
                                    }
                                  }}>
                                  Link +
                                </button>
                              </div>
                            </div>
                            <div className="absolute bg-black w-[80px] h-[80px] rounded-full top-[70px] left-[85px]"></div>
                          </div>
                        </div>
                      ))
                      : filteredPeoples.map((people, index) => (
                        <div key={index} className="relative bg-white border rounded-lg shadow-lg w-[250px] h-[400px] justify-center cursor-pointer"
                          onClick={() => { setProfilePopup(true) }}>
                          {/* Image at the top */}
                          <img className="w-[250px] rounded-lg" src={background} onClick={() => { setProfilePopup(true) }} />

                          {/* Sticky Container */}
                          <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute bg-white w-[248px] h-[160px] top-28 left-0 px-3 text-center">
                              <h3 className="text-xl text-black font-semibold mt-12 text-center">{people.name}</h3>
                              <p className="text-gray-600 text-center">{people.major}</p>
                              <text className="text-black mt-2 text-sm">{people.links.length} links</text>
                              <div className="flex flex-wrap bg-white w-full rounded-xl h-[80px] p-2 mt-3 gap-[7px] justify-center items-center">
                                {people.courses.map((course, index) => (
                                  <button key={index} className="w-[80px] h-[30px] rounded-full text-[10px] text-gray-400 bg-gray-200"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedCourse(course);
                                    }}>{course}</button>
                                ))}
                              </div>
                              <div className="flex flex-row justify-center mt-4 bg-white gap-3">
                                <button className="rounded-full w-full h-[38px] text-sm text-black bg-yellow-300"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    profile.links.push(people.name)
                                    const peop = peoples.find((peep) => peep.name === people.name);
                                    const userP = peoples.find((peep) => peep.name === userData.name);
                                    userP.links.push(peop.name)
                                    peop.links.push(userData.name);
                                    if (!selectedCourse || needsUpdated) {
                                      setFilteredPeoples(peoples.filter((people) => !people.links.includes(user.name) && people.name != user.name));
                                      setFilteredLinks(peoples.filter((people) => people.links.includes(user.name) && people.name != user.name));
                                    } 
                                    if (selectedCourse || needsUpdated) {
                                      const filteredPeeps = peoples.filter((people) => people.courses.includes(selectedCourse) && !people.links.includes(user.name)  && people.name != user.name);
                                      const filteredHomies = peoples.filter((people) => people.courses.includes(selectedCourse) && people.links.includes(user.name)  && people.name != user.name);
                                      setFilteredPeoples(filteredPeeps);
                                      setFilteredLinks(filteredHomies);
                                    }
                                  }}>
                                  Link +
                                </button>
                              </div>
                            </div>
                            <div className="absolute bg-black w-[80px] h-[80px] rounded-full top-[70px] left-[85px]"></div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
                : null
              }
            </div>
          </div>
        </div>

        {/* Popup profile */}
        {
          profilePopup
            ? <div className="fixed flex inset-0 bg-black/30 w-full h-full z-20 items-center justify-center" onClick={() => { setProfilePopup(false) }}>
              <div className="flex flex-row bg-white rounded-xl w-[600px] min-h-[450px] text-black"
                onClick={(e) => e.stopPropagation()}>
                <div className="w-[200px] bg-red-500 rounded-xl">
                  Name
                </div>
              </div>
            </div>
            : null
        }
      </div>
    </>
  )
}

export default MyLinks;
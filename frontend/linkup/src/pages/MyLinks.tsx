import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import home from "../assets/home.svg"
import links from "../assets/links.svg"
import market from "../assets/market.svg"
import messages from "../assets/messages.svg"
import notification from "../assets/notification.svg"
import logo from "../assets/1.png"
import background from "../assets/backgroundProfile.jpeg";

function MyLinks() {
  const navigate = useNavigate();
  const peoples = [
    { name: "Card 1", major: "This is the first card", links: ["user1", "user2"], courses: ["COMP1541", "COMP1521", "COMP1531"] },
    { name: "Card 2", major: "This is the second card", links: ["user1", "user2"], courses: ["COMP1511", "COMP1521", "COMP1531"] },
    { name: "Card 3", major: "This is the third card", links: ["user1", "user3"], courses: ["COMP1511", "COMP1521", "COMP1531"] },
    { name: "Card 4", major: "This is the fourth card", links: ["user1", "user3"], courses: ["COMP1511", "COMP1521", "COMP1531"] },
    { name: "Card 5", major: "This is the fifth card", links: ["user3", "user2"], courses: ["COMP1511", "COMP1521", "COMP1531"] },
    { name: "Card 6", major: "This is the sixth card", links: ["user3", "user2"], courses: ["COMP1511", "COMP1521", "COMP1531"] },
    { name: "Card 7", major: "This is the seventh card", links: ["user1", "user2"], courses: ["COMP1511", "COMP1521", "COMP1531"] },
    { name: "Card 8", major: "This is the eight card", links: ["user3", "user2"], courses: ["COMP1511", "COMP1521", "COMP1531"] },
    { name: "Card 9", major: "This is the ninth card", links: ["user3", "user2"], courses: ["COMP1511", "COMP1521", "COMP1531"] },
    { name: "Card 10", major: "This is the tenth card", links: ["user3", "user2"], courses: ["COMP1511", "COMP1521", "COMP1531"] },
    { name: "Card 11", major: "This is the eleventh card", links: ["user1", "user2"], courses: ["COMP1511", "COMP1521", "COMP1531"] },
    { name: "Card 12", major: "This is the twelveth card", links: ["user3", "user2"], courses: ["COMP1511", "COMP1521", "COMP1531"] },
    { name: "Card 13", major: "This is the tenth card", links: ["user3", "user2"], courses: ["COMP1511", "COMP1521", "COMP1531"] },
    { name: "Card 14", major: "This is the eleventh card", links: ["user3", "user2"], courses: ["COMP1511", "COMP1521", "COMP1531"] },
    { name: "Card 15", major: "This is the twelveth card", links: ["user1", "user2"], courses: ["COMP1511", "COMP1521", "COMP1531"] },
  ];
  const [profilePopup, setProfilePopup] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("")
  const [filteredPeoples, setFilteredPeoples] = useState<{ name: string, major: string, links: string[], courses: string[] }[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<{ name: string, major: string, links: string[], courses: string[] }[]>([]);
  const [needsUpdated, setNeedsUpdated] = useState(false);

  useEffect(() => {
    if (!selectedCourse || needsUpdated) {
      setFilteredPeoples(peoples.filter((people) => !people.links.includes("user1")));
      setFilteredLinks(peoples.filter((people) => people.links.includes("user1")));
      setNeedsUpdated(false);
    } 
    if (selectedCourse || needsUpdated) {
      const filteredPeeps = peoples.filter((people) => people.courses.includes(selectedCourse) && !people.links.includes("user1"));
      const filteredHomies = peoples.filter((people) => people.courses.includes(selectedCourse) && people.links.includes("user1"));
      setFilteredPeoples(filteredPeeps);
      setFilteredLinks(filteredHomies);
      setNeedsUpdated(false);
    }
  }, [selectedCourse, needsUpdated]);

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

        <div className="flex bg-gray-200 py-6 justify-center px-10 gap-6 h-[92%] mt-10 ">
          <div className="flex flex-col min-w-[250px] gap-4">
            {/* Profile Box */}
            <div className="flex flex-col bg-white w-full h-2/3 rounded-xl border">
              <img className="w-[250px] rounded-xl" src={background} />
              <div className="absolute flex flex-col bg-white w-[250px] h-[295px] mt-[158px] px-4 items-center justify-center">
                <h3 className="text-black font-bold text-xl w-full mt-14 text-center">
                  Andy Atmadja
                </h3>
                <h4 className="text-gray-400 font-semibold text-sm w-full text-center">
                  Bachelor in Computer Science
                </h4>
                <button className="w-1/2 bg-white rounded-full mt-4 text-xs text-gray-400">
                  124 Links
                </button>
                <div className="flex flex-wrap bg-white w-full rounded-xl h-[100px] mt-8  p-3 gap-3 justify-center items-center ">
                  <button className="w-[80px] h-[30px] rounded-full text-[10px] text-gray-400 bg-gray-200">COMP2511</button>
                  <button className="w-[80px] h-[30px] rounded-full text-[10px] text-gray-400 bg-gray-200">COMP2521</button>
                  <button className="w-[80px] h-[30px] rounded-full text-[10px] text-gray-400 bg-gray-200">COMP1531</button>
                </div>
              </div>
              <div className="absolute rounded-full bg-black w-[100px] h-[100px] z-10 ml-[75px] mt-[105px]">

              </div>
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

          <div className="flex flex-col bg-white rounded-xl border p-3 w-[1100px] h-[720px]">
            {/* Grid Parent Box */}
            <div className="overflow-y-scroll no-scrollbar rounded-lg">
              {filteredLinks.length != 0
                ? <div>
                  <div className="text-xl font-bold mb-3">Links</div>
                  <div className="bg-white rounded-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                    {filteredLinks.map((people, index) => (
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
                    ))}
                  </div>
                </div>
                : null
              }
              { filteredPeoples.length != 0
                ? <div>
                  <div className="text-xl font-bold mb-3">Peoples You might know</div>
                  <div className="bg-white rounded-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {filteredPeoples.map((people, index) => (
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
                                  peoples.find((people) => people === people)?.links.push("user1");
                                  setNeedsUpdated(true);
                                }}>
                                Connect +
                              </button>
                            </div>
                          </div>
                          <div className="absolute bg-black w-[80px] h-[80px] rounded-full top-[70px] left-[85px]"></div>
                        </div>
                      </div>
                    ))}
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
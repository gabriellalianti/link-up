import home from "../assets/home.svg"
import links from "../assets/links.svg"
import market from "../assets/market.svg"
import messages from "../assets/messages.svg"
import notification from "../assets/notification.svg"
import logo from "../assets/1.png"
import logout from "../assets/logout.svg"
import avatar from "../assets/avatar-1.jpg"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useEffect, useRef } from "react";

function Messages () {
    const navigate = useNavigate();
    const people = [
        {name: "Alisha Asparagus", pfp: avatar},
        {name: "Lebron Huang", pfp: avatar},
        {name: "Alisha Asparagus", pfp: avatar}
    ]
    const [chatMessages, setChatMessages] = useState([
        { text: "aaaaa iaiiiiiii iiaiiiiiiai iaiaiai iioooooo ooi oiiiii", time: "12:32", sender: "other" },
        { text: "iiaiaiai aiaiiiii ssss oooooooioii iiiiiiiii iiiiooooooo oaa", time: "12:45", sender: "me" },
        { text: "aaa aa aiiiiii iiiiaiiiiiaia aiiaiai iiiooooo ooioiiiii", time: "14:05", sender: "other" },
        { text: "eeeeeee eeeee aaaaa", time: "14:45", sender: "me" }
    ]);
    const [newMessage, setNewMessage] = useState("");
    const sendMessage = () => {
        if (newMessage.trim() !== "") {
            const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
            setChatMessages([...chatMessages, { text: newMessage, time: currentTime, sender: "me" }]);
            setNewMessage("");
        }
    };

    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chatMessages]); // Scrolls to bottom when messages update

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
                                className="flex flex-col justify-center items-center rounded-xl w-24 mt-2 hover:bg-black/5 transition cursor-pointer"
                                onClick={() => navigate('/notifications')}
                            >
                                <img src={notification} className="w-[25px]"/>
                                <span className="mb-1">Notifications</span>
                            </div>
                             <img src={logout} className="fixed right-0 mt-3 h-[30px] w-[100px]" onClick={()=> navigate('/')}/>
                    </div>
                </header>

                <div className="flex flex-row bg-gray-200 w-full h-full overflow-y-scroll justify-center items-center">
                    {/* <div className="flex justify-center bg-gray-200 w-full">
                            <div className='xl:hidden lg:hidden md:hidden flex flex-col w-full max-w-[97%] mt-4 gap-4'>
                                <div className='flex flex-row justify-between'>
                                </div>
                            </div>
                            <div className="xl:flex md:flex lg:flex sm:hidden flex flex-row w-full max-w-[97%] justify-between mt-4 gap-x-4">
                            </div>
                    </div> */}
                    {/* sidebar container */}
                    <div className="bg-white w-[224px] h-[600px] rounded-xl flex flex-col items-center pt-[18px]">
                        <p className="font-semibold text-lg">Messages</p>
                        <div className="flex items-center p-3 bg-yellow-300 rounded-lg mt-[10px] w-[200px]">
                            <img src={people[0].pfp} className="w-[32px] h-[32px] rounded-full mr-3" />
                            <span className="mb-1"> {people[0].name} </span>
                        </div>
                        { people.map((people, index) => (
                            <div className="flex items-center p-3 bg-gray-200 rounded-lg mt-[10px] w-[200px]">
                                <img src={people.pfp} className="w-[32px] h-[32px] rounded-full mr-3" />
                                <span className="mb-1"> {people.name} </span>
                            </div>
                        ))}
                    </div>
                    {/* msg */}
                    <div className="bg-white w-[780px] h-[600px] rounded-xl ml-[60px] flex flex-col shadow-md">
                    <div className="flex items-center p-4 border-b">
                        <img src={avatar} className="w-[40px] h-[40px] rounded-full mr-3" alt="Avatar" />
                        <span className="font-semibold">Alisha Asparagus</span>
                    </div>

                    {/* Chat Messages */}
                     <div ref={chatRef} className="h-full flex flex-col flex-1 p-4 space-y-4 overflow-y-auto no-scrollbar">
                         {chatMessages.map((msg, index) => (
                            <div key={index} className={`flex flex-col ${msg.sender === "me" ? "items-end" : "items-start"}`}>
                                <span className="text-xs text-gray-500">{msg.time}</span>
                                <div className={`${msg.sender === "me" ? "bg-yellow-200" : "bg-gray-200"} text-black p-3 rounded-lg max-w-[60%]`}>{msg.text}</div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Message Input */}
                    <div className="border-t p-3 flex items-center">
                        <input
                            type="text"
                            placeholder="Start typing..."
                            className="flex-1 border rounded-full p-2 pl-4 outline-none bg-white"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button className="ml-2 p-2 bg-gray-100 rounded-full" onClick={sendMessage}>
                            ➤
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messages;
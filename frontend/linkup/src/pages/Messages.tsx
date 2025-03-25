import home from "../assets/home.svg"
import links from "../assets/links.svg"
import market from "../assets/market.svg"
import messages from "../assets/messages.svg"
import notification from "../assets/notification.svg"
import logo from "../assets/1.png"
import avatar from "../assets/avatar-1.jpg"
import { useNavigate } from "react-router-dom"

function Messages () {
    const navigate = useNavigate();
    const people = [
        {name: "Alisha Asparagus", pfp: avatar},
        {name: "Lebron Huang", pfp: avatar},
        {name: "Alisha Asparagus", pfp: avatar}
    ]
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
                    <div className="flex flex-col flex-1 p-4 space-y-4 overflow-y-auto">
                        <div className="flex flex-col">
                        <span className="text-xs text-gray-500">12:32</span>
                        <div className="bg-gray-200 text-black p-3 rounded-lg max-w-[60%]">
                            aaaaa iaiiiiiii iiaiiiiiiai iaiaiai iioooooo ooi oiiiii
                        </div>
                        </div>
                        <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-500">12:45</span>
                        <div className="bg-yellow-200 text-black p-3 rounded-lg max-w-[60%]">
                            iiaiaiai aiaiiiii ssss oooooooioii iiiiiiiii iiiiooooooo oaa
                        </div>
                        </div>
                        <div className="flex flex-col">
                        <span className="text-xs text-gray-500">14:05</span>
                        <div className="bg-gray-200 text-black p-3 rounded-lg max-w-[60%]">
                            aaa aa aiiiiii iiiiaiiiiiaia aiiaiai iiiooooo ooioiiiii
                        </div>
                        </div>
                        <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-500">14:45</span>
                        <div className="bg-yellow-200 text-black p-3 rounded-lg max-w-[60%]">
                            eeeeeee eeeee aaaaa
                        </div>
                        </div>
                    </div>
                    <div className="border-t p-3 flex items-center">
                        <input
                        type="text"
                        placeholder="Start typing..."
                        className="flex-1 border rounded-full p-2 pl-4 outline-none bg-white"
                        />
                        <button className="ml-2 p-2 bg-gray-100 rounded-full">
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
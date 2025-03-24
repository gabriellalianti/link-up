import home from "../assets/home.svg"
import links from "../assets/links.svg"
import market from "../assets/market.svg"
import messages from "../assets/messages.svg"
import notification from "../assets/notification.svg"
import logo from "../assets/1.png"
import logout from "../assets/logout.svg"
import background from "../assets/backgroundProfile.jpeg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"



function Market () {
    const navigate = useNavigate();

    const cards = [
        { title: "Card 1", description: "This is the first card" },
        { title: "Card 2", description: "This is the second card" },
        { title: "Card 3", description: "This is the third card" },
        { title: "Card 4", description: "This is the fourth card" },
        { title: "Card 5", description: "This is the fifth card" },
        { title: "Card 6", description: "This is the sixth card" },
        { title: "Card 7", description: "This is the seventh card" },
        { title: "Card 8", description: "This is the eight card" },
        { title: "Card 9", description: "This is the ninth card" },
        { title: "Card 10", description: "This is the tenth card" },
        { title: "Card 11", description: "This is the eleventh card" },
        { title: "Card 12", description: "This is the twelveth card" },
        { title: "Card 13", description: "This is the tenth card" },
        { title: "Card 14", description: "This is the eleventh card" },
        { title: "Card 15", description: "This is the twelveth card" },
      ];
    const [showProfile, setShowProfile] = useState(false);

    const [profileData, setProfileData] = useState({
      oldUsername: "",
      newUsername: "",
      oldPassword: "",
      newPassword: "",
      newRole: "",
      access: {}
    });
  
    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setProfileData({
        ...profileData,
        [e.target.name]: e.target.value,
      });
    };
  
    const [showUserList, setShowUserList] = useState(false);
    const [showUserEdit, setShowUserEdit] = useState(false);
  
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

                <div className="flex bg-gray-200 py-12 justify-center px-10 gap-6 h-screen">
                    <div className="flex flex-col min-w-[250px] gap-4">
                        {/* Profile Box */}
                        <div className="flex flex-col bg-white w-full h-2/3 rounded-xl border">
                            <img className="w-[250px] rounded-xl" src={background}/>
                            <div className="absolute flex flex-col bg-white w-[250px] h-[305px] mt-[158px] px-4 items-center">
                                <h3 className="text-black font-bold text-xl w-full mt-14">
                                Andy Atmadja
                                </h3>
                                <h4 className="text-gray-400 font-semibold text-sm w-full">
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
                        <div className="flex bg-blue-500 w-full h-1/3 rounded-xl border">
                        </div>
                    </div>
                    <div className="flex bg-yellow-300 rounded-xl border p-3">
                        {/* Grid Parent Box */}
                        <div className="bg-yellow-300 rounded-lg mt-5 grid overflow-y-scroll no-scrollbar grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                            {cards.map((card, index) => (
                            <div key={index} className="relative bg-white border rounded-lg shadow-lg w-[250px] min-h-[400px] justify-center">
                                {/* Image at the top */}
                                <img className="w-[250px] rounded-lg" src={background} />

                                {/* Sticky Container */}
                                <div className="absolute top-0 left-0 w-full h-full">
                                <div className="absolute bg-white w-[248px] h-[160px] top-28 left-0 px-3">
                                    <h3 className="text-xl text-black font-semibold mt-12">{card.title}</h3>
                                    <p className="text-gray-600">{card.description}</p>
                                    <text className="text-black mt-2 text-sm">{index} links</text>
                                    <div className="flex flex-wrap bg-white w-full rounded-xl h-[80px] p-2 mt-3 gap-[7px] justify-center items-center">
                                    <button className="w-[80px] h-[30px] rounded-full text-[10px] text-gray-400 bg-gray-200">COMP2511</button>
                                    <button className="w-[80px] h-[30px] rounded-full text-[10px] text-gray-400 bg-gray-200">COMP2511</button>
                                    <button className="w-[80px] h-[30px] rounded-full text-[10px] text-gray-400 bg-gray-200">COMP2511</button>
                                    </div>
                                    <div className="flex flex-row justify-center mt-4 bg-white">
                                    <button className="rounded-full w-full h-[38px] text-sm text-black bg-yellow-300"
                                        onClick={() => {alert("tes")}}>
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
                </div>          
            </div>
        </>
    )
}

export default Market;
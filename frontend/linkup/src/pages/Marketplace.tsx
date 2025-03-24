function Marketplace() {
    // import logo from "../assets/logo";

    return (
        <div className="w-screen, h-screen">
            <div className="flex flex-col">
                <img src="{logo}" className="align-left fixed ml-5 mt-1 h-[60px] w-[100px]"/>
                <div className="flex flex-row items-start w-screen justify-center text-xs">
                    <button className="flex flex-col justify-center min-w-[150px] bg-transparent pointer-events-none">
                        <img src="ee" className="w-[30px] m-auto mb-1"/>
                        Home
                    </button>

                    <button className="flex flex-col justify-center min-w-[150px] bg-transparent pointer-events-none">
                        <img src="ee" className="w-[30px] m-auto mb-1"/>
                        My Links
                    </button>

                    <button className="flex flex-col justify-center min-w-[150px] bg-transparent border-0 border-b-2 border-black rounded-none pointer-events-none">
                        <img src="ee" className="w-[30px] m-auto mb-1 border-none"/>
                        Market
                    </button>

                    <button className="flex flex-col justify-center min-w-[150px] bg-transparent pointer-events-none">
                        <img src="ee" className="w-[30px] m-auto mb-1"/>
                        Messaging
                    </button>

                    <button className="flex flex-col justify-center min-w-[150px] bg-transparent pointer-events-none">
                        <img src="ee" className="w-[30px] m-auto mb-1"/>
                        Notifications
                    </button>
                </div>
            </div>

            <div className="flex">
                more content etc
            </div>
        </div>
    );
}

export default Marketplace;

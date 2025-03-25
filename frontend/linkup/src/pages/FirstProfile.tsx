import { useNavigate } from "react-router-dom"

function FirstProfile () {
    const navigate = useNavigate();
    return (
        <>
             <div className="flex flex-row items-center justify-center w-screen h-screen bg-yellow-200">
                <div className="w-[600px] h-[800px] bg-yellow-200 rounded-xl flex flex-col items-center">
                    <form className="mt-10 bg-white p-10 rounded-xl shadow-xl w-1/3 min-w-[450px] min-h-[600px]"
                    
                        onClick={(e) => e.stopPropagation()}>
                        <p className="gap-2 mt-3 mb-2 font-bold text-xl ">
                            Create Your Profile
                        </p>
                        <input
                            name=""
                            placeholder="Profile Name"
                            className={`mb-5 w-full p-2 border rounded text-black bg-white`}
                        />
                        <input
                            name="a"
                            placeholder="Year Of Study"
                            className={`mb-5 w-full p-2 border rounded bg-white`}
                        />
                        <input
                            name="a"
                            placeholder="Degree"
                            className={`mb-5 w-full p-2 border rounded bg-white`}
                        />
                        <div className={`flex justify-between items-baseline border rounded mb-5 p-2`}>
                            <p className="text-base font-thin">Year Of Birth</p>
                            <input
                            name="fileDate"
                            placeholder="File Date"
                            type="date"
                            className={`w-2/5 rounded px-2 cursor-pointer hover:bg-gray-100 bg-white`}
                            />
                        </div>
                        <input
                            name="fileDivision"
                            placeholder="Bio"
                            className={`mb-5 w-full p-2 border rounded bg-white`}
                        />
                        <input
                            name=""
                            placeholder="Course Taking this Term"
                            className={`mb-5 w-full p-2 border rounded bg-white`}
                        />
                       
                        <div className="flex flex-col mt-3 justify-center gap-4 bg-white">
                            
                        </div>
                        <div className="flex flex-row">
                            <div className="flex rounded-full bg-black w-[170px] h-[170px]"> 
                            </div>
                                <button
                                className="py-2 px-4 mb- bg-blue-500 text-white rounded-lg outline-none"
                            >
                                Update Profile
                            </button>
                        </div>

                    </form>
                    <div className="flex flex-col mt-5">
                </div>
                </div>
            </div>
        </>
    )
}

export default FirstProfile;
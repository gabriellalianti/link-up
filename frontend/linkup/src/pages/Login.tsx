import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../components/components/ui/card";
import image from "../assets/bg-portal.jpeg";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row items-start w-screen h-screen">
            <div className="flex flex-col items-center justify-center z-10 bg-[#FFE600] h-screen w-[450px]">
                <div className="flex flex-col">
                    <div className="text-center flex flex-col text-2xl text-black font-bold">LinkUp</div>
                    <div className="text-center text-sm font-extralight mt-1">Please enter your credentials to log in</div>
                </div>
                <div className="flex flex-col mt-2">
                        <div className="flex flex-col">
                            <input
                                type="email" 
                                autoComplete="off"
                                className="mt-2 p-2 border rounded-lg bg-white outline-none"
                                placeholder="Email"
                            />
                        </div>
                        <div className="flex flex-col mt-1">
                            <input
                                type="password"
                                autoComplete="off"
                                className="mt-2 p-2 border rounded-lg bg-white w-[300px] outline-none"
                                placeholder="Password"
                            />
                        </div>
                </div>
                <div className="flex flex-col mt-5">
                    <button
                        className="py-2 px-4 bg-blue-500 text-white rounded-lg outline-none"
                        onClick={() => navigate('/home')}
                    >
                        →
                    </button>
                </div>
            </div>
            <div
                className="fixed inset-0 bg-cover ml-44"
                style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "top left",
                }}
             ></div>
        </div>
    );
}

export default Login;

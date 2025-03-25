import { useState } from "react";
import image from "../assets/bg-portal.jpeg";
import logo from "../assets/1.png"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    
    

    const onButtonClick = async () => {
        try {
        const response = await fetch("http://localhost:5001/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: username, password }),
            credentials: 'include',
        });

        const data = await response.json();
        if (response.ok) {
            navigate('/home');
        }
        else {
            setPasswordError(true);
            setUsernameError(false);
        }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
      };

    return (
        <div className="flex flex-row items-start w-screen h-screen">
            <div className="fixed flex flex-col items-center justify-center z-10 bg-[#FFE600] h-screen w-[450px]">
                <div className="flex flex-col">
                    <div className="text-center flex flex-col text-3xl text-black font-bold">LinkUp</div>
                    <div className="text-center text-sm font-extralight mt-1">Please enter your credentials to log in</div>
                </div>
                <div className="flex flex-col mt-2">
                        <div className="flex flex-col">
                            <input
                                type="email" 
                                autoComplete="off"
                                onChange={(ev) => setUsername(ev.target.value)}
                                className="mt-2 p-2 border rounded-lg bg-white outline-none"
                                placeholder="Email"
                            />
                        </div>
                        <div className="flex flex-col mt-1">
                            <input
                                type="password"
                                autoComplete="off"
                                onChange={(ev) => setPassword(ev.target.value)}
                                className="mt-2 p-2 border rounded-lg bg-white w-[300px] outline-none"
                                placeholder="Password"
                            />
                        </div>
                </div>
                <div className="flex flex-col mt-5">
                    <button
                        className="py-2 px-4 bg-blue-500 text-white rounded-lg outline-none"
                        onClick={() => onButtonClick()}
                    >
                        →
                    </button>
                </div>
                {   
                    usernameError ? <p className="mt-2 text-red-500 font-semibold"> Not a student email </p> : null
                }
                {
                    passwordError ? <p className="mt-2 text-red-500 font-semibold"> Invalid password </p> : null
                }
                <div className="text-center text-sm font-extralight mt-1 cursor-pointer" onClick={() => navigate('/create-profile')}>To log in, create your profile here</div>
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

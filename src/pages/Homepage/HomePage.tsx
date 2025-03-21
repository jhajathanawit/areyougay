import  { useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    const [position, setPosition] = useState({});
    const handleClick = () => {
        setPosition({
            position: 'absolute', 
            left: Math.random() * window.innerWidth - 10, 
            top: Math.random() * window.innerHeight - 10 
        });
    }
    return(
        <div className="flex flex-col items-center mt-10 h-screen space-y-4">
            <h1 className="text-bold text-3xl">are you GAY???</h1>
            <div className="flex space-y-4 gap-4">
                <Link to="/detail">
                <div>
                    <button className="bg-pink-400 rounded p-2">Yes i'm Guy</button>
                </div>
                
                </Link>
                <div>
                    <button  
                    className="bg-red-400 rounded p-2"
                    style={position}
                    onClick={handleClick}
                    >No!! i'm not</button>
                </div>
            </div>
        </div>

    )
}
export default Homepage;
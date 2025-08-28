
import { LuNetwork } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router";

export default function Navs(){
    return (
        <>
            <Link to={"/networking"}>
                <span role="button" className="relative transition transition-all duration-250 ease-in-out text-xl hover:text-2xl border rounded-full p-3 hover:p-5 bg-slate-100 border-slate-500 flex items-center justify-center">
                    <LuNetwork />
                    <p className="absolute -bottom-5 border rounded p-1 px-2 bg-white text-xs">
                        NETWORKING
                    </p>
                </span>
            </Link>
            <Link to={'/se'}>
                <span className="relative transition transition-all duration-250 ease-in-out text-xl hover:text-2xl border rounded-full p-3 hover:p-5 bg-slate-100 border-slate-500 flex items-center justify-center">
                    <FaGlobe />
                    <p className="absolute -bottom-5 border rounded p-1 px-2 bg-white text-xs w-max">
                        SOFTWARE ENGINEERING
                    </p>
                </span>
            </Link>
            
        </>
    )
}
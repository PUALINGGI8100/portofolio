
import { LuNetwork } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa";

export default function Navs(){
    return (
        <>
            <span className="relative text-xl hover:text-2xl border rounded-full p-3 hover:p-5 bg-slate-100 border-slate-500 flex items-center justify-center">
                <LuNetwork />
                <p className="absolute -bottom-6 border rounded p-1 px-2 bg-white text-xs">
                    NETWORKING
                </p>
            </span>
            <span className="relative text-xl hover:text-2xl border rounded-full p-3 hover:p-5 bg-slate-100 border-slate-500 flex items-center justify-center">
                <FaGlobe />
                <p className="absolute -bottom-6 border rounded p-1 px-2 bg-white text-xs w-max">
                    WEB DEVELOPMENT
                </p>
            </span>
            
        </>
    )
}
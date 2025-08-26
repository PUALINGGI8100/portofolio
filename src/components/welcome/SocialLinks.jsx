
import {FaYoutube, FaTwitter, FaTelegram, FaLinkedin} from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { YTLINK, FBLINK, IGLINK, TELELINK, XLINK, MAILLINK, LINKEDLINK } from "../../constants/socialLinks";


export default function SocialLinks(){
    return (
        <div className="justify-self-start border rounded-lg p-5 sm:px-10 bg-slate-200 border-slate-600 flex items-center justify-center gap-5 flex-wrap text-3xl sm:text-5xl">
            <a href={YTLINK} target="_blank" title="YOUTUBE" rel="noopener noreferrer" className="hover:text-red-500">
                <FaYoutube />
            </a>
            <a href={FBLINK} target="_blank" title="FACEBOOK" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaSquareFacebook />
            </a>
            <a href={XLINK} target="_blank" title="TWITTER" rel="noopener noreferrer" className="hover:text-cyan-300">
                <FaTwitter />
            </a>
            <a href={IGLINK} target="_blank" title="INSTAGRAM" rel="noopener noreferrer" className="hover:text-pink-400">
                <AiFillInstagram />
            </a>
            <a href={TELELINK} target="_blank" title="TELEGRAM" rel="noopener noreferrer" className="hover:text-cyan-300">
                <FaTelegram />
            </a>
            <a href={MAILLINK} target="_blank" title="GMAIL" rel="noopener noreferrer" className="hover:text-orange-500">
                <SiGmail /> 
            </a>
            <a href={LINKEDLINK} target="_blank" title="LinkedIn" rel="noopener noreferrer" className="hover:text-sky-500">
                <FaLinkedin /> 
            </a>
        </div>
    )
}
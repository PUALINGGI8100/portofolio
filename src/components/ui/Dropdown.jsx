import { useState } from "react"
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

export default function Dropdown({ children, teks }) {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    return (
        <>
            <button onClick={handleClick} className="border-b flex items-center justify-start border-slate-200 p-3 w-full">
                <p className="grow font-bold text-left">{teks}</p>
                {show ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
            </button>
            {show && children && <div className="p-1 flex flex-col bg-slate-100 min-w-full">{children}</div>}
        </>
    )
}
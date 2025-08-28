import { Outlet, NavLink } from "react-router";
import { FaGlobe } from "react-icons/fa";
import { RiMenuFoldFill, RiMenuFold2Fill } from "react-icons/ri"
import Dropdown from "./ui/Dropdown";
import { useState } from "react";

export default function Se(){
    const [show, setShow] = useState(false);
    return (
        <section className="body-section grow flex flex-row flex-1 w-full gap-2 max-h-full sm:max-h-auto">
            <div className={`flex grow absolute sm:static z-999 bg-slate-50 w-full h-full ${show ? "left-0" : "-left-180"} top-0 sm:relative sm:max-w-[25%]`}>
                <nav className="flex flex-col border border-slate-200 rounded grow">
                    <Dropdown teks={"WEB Based"}>
                        <NavLink
                            to={"espdht"}
                            className={({ isActive }) =>
                                (isActive ? "bg-sky-300 hover:bg-sky-200" : "hover:bg-slate-50") + " border-b flex items-center gap-5 border-slate-200 p-5 text-lg"
                            }
                        >
                            <FaGlobe className="min-w-[25px] min-h-[25px]" />
                            <p className="text-sm">Expert Systems (Penyakit & hama tanaman jagung)</p>
                        </NavLink>
                        <NavLink
                            to={"web"}
                            className={({ isActive }) =>
                                (isActive ? "bg-blue-500 " : "") + "border-b flex items-center gap-5 border-slate-200 hover:bg-slate-50 p-5 text-lg"
                            }
                        >
                            <FaGlobe className="min-w-[25px] min-h-[25px]" />
                            <p className="text-sm">Redesign</p>
                        </NavLink>
                    </Dropdown>
                    <Dropdown teks={"ANDROID Based"}>

                    </Dropdown>
                </nav>
            </div>
            <div className="grow relative broder rounded bg-slate-500 p-5 flex max-w-full sm:w-[75%]">
                <div className="absolute sm:hidden border rounded-full border-slate-400 z-9999 p-2 text-xl right-5 bottom-5 bg-white active:bg-sky-50">
                    {show ? <RiMenuFoldFill onClick={() => setShow(false)} /> : <RiMenuFold2Fill onClick={() => setShow(true)} />}
                </div>
                <Outlet />
            </div>
        </section>
    )
}
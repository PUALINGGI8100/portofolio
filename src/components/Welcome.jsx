
import ProfileImg from "./welcome/ProfileImg";
import SocialLinks from "./welcome/SocialLinks";
import Navs from "./welcome/Navs";

export default function Welcome() {
    return(
        <section className="body-section flex flex-col w-full">
            <div className="flex grow flex-col gap-3 max-h-1/2 w-full p-5 pb-8 items-center justify-center">
                <ProfileImg />
                <div className="pt-5">
                    <h1 className="font-bold text-3xl monstread text-center">I'm a Tech Enthusiast</h1>
                </div>
            </div>
            <div className="relative gap-25 flex w-full h-[5px] bg-white items-center justify-center">
                <Navs />
            </div>
            <div className="grow border border-slate-100 rounded flex-1 bg-slate-500 p-5 flex flex-col gap-10 items-center justify-center">
                <h2 className="styled dm-mono text-4xl sm:text-5xl font-bold text-slate-50 text-center">
                    LET'S CONNECT
                </h2>
                <SocialLinks />
            </div>
        </section>
    )
}
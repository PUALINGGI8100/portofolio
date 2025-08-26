

export default function ProfileImg(){
    return (
        <div className="relative flex items-center justify-center pb-5 min-w-1/2 sm:min-w-auto">
            <img src="/images/img_profile.jpg" className="rounded-full border border-slate-100 w-[150px] h-[150px]"/>
            <span className="absolute p-2 px-5 border border-slate-200 rounded-lg bg-white -bottom-1">
                <h1 className="font-bold text-xl monstread">Hay..! &#x1F44B;</h1>
            </span>
        </div>
    )
}
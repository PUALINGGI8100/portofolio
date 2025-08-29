
import { FaGithub, FaGlobe  } from "react-icons/fa";

import "./styles/Bomar.css";

export default function BomarFood(){
    return (
        <article className="bomar-body grow flex flex-col max-w-full gap-5 p-5">
            <header className="text-xl lg:text-3xl font-bold monstread text-center flex flex-col max-h-[10%] xl:max-h-[10%]">
                <h1 className="styled">
                    <em>BOOMARFOOD</em> WEB REDESIGN
                </h1>
            </header>
            <section className="flex flex-col justify-center gap-5 sm:gap-2 xl:gap-5 grow max-h-[70%] lg:max-h-[75%] min-w-full">
                <aside className="flex flex-col bg-slate-100 p-5 pt-3 broder rounded border-slate-200 grow h-max">
                    <p className="text-sm">
                        Pelatihan yang di laksanakan oleh
                        <a href="https://www.revou.co/" target="_blank" className="text-blue-500">&nbsp;RevoU</a>,
                        pada 07 April 2025, Mengharuskan peserta untuk membuat project yang menerapkan semantic design, sebagai syarat untuk menerima sertifikat pelatihan.
                    </p>
                    <figure className="flex flex-col w-full p-5 items-center justify-center flex-wrap gap-5">
                        <div className="flex grow flex-wrap justify-center gap-5">
                            <img src="/images/tech/html5.png" alt="html" className="max-h-[25px] md:max-h-[30px] xl:max-h-[40px]" />
                            <img src="/images/tech/css.png" alt="css" className="max-h-[25px] md:max-h-[30px] xl:max-h-[40px]" />
                            <img src="/images/tech/js.png" alt="js" className="max-h-[25px] md:max-h-[30px] xl:max-h-[40px]" />
                        </div>
                        <figcaption>Gambar 1. Tech Stacks</figcaption>
                    </figure>
                </aside>
                <figure className="slider">
                    <div className="slide">    
                        <div className="img-container">
                            <img src="/images/bomar/home_page.png" alt="home_page" />
                        </div>
                        <div className="img-container">
                            <img src="/images/bomar/home_p_2.png" alt="home_p_2" />
                        </div>
                        <div className="img-container">
                            <img src="/images/bomar/about_p.png" alt="about_p" />
                        </div>
                        <div className="img-container">
                            <img src="/images/bomar/contact_p.png" alt="contact_p" />
                        </div>
                        <div className="img-container">
                            <img src="/images/bomar/home_page.png" alt="home_page" />
                        </div>
                    </div>
                </figure>
            </section>
            <footer className="w-full flex flex-col gap-2 lg:gap-5 max-h-[15%] max-w-full">
                <div className="flex max-w-full">
                    <div className="border rounded-tl-lg rounded-bl-lg bg-slate-800 text-slate-50 p-2 text-3xl">
                        <FaGlobe />
                    </div>
                    <div className="flex border border-l-0 rounded-tr-lg rounded-br-lg px-5 grow items-center bg-slate-50 border-slate-800 max-w-full overflow-x-auto flex-nowrap">
                        <a className="text-sm lg:text-lg text-blue-800 hover:text-blue-500" target="_blank" href="https://revou-fundamental-course.github.io/07-apr-25-PUALINGGI8100/">https://revou-fundamental-course.github.io/07-apr-25-PUALINGGI8100/</a>
                    </div>
                </div>
                <div className="flex max-w-full">
                    <div className="border rounded-tl-lg rounded-bl-lg bg-slate-800 text-slate-50 p-2 text-3xl">
                        <FaGithub />
                    </div>
                    <div className="flex border border-l-0 rounded-tr-lg rounded-br-lg px-5 grow items-center bg-slate-50 border-slate-800 max-w-full overflow-x-auto flex-nowrap">
                        <p className="text-sm lg:text-lg">https://github.com/revou-fundamental-course/07-apr-25-PUALINGGI8100.git</p>
                    </div>
                </div>
            </footer>
        </article>
    )
}
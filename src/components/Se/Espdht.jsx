
import { FaGithub, FaCopy } from "react-icons/fa";

import "./styles/Espdht.css";

export default function Espdht(){
    return (
        <article className="espdht-body grow flex flex-col gap-5">
            <header className="text-xl lg:text-3xl font-bold text-slate-50 monstread text-center flex flex-col max-h-[15%] xl:max-h-[10%]">
                <h1 className="styled">
                    SISTEM PAKAR PENGENALAN PENYAKIT DAN HAMA JAGUNG BERBASIS <em>CERTAINTY FACTOR</em>
                </h1>
            </header>
            <section className="shrink flex flex-col lg:flex-row gap-5 sm:gap-2 max-h-[70%] xl:gap-5 xl:max-h-[80%]">
                <figure className="slider">
                    <div className="slide">    
                        <div className="img-container">
                            <img src="/images/espdht/register.png" alt="register" />
                        </div>
                        <div className="img-container">
                            <img src="/images/espdht/login.png" alt="login" />
                        </div>
                        <div className="img-container">
                            <img src="/images/espdht/admin/bp-hama.png" alt="bp-hama" />
                        </div>
                        <div className="img-container">
                            <img src="/images/espdht/admin/bp-penyakit.png" alt="bp-penyakit" />
                        </div>
                        <div className="img-container">
                            <img src="/images/espdht/user/hasil-diagnosa-hama.png" alt="hasil-diagnosa-hama" />
                        </div>
                        <div className="img-container">
                            <img src="/images/espdht/user/hasil-diagnosa-penyakit.png" alt="hasil-diagnosa-penyakit" />
                        </div>
                        <div className="img-container">
                            <img src="/images/espdht/register.png" alt="register" />
                        </div>
                    </div>
                </figure>
                <aside className="grow flex flex-col lg:max-w-1/2 bg-slate-100 p-5 pt-3 broder rounded border-slate-200 overflow-y-auto max-h-full">
                    <h1 className="text-3xl font-bold pb-2">Deskripsi</h1>
                    <p className="text-sm">Merupakan salah satu syarat untuk menyelesaikan program sarjana di Universitas Al Asyariah Mandar.</p>
                    <p className="text-sm pb-2">Sistem dikembangkan Menggunakan metode ESDLC (John Durkin, 1994), Data diolah secara kuantitatif dengan memanfaatkan pendekatan certainty factor (John Durkin, 1994).</p>
                    <figure className="flex flex-col gap-2 w-full items-center grow justify-center max-h-[300px] p-3">
                        <img src="/images/espdht/esdlc.png" alt="use case system" className="inline-flex max-h-full" />
                        <figcaption>Gambar 1. Exper System Development Life Cycle (ESDLC), John Durkin 1994</figcaption>
                    </figure>
                    <p className="text-sm pt-2">UML (Unified Model Language) digunakan untuk membantu menjelaskan alur kerja dan struktur sistem yang di buat.</p>
                    <figure className="flex flex-col gap-2 w-full items-center grow justify-center max-h-[500px] p-3">
                        <img src="/images/espdht/uml/use-case.png" alt="use case system" className="inline-flex max-h-full" />
                        <figcaption>Gambar 2. Use Case Sistem</figcaption>
                    </figure>
                    <figure className="flex flex-col gap-2 w-full items-center grow justify-center max-h-[500px] p-3">
                        <img src="/images/espdht/uml/class-diagram.png" alt="class diagram system" className="inline-flex max-h-full" />
                        <figcaption>Gambar 3. Class Diagram Database</figcaption>
                    </figure>
                    <p className="text-sm">Beberapa Teknologi yang di integrasikan ke dalam sistem antara lain :</p>
                    <figure className="flex flex-col w-full p-5 items-center justify-center flex-wrap gap-5">
                        <div className="flex grow flex-wrap justify-center gap-5">
                            <img src="/images/tech/html5.png" alt="html" className="max-h-[25px] md:max-h-[30px] xl:max-h-[40px]" />
                            <img src="/images/tech/css.png" alt="css" className="max-h-[25px] md:max-h-[30px] xl:max-h-[40px]" />
                            <img src="/images/tech/js.png" alt="js" className="max-h-[25px] md:max-h-[30px] xl:max-h-[40px]" />
                            <img src="/images/tech/php.png" alt="php" className="max-h-[25px] md:max-h-[30px] xl:max-h-[40px]" />
                            <img src="/images/tech/mysql.png" alt="mysql" className="max-h-[25px] md:max-h-[30px] xl:max-h-[40px]" />
                            <img src="/images/tech/laravel.png" alt="laravel" className="max-h-[25px] md:max-h-[30px] xl:max-h-[40px]" />
                            <img src="/images/tech/bootstrap.png" alt="bootstrap" className="max-h-[25px] md:max-h-[30px] xl:max-h-[40px]" />
                        </div>
                        <figcaption>Gambar 4. Tech Stacks</figcaption>
                    </figure>
                </aside>
            </section>
            <footer className="w-full flex gap-0 max-h-[10%]">
                <div className="border rounded-tl-lg rounded-bl-lg bg-slate-800 text-slate-50 p-2 text-3xl">
                    <FaGithub />
                </div>
                <div className="flex border border-l-0 rounded-tr-lg rounded-br-lg px-5 grow items-center bg-slate-50 border-slate-800">
                    <p className="text-">Https://github.com</p>
                </div>
            </footer>
        </article>
    )
}

export default function Espdht(){
    return (
        <article className="grow flex flex-col gap-5">
            <header className="text-xl lg:text-3xl font-bold text-slate-50 monstread text-center flex flex-col">
                <h1 className="styled">
                    SISTEM PAKAR PENGENALAN PENYAKIT DAN HAMA JAGUNG BERBASIS <em>CERTAINTY FACTOR</em>
                </h1>
            </header>
            <section className="grow flex flex-col lg:flex-row gap-5 sm:gap-2">
                <figure className="slider grow relative flex lg:max-w-1/2 justify-center items-center bg-white border rounded border-slate-200 overflow-x-hidden">
                    <img className="absolute max-h-full" src="/images/espdht/register.png" alt="register" />
                    <img className="absolute max-h-full -left-full" src="/images/espdht/login.png" alt="login" />
                </figure>
                <aside className="grow block lg:max-w-1/2 bg-slate-100 p-5 broder rounded border-slate-200">
                    <h1 className="text-xl font-bold pb-2">Deskripsi</h1>
                    <p className="text-sm">Sistem dikembangkan dalam rangka penyelesaian program sarjana. Menggunakan metode ESDLC, di mana data diolah secara kuantitatif dengan memanfaatkan pendekatan certainty factor.</p>
                </aside>
            </section>
            <footer className="w-full p-5 flex gap-3 sm:gap-5 justify-center items-center flex-wrap">
                <img src="/images/tech/html5.png" alt="html" className="max-w-[30px] md:max-w-[40px] xl:max-w-[50px] max-h-[50px]" />
                <img src="/images/tech/css.png" alt="css" className="max-w-[30px] md:max-w-[40px] xl:max-w-[50px] max-h-[50px]" />
                <img src="/images/tech/js.png" alt="js" className="max-w-[30px] md:max-w-[40px] xl:max-w-[50px] max-h-[50px]" />
                <img src="/images/tech/php.png" alt="php" className="max-w-[30px] md:max-w-[40px] xl:max-w-[50px] max-h-[50px]" />
                <img src="/images/tech/mysql.png" alt="mysql" className="max-w-[30px] md:max-w-[40px] xl:max-w-[50px] max-h-[50px]" />
                <img src="/images/tech/laravel.png" alt="laravel" className="max-w-[30px] md:max-w-[40px] xl:max-w-[50px] max-h-[50px]" />
                <img src="/images/tech/bootstrap.png" alt="bootstrap" className="max-w-[30px] md:max-w-[40px] xl:max-w-[50px] max-h-[50px]" />
            </footer>
        </article>
    )
}
import Link from "next/link";

export default function Home() {
  return (
   <>
    <div className="flex justify-center items-center w-screen h-screen">
        <Link  
        className="active:bg-black flex justify-center items-center rounded-xl w-fit px-4 h-20 sm:text-8xl text-2xl bg-slate-200/20" href={"/ilan-olustur"}>
        ilan oluşturun
        </Link>
    </div>
   </>
  );
}

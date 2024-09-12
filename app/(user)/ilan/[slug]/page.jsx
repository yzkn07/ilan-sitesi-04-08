import { createClient } from "@/ustils/supabase/server"
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DetailPage({ params }) {
    const { slug } = params
    const supabase = createClient()

    const { data, error } = await supabase
        .from('ilanlar')
        .select('*, kategoriler(*),ders_yerleri(*)')
        .eq('slug', slug).single()
    console.log(data);

    if(!data) {
        return(
            notFound()
        )
    }
    if(!data.onay_durumu){
        return(
            <div className="flex flex-col mx-auto  w-screen h-screen  justify-center items-center bg-gray-800">
                <h1 className="mb-4 text-2xl p-8 rounded-xl bg-gray-700">ilan onay bekliyor</h1>
                <Link className="bg-slate-200/20 p-2 rounded-xl hover:bg-slate-200/40 active:bg-black" href={"/ilan-olustur"}>{"< "} Geri git</Link>
            </div>
        )
    }
    
    return(
    <>
        <h1 className="p-4 text-3xl">ilan detay sayfası</h1>
        <div className=" m-2 p-1 rounded-xl bg-gray-700">
            <p className="p-2">ilan başlığı:
                <span className="ms-2 p-1 rounded-md bg-white text-black">{data.ilan_basligi}</span> 
            </p>
            <p className="p-2">adres: 
                <span className="ms-2 p-1 rounded-md bg-white text-black">{data.ilan_sehir} / {data.ilan_ilce}</span>
            </p>
            <p className="p-2">eğitim tipi: 
                <span className="ms-2  p-1 rounded-md bg-white text-black">{data.egitim_tipi}</span>
            </p>
            <p className="p-2">kategori: 
                <span className="ms-2  p-1 rounded-md bg-white text-black">{data.kategoriler.kategori_adi}</span>
            </p>
            <p className="p-2">ders yeri: 
                <span className="ms-2  p-1 rounded-md bg-white text-black">{data.ders_yerleri.ders_yeri_adi}</span>
            </p>
        </div>
    </>  
    )
}
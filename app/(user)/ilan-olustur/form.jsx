"use client"

import IlanKaydet from "@/actions/ilan"
import { redirect, useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateAdForm({kategoriler, dersYerleri}) {
    
    
    
    const [ilanBasligi, setIlanBasligi] = useState("")
    const [egitimYeriGöster, setEgitimYeriGöster] = useState(false)
    const handleBaslik = (e) => {
        setIlanBasligi(e.target.value)
    }
    const handleEgitimYeri = (e) => {
        const value = e.target.value
        if(value !== "ONLINE"){
            setEgitimYeriGöster(true)
        }else{
            setEgitimYeriGöster(false)
        }
    } 
    
    
    return(
        <>
        <form action={IlanKaydet} className="rounded-2xl bg-gray-700 flex flex-col gap-5 p-4 text-black w-4/5 mx-auto mt-4">
            <label className="text-white" htmlFor="ilanBasligi">ilan başlığı:</label>
            <input value={ilanBasligi} onChange={handleBaslik} className="p-1 rounded-md" type="text" name="ilanBasligi" id="ilanBasligi" placeholder="ilan başlığı"/>
            <label htmlFor="egitimTipi" className="text-white">eğitim tipi:</label>
            <select onChange={handleEgitimYeri} className="p-1 rounded-md" name="egitimTipi" id="egitimTipi">
                <option value="">seçiniz</option>
                <option value="ONLINE">Online</option>
                <option value="OFFLINE">Ofline</option>
                <option value="BOTH">Hibrit</option>
            </select>

            <label className="text-white" htmlFor="kategori">kategori:</label>
            <select className="p-1 rounded-md" name="kategori" id="kategori">
                <option value="">Seçiniz</option>
                {kategoriler.map(e => (
                    <option key={e.id} value={e.id}>{e.kategori_adi}</option>
                ))}
            </select>
            <label className="text-white" htmlFor="dersYeri">ders yerleri:</label>
                    <select className="p-1 rounded-md" name="dersYeri" id="dersYeri">
                        <option value="">Seçiniz</option>
                        {dersYerleri.map(e => (
                            <option key={e.id} value={e.id}>{e.ders_yeri_adi}</option>
                        ))}
                    </select>

            { egitimYeriGöster && (
                <>
                   <input className="p-1 rounded-md" type="text" name="sehir" id="sehir" placeholder="il"/>
                   <input className="p-1 rounded-md" type="text" name="ilce" id="ilce" placeholder="ilçe"/>
                </>
            )}

            

            <button className="active:bg-black mx-auto text-white bg-blue-600 w-40 p-2 rounded-lg">ilanı kaydet</button>

        </form>
        </>
        
    )

    
}
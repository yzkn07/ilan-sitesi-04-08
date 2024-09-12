"use server"

import { createClient } from "@/ustils/supabase/server"
import { redirect } from "next/navigation"

export default async function IlanKaydet(formData) {

    const supabase = createClient()
    const { data : ilanlar , error: ilanlarError } = await supabase
        .from("ilanlar")
        .select("*")
    let sonSlug;
    if(ilanlar.length === 0){ 
     sonSlug = 1 
    }else{
     sonSlug = ilanlar.map(e => e.id)[ilanlar.length - 1] + 1
    }

    const { data, error } = await supabase
    .from("ilanlar")
    .insert({
        ilan_basligi: formData.get("ilanBasligi"), 
        ilan_sehir: formData.get("sehir"),
        ilan_ilce: formData.get("ilce"),
        egitim_tipi: formData.get("egitimTipi"),
        kullanici_id: 1,
        slug: `ilan${sonSlug}`,
        ders_yeri_id: formData.get("dersYeri"),
        kategori_id: formData.get("kategori")
    })

    redirect(`/ilan/ilan${sonSlug}`)
}
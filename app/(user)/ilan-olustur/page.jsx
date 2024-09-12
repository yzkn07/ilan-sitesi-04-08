import { createClient } from "@/ustils/supabase/server";
import CreateAdForm from "./form";

export default async function CreateAdPage() {
    const supabase = createClient()
    const { data: kategoriler, error: kategorilerError } = await supabase
        .from('kategoriler')
        .select('*')
    const { data: dersYerleri, error: dersYerleriError } = await supabase
        .from('ders_yerleri')
        .select('*')


        

    return(
        <>
            <CreateAdForm kategoriler={kategoriler} dersYerleri={dersYerleri}/>
        </>
    )
}
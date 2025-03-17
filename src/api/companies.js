import supabaseClient from "@/utils/supabase";

export default async function getCompanies(token) {
  const supabase = await supabaseClient(token);
  let query = supabase.from("companies").select("*");

  const { data, error } = await query;

  if (error) {
    console.log("❌ Supabase Query Error:", error);
    return null;
  }

  return data;
}

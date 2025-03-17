import supabaseClient from "@/utils/supabase";

export default async function getJobs(token, { company, searchQuery }) {
  // company searchquery {} er vitore karon id destructure kore niyeche ********************
  const supabase = await supabaseClient(token);
  let query = supabase.from("jobs").select("*,companies(*)");
  // filering
  if (company) {
    query = query.eq("company_id", company);
  }
  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.log("❌ Supabase jobs Error:", error);
    return null;
  }

  return data;
}

// get single job

export async function getSingleJob(token, { id }) {
  const supabase = await supabaseClient(token);
  let query = supabase
    .from("jobs")
    .select("*,companies(*), applications(*)")
    .eq("id", id)
    .single();

  const { data, error } = await query;

  if (error) {
    console.log("❌ Supabase singlejob Error:", error);
    return null;
  }

  return data;
}
//  job close and open
export async function getHiringJob(token, { id }, isOpen) {
  // id{} er vitore karon id destructure kore niyeche ********************
  const supabase = await supabaseClient(token);
  let query = supabase.from("jobs").update({ isOpen }).eq("id", id).select();

  const { data, error } = await query;

  if (error) {
    console.log("❌ Supabase hiring status Error:", error);
    return null;
  }

  return data;
}
// post/insert a  job
export async function addNewJob(token, _, jobData) {
  const supabase = await supabaseClient(token);
  let query = supabase
    .from("jobs")
    .insert([{ ...jobData }])
    .select();

  const { data, error } = await query;

  if (error) {
    console.log("❌ Supabase insert Error:", error);
    return null;
  }

  return data;
}

// get myjobs job

export async function getMyJobs(token, { recruiter_id }) {
  const supabase = await supabaseClient(token);
  let query = supabase
    .from("jobs")
    .select("*,companies(*)")
    .eq("recruiter_id", recruiter_id);

  const { data, error } = await query;

  if (error) {
    console.log("❌ Supabase jobs Error:", error);
    return null;
  }

  return data;
}
// delete my job

export async function DeleteJobs(token, { id }) {
  const supabase = await supabaseClient(token);
  let query = supabase.from("jobs").delete().eq("id", id);

  const { error } = await query;

  if (error) {
    console.log("❌ deleting job Error:", error);
    return null;
  }
}

// edit job
export async function EditJobs(token, { id }, jobData) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from("jobs")
    .update(jobData)
    .eq("id", id)
    .select()
    .single(); // To return a single updated job

  if (error) {
    console.error("❌ Error updating job:", error);
    return null;
  }

  return data; // Return updated job data
}

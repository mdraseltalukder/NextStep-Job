import supabaseClient, { supabaseUrl } from "@/utils/supabase";

export async function applyToJob(token, _, jobData) {
  const supabase = await supabaseClient(token);

  // File upload
  const randomId = Math.floor(Math.random() * 10000);
  const fileName = `resume-${jobData.candidate_id}-${randomId}`;

  const { error: uploadError } = await supabase.storage
    .from("resume")
    .upload(fileName, jobData.resume);

  if (uploadError) throw new Error("Error Uploading Resume..", uploadError);

  const resume = `${supabaseUrl}/storage/v1/object/public/resume/${fileName}`;

  // Insert into database
  const { data, error } = await supabase
    .from("applications")
    .insert([{ ...jobData, resume }])
    .select();

  if (error) {
    console.error("Error Applying to Job:", error);
    return null;
  }

  console.log("Success:", data);

  return data;
}

// update application status

export default async function updateApplicationStatus(
  token,
  { job_id },
  status
) {
  const supabase = await supabaseClient(token);
  let query = supabase
    .from("applications")
    .update({ status })
    .eq("job_id", job_id)
    .select();

  const { data, error } = await query;

  if (error || data.length === 0) {
    console.log("❌ Supabase Query Error:", error);
    return null;
  }

  return data;
}

// get single user applications
export async function getApplications(token, { user_id }) {
  const supabase = await supabaseClient(token);

  let { data, error } = await supabase
    .from("applications")
    .select("*, job:jobs(title, location, company:companies(name)) ")
    .eq("candidate_id", user_id);
  // ekhane jobs er data ene job er modhe rakha hoiche
  if (error || data.length === 0) {
    console.error("Error getting application data", error);
    return null;
  }

  return data;
}

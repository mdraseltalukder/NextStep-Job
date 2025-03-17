import CreatedJobs from "@/components/CreatedJobs";
import UserApplications from "@/components/UserApplications";
import { useUser } from "@clerk/clerk-react";

export default function MyJobs() {
  const { user } = useUser();
  return (
    <>
      <h2 className="text-4xl font-bold mt-10 mb-7">
        {user?.unsafeMetadata?.role === "applicant"
          ? "My Applications"
          : "My Jobs"}
      </h2>
      <div>
        {user?.unsafeMetadata?.role === "recruiter" ? (
          <CreatedJobs />
        ) : (
          <UserApplications />
        )}
      </div>
    </>
  );
}

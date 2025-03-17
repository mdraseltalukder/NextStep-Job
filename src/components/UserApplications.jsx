import { getApplications } from "@/api/applications";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import ApplicationCard from "./ApplicationCard";
import Loader from "./Loader";

export default function UserApplications() {
  const { user } = useUser();
  const {
    data: applications,
    loading: loadingApplication,
    fetchData: fetchApplication,
  } = useFetch(getApplications, {
    user_id: user.id,
  });
  //   ekhane data ke applications name e rakha hoiche
  useEffect(() => {
    fetchApplication();
  }, []);

  if (loadingApplication) return <Loader />;

  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col gap-5">
        {applications.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
            isCandidate={false}
          />
        ))}
      </div>
    </>
  );
}

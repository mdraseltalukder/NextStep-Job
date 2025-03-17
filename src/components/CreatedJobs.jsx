import { getMyJobs } from "@/api/jobs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import Loader from "./Loader";
import PostJobCard from "./PostJobCard";

export default function CreatedJobs() {
  const { user } = useUser();
  const {
    data: myJobs,
    loading: myJobLoader,
    fetchData: fetchMyJobs,
  } = useFetch(getMyJobs, { recruiter_id: user.id });

  useEffect(() => {
    console.log(myJobs);

    fetchMyJobs();
  }, []);
  if (myJobLoader) return <Loader />;

  return (
    <>
      <div>
        {myJobs.length === 0 || null ? (
          <p
            className="
      text-xl"
          >
            No Job Found
          </p>
        ) : (
          myJobs.map((job) => (
            <PostJobCard
              key={job.id}
              job={job}
              myJobsPage={true}
              changeJobToDelete={fetchMyJobs}
            />
          ))
        )}
      </div>
    </>
  );
}

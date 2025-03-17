import updateApplicationStatus from "@/api/applications";
import { EditJobs } from "@/api/jobs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

export default function ApplicationCard({ application, isCandidate }) {
  console.log("application:", application);

  const { user } = useUser();
  // handle status

  const { fetchData: updateStatus } = useFetch(updateApplicationStatus, {
    job_id: application.job_id,
  });
  const handleStatusChange = (status) => {
    updateStatus(status).then(() => {
      updateStatus();
      toast.success("status updated !");
    });
  };

  // download resume

  const handleResume = () => {
    const link = document.createElement("a");
    link.href = application.resume;
    link.target = "_blank";
    link.click();
  };

  return (
    <section className="flex justify-between  border-indigo-600 border shadow-xl p-5 my-8">
      <div className="">
        <div className="space-y-6">
          <time className="flex gap-2 mt-10 text-indigo-600">
            <span>{new Date(application.created_at).toLocaleDateString()}</span>
            <span>{new Date(application.created_at).toLocaleTimeString()}</span>
          </time>

          <div className="space-y-4">
            <div>
              <p className="text-gray-400">name:</p>
              <p className="text-lg">{application?.name}</p>
            </div>

            <div>
              <p className="text-gray-400">skills:</p>
              <p className="text-lg">{application?.skills}</p>
            </div>

            <div>
              <p className="text-gray-400">Experience:</p>
              <p className="text-lg">{application?.experience} years</p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4">
            <Button className="text-xl mb-5" onClick={handleResume}>
              Download Resume
            </Button>
          </div>
        </div>
        {/* <Button onClick={handleEdit}>Edit</Button> */}
      </div>

      <div className="flex items-end">
        {isCandidate ? (
          <div>
            <Select
              onValueChange={handleStatusChange}
              defaultValue={application?.status}
            >
              <SelectTrigger className="w-[180px] bg-blue-400">
                <SelectValue placeholder="apply Status " />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="applied">applied</SelectItem>
                <SelectItem value="reviewed">reviewed</SelectItem>
                <SelectItem value="accepted">accepted</SelectItem>
                <SelectItem value="rejected">rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ) : (
          <div>
            <span>{application?.status}</span>
          </div>
        )}
      </div>
    </section>
  );
}

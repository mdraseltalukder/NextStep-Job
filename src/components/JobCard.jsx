import { DeleteJobs } from "@/api/jobs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { Briefcase, DollarSign, MapPin } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router";
export default function JobCard({
  job,
  changeJobToDelete = () => {},
  myJobsPage = false,
}) {
  const { user } = useUser();
  const { fetchData: deleteMyJobs } = useFetch(DeleteJobs, {
    id: job.id,
  });

  const handleDelete = async () => {
    await deleteMyJobs();
    changeJobToDelete();
    toast.success("delete successfully");
  };

  return (
    <>
      <Card key={job.id} className="flex flex-col text-left">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex flex-col items-start gap-6 ">
              <CardTitle className="text-xl">{job.title}</CardTitle>
              <div className="flex gap-9">
                <Link to={`/jobdetails/${job.id}`}>
                  {/* jobdetails page e giye job.id onujayi data dekhabe */}
                  <img
                    src={job?.companies?.logo}
                    alt=" company logo"
                    className="h-[2rem] w-[5rem] object-cover"
                  />
                </Link>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {job.location}
                </div>
              </div>
            </div>
            <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
              {myJobsPage ? (
                <Button onClick={handleDelete}>Delete</Button>
              ) : (
                <Briefcase className="h-5 w-5" />
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="space-y-4">
            <p className="text-sm">{job.description.slice(0, 40)}...</p>
            <div className="flex items-center text-sm font-medium">
              <DollarSign className="mr-1 h-4 w-4" />
              {job.salary}
            </div>
            {/*status isopen */}

            <div className="text-left">
              status:{" "}
              {job?.isOpen === true ? (
                <span className=" text-green-500">Job Open</span>
              ) : (
                <span className="text-red-500"> Job Closed</span>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link to={`/jobdetails/${job.id}`}>
            {/* jobdetails page e giye job.id onujayi data dekhabe */}
            <Button className="w-full">
              {job?.recruiter_id === user?.id ? "See Details" : "Apply Now"}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}

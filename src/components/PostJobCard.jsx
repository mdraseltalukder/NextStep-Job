import { DeleteJobs, getHiringJob, getSingleJob } from "@/api/jobs";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
export default function PostJobCard({
  job,
  changeJobToDelete = () => {},
  myJobsPage = false,
}) {
  const { user } = useUser();
  const { fetchData: deleteMyJobs } = useFetch(DeleteJobs, {
    id: job.id,
  });
  const { data: singleJobs, fetchData: fetchSingleJob } =
    useFetch(getSingleJob);
  const { fetchData: fetchHiring } = useFetch(getHiringJob);
  const handleDelete = async () => {
    await deleteMyJobs();
    changeJobToDelete();
    toast.success("delete successfully");
  };
  const handleHiring = (value) => {
    const isOpen = value === "open";
    fetchHiring(isOpen).then(() => fetchSingleJob());
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
                  {/* <img
                    src={job.companies.logo}
                    alt=""
                    className="h-[2rem] w-[5rem] object-cover"
                  /> */}
                </Link>
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
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-4 w-4" />
              {job.location}
            </div>

            <p className="text-sm">{job.description}...</p>
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
            {singleJobs?.recruiter_id === user?.id && (
              <Select onValueChange={handleHiring}>
                <SelectTrigger
                  className={`w-[180px] ${
                    singleJobs?.isOpen ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  <SelectValue
                    placeholder={`${
                      singleJobs?.isOpen ? "Status open" : "Status closed"
                    }`}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="close">Close</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Link to={`/jobdetails/${job.id}`}>
            {/* jobdetails page e giye job.id onujayi data dekhabe */}
            <Button className="w-full">See Details</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}

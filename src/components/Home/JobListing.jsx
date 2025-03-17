import getJobs from "@/api/jobs";
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
import { DollarSign, MapPin } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router";
import Loader from "../Loader";
export default function JobListing() {
  const { user, isLoaded } = useUser();

  const { data: jobs, fetchData: fetchJobs } = useFetch(getJobs);

  useEffect(() => {
    if (isLoaded) fetchJobs();
  }, [isLoaded]);

  if (!jobs) return <Loader />;
  return (
    <div className=" min-h-screen py-20 px-4 sm:px-6 lg:px-8 mt-40 ">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Featured Jobs
          </h1>
          <p className="mt-2 text-gray-600 dark:text-white">
            Know your worth and find the job that qualify your life
          </p>
        </div>
        <div className=" flex flex-col items-center gap-3">
          {jobs?.map((job) => (
            <Card
              key={job.id}
              className="flex items-center justify-between text-left"
            >
              <div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col items-start gap-2 ">
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <div className="flex gap-8">
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
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    <p className="text-sm">
                      {job.description.slice(0, 150)}...
                    </p>
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
              </div>
              <CardFooter>
                <Link to={`/jobdetails/${job.id}`}>
                  {/* jobdetails page e giye job.id onujayi data dekhabe */}
                  <Button className="w-full">
                    {job?.recruiter_id === user?.id
                      ? "See Details"
                      : "Apply Now"}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/alljobs">
            {" "}
            <Button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
              Load More Listing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

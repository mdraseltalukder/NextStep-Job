import { getHiringJob, getSingleJob } from "@/api/jobs";
import { ApplicationDialog } from "@/components/ApplicaionDialog";
import ApplicationCard from "@/components/ApplicationCard";
import Loader from "@/components/Loader";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { Separator } from "@radix-ui/react-select";
import {
  Briefcase,
  Building2,
  Calendar,
  Clock,
  DollarSign,
  DoorClosed,
  DoorOpen,
  Globe,
  MapPin,
  Star,
} from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function JobDetails() {
  const { id } = useParams();
  const { user, isLoaded } = useUser();

  const { data: singleJobs, fetchData: fetchSingleJob } = useFetch(
    getSingleJob,
    { id }
  );

  useEffect(() => {
    if (isLoaded) fetchSingleJob();
  }, [isLoaded]);

  const { fetchData: fetchHiring } = useFetch(getHiringJob, { id });

  const handleHiring = (value) => {
    const isOpen = value === "open";
    fetchHiring(isOpen).then(() => fetchSingleJob());
  };

  if (!singleJobs) return <Loader />;

  return (
    <section className="min-h-screen ">
      <header className="border-b border-slate-800  backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <img
              src={singleJobs?.companies?.logo}
              alt="company logo"
              className="w-24"
            />
            <span className="font-semibold flex items-center gap-2">
              <MapPin className="text-indigo-600 " />
              {singleJobs?.companies?.location}
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="dark:text-slate-400 text-black flex gap-2 items-center">
                  <Calendar className="size-5 text-indigo-600" />
                  {new Date(singleJobs?.created_at).toLocaleDateString()}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {singleJobs?.title}
              </h1>

              <div className="flex flex-wrap gap-4 dark:text-slate-300 text-black">
                <div className="flex items-center gap-1">
                  <Building2 className="h-4 w-4 dark:text-slate-400 text-black" />
                  <span>{singleJobs?.companies?.name}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4 dark:text-slate-400 text-black" />
                  <span>{singleJobs?.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2   ">
                  <Clock className=" w-5 text-indigo-600" />
                  {singleJobs?.position}
                </div>
                <div className="flex items-center gap-2   ">
                  <DollarSign className=" w-5 text-indigo-600" />
                  {singleJobs?.salary}
                </div>
                <div className=" ">
                  {singleJobs?.isOpen ? (
                    <span className="flex gap-3 items-center text-muted-foreground">
                      <DoorOpen className="text-indigo-500" />
                      Open
                    </span>
                  ) : (
                    <span className="flex gap-3 items-center text-muted-foreground">
                      <DoorClosed className="text-red-500" />
                      Closed
                    </span>
                  )}
                </div>
              </div>
            </div>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className=" dark:bg-white dark:text-slate-400 text-black p-0">
                <TabsTrigger
                  value="description"
                  className="data-[state=active]:bg-indigo-700 data-[state=active]:text-white h-full"
                >
                  Description
                </TabsTrigger>

                <TabsTrigger
                  value="reviews"
                  className="data-[state=active]:bg-indigo-700 data-[state=active]:text-white h-full"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="pt-6 space-y-8">
                {/* Job Overview */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-black dark:text-white">
                    Job Overview
                  </h2>
                  <p className="dark:text-slate-300 text-black leading-relaxed">
                    {singleJobs?.description}
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="pt-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="  text-indigo-500 p-4 rounded-full">
                    <Star className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">4.5 out of 5</h2>
                    <p className="dark:text-slate-400 text-black">
                      Based on 1,245 reviews
                    </p>
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <Card className=" border-indigo-600">
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">
                          Great work-life balance and culture
                        </h3>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${
                                star <= 5
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "dark:text-slate-600 text-black"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="dark:text-slate-300 text-black">
                        "I've been working at Microsoft for 3 years and the
                        work-life balance is excellent. The company truly cares
                        about employee wellbeing and provides great
                        opportunities for growth."
                      </p>
                      <div className="dark:text-slate-400 text-black text-sm">
                        Software Engineer · Full-time · 3 years
                      </div>
                    </div>
                  </Card>

                  <Card className=" border-indigo-600">
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">
                          Innovative environment with smart colleagues
                        </h3>
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${
                                star <= 4
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "dark:text-slate-600 text-black"
                              }`}
                            />
                          ))}
                          <Star className="h-5 w-5 dark:text-slate-600 text-black" />
                        </div>
                      </div>
                      <p className="dark:text-slate-300 text-black">
                        "Microsoft provides an innovative environment where
                        you're constantly challenged. The teams are
                        collaborative and you get to work with some of the
                        smartest people in the industry."
                      </p>
                      <div className="dark:text-slate-400 text-black text-sm">
                        Frontend Developer · Part-time · 1.5 years
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <p className="text-xl">Status: </p>
                <p>
                  {singleJobs?.isOpen ? (
                    <span className="text-indigo-500">Job Open</span>
                  ) : (
                    <span className="text-red-500">Job Closed</span>
                  )}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-xl">Applicants: </p>
                <p>{singleJobs?.applications?.length}</p>
              </div>
            </div>

            {singleJobs?.recruiter_id === user?.id && (
              <Select onValueChange={handleHiring}>
                <SelectTrigger
                  className={`w-[180px]  ${
                    singleJobs?.isOpen ? "bg-indigo-600" : "bg-red-500"
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
          <div className="space-y-6">
            {singleJobs?.recruiter_id !== user.id && (
              <Card className=" border-indigo-600 overflow-hidden">
                <div className="p-6 space-y-6">
                  <h2 className="text-xl font-semibold">
                    Apply for this position
                  </h2>
                  <p className="dark:text-slate-300 text-black">
                    Take the next step in your career journey. Apply now to join
                    our team of talented professionals.
                  </p>

                  <button className=" w-full">
                    <ApplicationDialog
                      job={singleJobs}
                      user={user}
                      fetchJob={fetchSingleJob}
                      applied={singleJobs?.applications?.find(
                        (application) => application.candidate_id === user.id
                      )}
                    />
                  </button>
                </div>
                <Separator className="bg-slate-700" />
              </Card>
            )}
            <Card className=" border-indigo-600">
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Job Details</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2 dark:text-slate-300 text-black">
                      <Calendar className="h-4 w-4 dark:text-slate-400 " />
                      <span>Posted On</span>
                    </div>
                    <span>
                      {new Date(singleJobs?.created_at).toLocaleString()}
                    </span>
                  </div>
                  <Separator className="bg-slate-700" />
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2 dark:text-slate-300 text-black">
                      <Briefcase className="h-4 w-4 dark:text-slate-400 text-black" />
                      <span>Job Type</span>
                    </div>
                    <span>{singleJobs?.position}</span>
                  </div>
                  <Separator className="bg-slate-700" />
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2 dark:text-slate-300 text-black">
                      <DollarSign className="h-4 w-4 dark:text-slate-400 text-black" />
                      <span>Salary</span>
                    </div>
                    <span>{singleJobs?.salary}</span>
                  </div>
                  <Separator className="bg-slate-700" />
                </div>
              </div>
            </Card>
          </div>

          {singleJobs?.applications?.length > 0 &&
            singleJobs?.recruiter_id === user?.id && (
              <div>
                <h2 className="text-left font-bold text-2xl">
                  Applications: ({singleJobs?.applications?.length})
                </h2>
                {singleJobs?.applications?.map((application) => (
                  <ApplicationCard
                    key={application.id}
                    application={application}
                    isCandidate={true}
                  />
                ))}
              </div>
            )}

          {singleJobs?.applications?.length > 0 &&
            singleJobs?.recruiter_id !== user?.id && (
              <div className="my-5">
                {singleJobs?.applications?.map((application) => {
                  if (application?.candidate_id === user?.id)
                    return (
                      <div key={application.id}>
                        <h2 className="text-left font-bold text-2xl">
                          Your Application
                        </h2>
                        <ApplicationCard
                          key={application.id}
                          application={application}
                          isCandidate={false}
                        />
                      </div>
                    );
                })}
                {singleJobs?.applications.candidate_id === user?.id && (
                  <div>
                    {singleJobs.map((job) => (
                      <ApplicationCard key={job.id} job={job} />
                    ))}
                  </div>
                )}
              </div>
            )}
        </div>
      </main>
    </section>
  );
}

import getJobs, { addNewJob } from "@/api/jobs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import getCompanies from "@/api/companies";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function Postjob() {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  const {
    data: dataCreateJob,
    loading: loadingCreateJob,
    error: errorcreateJob,
    fetchData: fetchCreateJob,
  } = useFetch(addNewJob);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const { data: jobs, fetchData: fetchJobs } = useFetch(getJobs);

  useEffect(() => {
    dataCreateJob.length > 0 && navigate("/alljobs");
  }, [loadingCreateJob]);
  const { data: comapnies, fetchData: fetchCompanies } = useFetch(getCompanies);
  useEffect(() => {
    if (isLoaded) {
      fetchCompanies();
      fetchJobs();
    }
  }, [isLoaded]);

  const onSubmit = (data) => {
    console.log(data);
    fetchCreateJob({
      ...data,
      recruiter_id: user.id,
      isOpen: true,
    });
    toast.success("successfully created job");
    reset();
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start w-2/3 my-10 mx-auto gap-4"
      >
        <Label htmlFor="title" className="text-right">
          Job Title
        </Label>
        <Input
          type="text"
          id="title"
          placeholder="e.g web developer"
          className="col-span-3"
          {...register("title", { required: true })}
        />
        {errors?.title?.type === "required" && (
          <p className="text-red-500">this field is required</p>
        )}
        <Label htmlFor="description" className="text-right">
          Job Description
        </Label>

        <Textarea
          type="text"
          id="description"
          placeholder="description..."
          className="col-span-3 "
          {...register("description", { required: true })}
        />
        {errors?.description?.type === "required" && (
          <p className="text-red-500">this field is required</p>
        )}
        <Label htmlFor="salary" className="text-right">
          Salary
        </Label>
        <Input
          type="text"
          id="salary"
          placeholder="e.g  20k - 30k"
          className="col-span-3"
          {...register("salary", { required: true })}
        />
        {errors?.salary?.type === "required" && (
          <p className="text-red-500">this field is required</p>
        )}
        <Label htmlFor="location" className="text-right">
          location
        </Label>
        <Input
          type="text"
          id="location"
          placeholder="remote..."
          className="col-span-3"
          {...register("location", { required: true })}
        />
        {errors?.location?.type === "required" && (
          <p className="text-red-500">this field is required</p>
        )}
        {/* skills */}
        <Label htmlFor="skills" className="text-right">
          Skills
        </Label>
        <Input
          type="text"
          id="skills"
          placeholder="React.js Node.js..."
          className="col-span-3"
          {...register("skills", { required: true })}
        />
        {errors?.skills?.type === "required" && (
          <p className="text-red-500">this field is required</p>
        )}

        {/* position */}
        <Label htmlFor="position" className="text-right">
          Position
        </Label>
        <Controller
          control={control}
          name="position"
          render={({ field: { onChange, value } }) => (
            <Select value={value} onValueChange={onChange} className="">
              <SelectTrigger className="text-left   ">
                <SelectValue placeholder="" className="text-left float-left" />
                {value
                  ? jobs.find((job) => job.id === Number(value))?.position
                  : "Choose Position"}
              </SelectTrigger>

              <SelectContent>
                <SelectGroup className="group bg-[#1f2937] z-10 hover:bg-[#0a111a]">
                  {jobs?.map(
                    (job) => (
                      console.log(job),
                      (<SelectItem value={job.id}>{job?.position}</SelectItem>)
                    )
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />

        {errors?.position?.type === "required" && (
          <p className="text-red-500">this field is required</p>
        )}
        {/* company */}

        <Label htmlFor="company_id" className="text-right">
          Choose Company
        </Label>
        <Controller
          control={control}
          name="company_id"
          render={({ field: { onChange, value } }) => (
            <Select value={value} onValueChange={onChange} className="">
              <SelectTrigger className="text-left   ">
                <SelectValue placeholder="" className="text-left float-left" />
                {value
                  ? comapnies.find((company) => company.id === Number(value))
                      ?.name
                  : "Choose company"}
              </SelectTrigger>

              <SelectContent>
                <SelectGroup className="group bg-[#1f2937] z-10 hover:bg-[#0a111a]">
                  {comapnies?.map(
                    (company) => (
                      console.log(company),
                      (
                        <SelectItem value={company.id}>
                          {company.name}
                        </SelectItem>
                      )
                    )
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />

        {errorcreateJob && <p className="text-red-500">{errorcreateJob}</p>}

        <Button className="w-full mt-4">Post a Job</Button>
      </form>
    </>
  );
}

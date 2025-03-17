// @ts-nocheck
("use client");
import getCompanies from "@/api/companies";
import getJobs from "@/api/jobs";
import JobCard from "@/components/JobCard";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { SelectGroup } from "@radix-ui/react-select";
import { useEffect, useState } from "react";

export default function AllJobs() {
  const { isLoaded } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [company, setCompany] = useState("");
  const {
    data: jobs,
    loading: jobLoader,
    fetchData: fetchJobs,
  } = useFetch(getJobs, {
    company,
    searchQuery,
  });
  const { data: companies, fetchData: fetchCompanies } = useFetch(getCompanies);

  useEffect(() => {
    if (isLoaded) fetchJobs();
  }, [isLoaded, searchQuery, company]);
  useEffect(() => {
    if (isLoaded) fetchCompanies();
  }, [isLoaded]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    const query = formData.get("search-job");
    console.log(query);
    if (query) setSearchQuery(query);
  };
  // clear all filter and serach query

  const handleClear = () => {
    setSearchQuery("");
    setCompany("");
  };
  if (jobLoader) {
    <Loader />;
  }

  return (
    <>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center"> Job Listing</h1>

        {/* Search and filter section */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[1fr_auto_auto]">
            <form onSubmit={handleSearch}>
              <Input
                placeholder="Search jobs by title"
                name="search-job"
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </form>

            <Select
              value={company}
              onValueChange={(value) => setCompany(value)}
            >
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by Company..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {companies.map(({ name, id }) => {
                    return (
                      <SelectItem key={id} value={id}>
                        {name}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button variant="outline" onClick={handleClear}>
              Clear Filters
            </Button>
          </div>
        </div>

        <div className=" my-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {jobs?.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
}

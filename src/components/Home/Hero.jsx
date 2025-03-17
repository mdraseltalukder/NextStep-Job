import getCompanies from "@/api/companies";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Button } from "../ui/button";

export default function Hero() {
  const { isLoaded } = useUser();
  const [company, setCompany] = useState("");
  const { data: companies, fetchData: fetchCompanies } = useFetch(getCompanies);
  useEffect(() => {
    if (isLoaded) fetchCompanies();
  }, [isLoaded]);

  return (
    <div
      className="w-full min-h-[450px] flex items-center relative overflow-hidden h-[90vh]  after:absolute after:w-full after:h-full dark:after:bg-indigo-950/70 "
      style={{
        backgroundImage: "url('images/banner-2.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
            <div className="absolute inset-0 bg-indigo-950 rounded-full"></div>
            <img
              src="images/10003.png"
              alt="Job seeker with laptop"
              width={350}
              height={350}
              className="relative z-10"
            />
          </div>
        </div>

        {/* Right side with content */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white ">
              Our Excellent Find Job
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              Best Career
            </h2>
            <p className="text-gray-500 dark:text-white mt-2">
              There are many variations passages of Lorem Ipsum Fasts by
              injected humour, or randomised words which...
            </p>
          </div>

          {/* Search form */}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
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
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 12 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 5L11 1"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <Link to="/alljobs">
              <Button
                variant={"primary"}
                className=" px-8   rounded-md flex items-center justify-center gap-2 hover:scale-.95 transition-colors"
              >
                <Search className="w-4 h-4 text-white dark:text-black" />
                <span className="text-white dark:text-black">Search</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

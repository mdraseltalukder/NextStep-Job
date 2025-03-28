// import getCompanies from "@/api/companies";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import useFetch from "@/hooks/useFetch";
// import { Search } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router";
// import { Button } from "../ui/button";
import { Briefcase, MapPin, Search, TrendingUp } from "lucide-react";
import { Link } from "react-router";
export default function Hero() {
  // const { isLoaded } = useUser();
  // const [company, setCompany] = useState("");
  // const { data: companies, fetchData: fetchCompanies } = useFetch(getCompanies);
  // useEffect(() => {
  //   if (isLoaded) fetchCompanies();
  // }, [isLoaded]);

  return (
    <div className="w-full min-h-[450px] flex flex-col items-center relative overflow-hidden h-[90vh]  after:absolute after:w-full after:h-full dark:after:bg-indigo-950/70 ">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[length:20px_20px]"></div>
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white tracking-tight">
              Find Your Dream Job Today
              <span className="block  text-indigo-600 mt-3">
                Build Your Future
              </span>
            </h1>
            <p className="text-gray-500 dark:text-white mt-6 max-w-3xl mx-auto">
              Connect with top employers and discover opportunities that match
              your skills and aspirations. Your next career move starts here.
            </p>

            {/* Search Box */}
            <div className="mt-10 max-w-2xl mx-auto">
              <div className="bg-white dark:bg-black p-4 rounded-lg shadow-lg flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    className="w-full dark:bg-black pl-10 pr-4 py-3 rounded-md border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full dark:bg-black pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <Link to={"/alljobs"}>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 flex-shrink-0">
                    Search Jobs
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-5xl mx-auto relative z-10">
        <div className="bg-white dark:bg-black rounded-lg p-6 shadow-md">
          <Briefcase className="h-8 w-8 text-blue-600 mx-auto" />
          <div className="mt-4 text-2xl font-bold text-gray-900 dark:text-foreground">
            10,000+
          </div>
          <div className="text-gray-600 dark:text-foreground">
            Active Job Listings
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md dark:bg-black">
          <TrendingUp className="h-8 w-8 text-blue-600 mx-auto" />
          <div className="mt-4 text-2xl font-bold text-gray-900 dark:text-foreground">
            8,500+
          </div>
          <div className="text-gray-600 dark:text-foreground">
            Companies Hiring
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md dark:bg-black">
          <div className="h-8 w-8 text-blue-600 mx-auto">🎯</div>
          <div className="mt-4 text-2xl font-bold text-gray-900 dark:text-foreground">
            95%
          </div>
          <div className="text-gray-600 dark:text-foreground">Success Rate</div>
        </div>
      </div>
    </div>
  );
}

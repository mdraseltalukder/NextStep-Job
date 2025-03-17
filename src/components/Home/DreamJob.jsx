import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function DreamJob() {
  return (
    <div className="flex flex-col items-center mx-auto gap-5 py-20 lg:py-30">
      <h2 className="text-2xl lg:text-3xl">Your Dream jobs are Waiting</h2>
      <p className="lg:text-xl">
        Over ! million interections, 50,000 success stories Make Yours now
      </p>
      <div className="flex gap-4 mt-5">
        <Link
          className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:bg-gray-800
          dark:hover:bg-gray-200"
          to="/alljobs"
        >
          Search Job
        </Link>
        <Link className="" to="/alljobs">
          <Button variant={"primary"} className="">
            Apply Job Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

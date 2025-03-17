import { Button } from "@/components/ui/button";
import { Bell, Bookmark, FileText } from "lucide-react";
import { Link } from "react-router";

export default function Portal() {
  return (
    <div className="container mx-auto px-4  py-12  md:py-24">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="space-y-8 flex-1">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Suits Jobs For You.
            </h1>
            <div className="flex">
              <div className="w-1 bg-[#119c4e] mr-3"></div>
              <p className="text-gray-600 dark:text-white">
                There are many variations of passages of Lorem Ipsum Fasts
                Fastsby humour, by injected humour, or coved ceilings.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-indibg-[#119c4e]">
                <Bookmark size={24} />
              </div>
              <span className="text-gray-700 dark:text-white">
                Bookmark Jobs
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-indibg-[#119c4e]">
                <FileText size={24} />
              </div>
              <span className="text-gray-700 dark:text-white">
                Apply with your Resume
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-indibg-[#119c4e]">
                <Bell size={24} />
              </div>
              <span className="text-gray-700 dark:text-white">
                Get notified
              </span>
            </div>
          </div>

          <Link to="/alljobs">
            {" "}
            <Button
              variant="primary"
              className=" mt-9  px-5 py-3 h-auto rounded-md font-medium "
            >
              Browse Jobs
            </Button>
          </Link>
        </div>

        <div className="relative -z-20 flex-1">
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src="images/07.webp"
              alt="Office workers "
              className="object-cover"
            />
          </div>

          <div className=" absolute  flex items-center bg-white  rounded-full border-2 border-indigo-500  right-[-20px] lg:right-[100px] bottom-[-100px]">
            <div className=" text-5xl md:text-6xl font-bold text-gray-700">
              25<span className="text-3xl align-top">+</span>
            </div>
            <div className="ml-2">
              <div className="text-gray-500 ">Years Of</div>
              <div className="text-gray-600  text-xl font-medium">
                Experience
              </div>
            </div>
            <div className=" w-full h-full "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, FileEdit, User } from "lucide-react";
import { Link } from "react-router";

export default function Promotion() {
  return (
    <div className=" py-16 px-4 sm:py-28 lg:py-32">
      <div className="container mx-auto">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Promoting Career
            </h1>
            <p className="text-gray-600 dark:text-white mb-2">
              There are many variations of passages of Lorem Ipsum Facts
            </p>
            <p className="text-gray-600 dark:text-white mb-2">
              There are many variations of passages of Lorem Ipsum
            </p>
            <p className="text-gray-600 dark:text-white mb-8">
              Fastsby injected humour fasts there
            </p>
            <div>
              <Link to="/alljobs">
                <Button
                  variant={"primary"}
                  className=" px-5 py-3 h-auto text-white"
                >
                  Browse Job
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column */}

          <div className="flex flex-col gap-16 justify-center items-center">
            {/* Step Indicator */}

            <Tabs
              defaultValue="one"
              className="flex items-center justify-end flex-col gap-16 "
            >
              <div className="flex items-center">
                <div className="h-[1px] bg-indigo-600 w-24 md:w-40"></div>
                <TabsList className="flex space-x-2 md:space-x-4 bg-black dark:bg-white p-0">
                  <TabsTrigger className="h-full text-white  " value="one">
                    {" "}
                    Step One
                  </TabsTrigger>
                  <TabsTrigger className="h-full text-white  " value="two">
                    Step Two
                  </TabsTrigger>
                  <TabsTrigger className="h-full text-white " value="three">
                    Step Three
                  </TabsTrigger>
                </TabsList>
                <div className="h-[1px] bg-indigo-600 w-24 md:w-40"></div>
              </div>

              <div>
                <TabsContent value="one">
                  <Card className=" dark:text-white p-8 -xl-lg shadow-sm w-full max-w-md relative">
                    {/* Circle with number */}
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 -xl-full bg-white border border-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 ">1</span>
                    </div>

                    <div className="flex flex-col items-center text-center pt-4">
                      {/* Icon */}
                      <div className="w-16 h-16 mb-6 text-indigo-600">
                        <div className="border-2 border-indigo-600 p-3 -xl-md">
                          <FileEdit className="w-full h-full" />
                        </div>
                      </div>

                      {/* Content */}
                      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                        Set Up Your Profile All
                      </h2>
                      <p className="text-gray-600 dark:text-white">
                        After signing up to TechCareer, you start to set up your
                        profile and find the hottest & latest tech jobs.
                      </p>
                    </div>
                  </Card>
                </TabsContent>
                <TabsContent value="two">
                  <Card className=" dark:text-white p-8 -xl-lg shadow-sm w-full max-w-md relative">
                    {/* Circle with number */}
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 -xl-full bg-white border border-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 ">2</span>
                    </div>

                    <div className="flex flex-col items-center text-center pt-4">
                      {/* Icon */}
                      <div className="w-16 h-16 mb-6 text-indigo-600">
                        <div className="flex flex-col gap-1 items-center border py-3 border-indigo-600">
                          <span className="text-indigo-600 font-bold text-sm">
                            JOB
                          </span>
                          <div className="w-10 h-0.5 bg-indigo-600 mt-1 mb-0.5"></div>
                          <div className="w-10 h-0.5 bg-indigo-600 mb-0.5"></div>
                          <div className="w-10 h-0.5 bg-indigo-600"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                        Set Up Your Profile All
                      </h2>
                      <p className="text-gray-600 dark:text-white">
                        After signing up to TechCareer, you start to set up your
                        profile and find the hottest & latest tech jobs.
                      </p>
                    </div>
                  </Card>
                </TabsContent>
                <TabsContent value="three">
                  <Card className="dark:bg-black  p-8 -xl-lg shadow-sm w-full max-w-md relative">
                    {/* Circle with number */}
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 -xl-full bg-white border border-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 ">3</span>
                    </div>

                    <div className="flex flex-col items-center text-center pt-4">
                      {/* Icon */}
                      <div className="w-16 h-20 border-2 border-indigo-600 rounded-md flex items-center justify-center ">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <CheckCircle className="absolute top-2 left-2 w-5 h-5 text-indigo-600" />
                          <div className="absolute top-3 right-2 w-6 h-6 rounded-full border-2 border-indigo-600 flex items-center justify-center">
                            <User className="w-4 h-4 text-indigo-600" />
                          </div>
                          <div className="absolute bottom-2 left-2 flex flex-col gap-1">
                            <div className="w-8 h-0.5 bg-indigo-600"></div>
                            <div className="w-8 h-0.5 bg-indigo-600"></div>
                            <div className="w-6 h-0.5 bg-indigo-600"></div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                        Set Up Your Profile All
                      </h2>
                      <p className="text-gray-600 dark:text-white">
                        After signing up to TechCareer, you start to set up your
                        profile and find the hottest & latest tech jobs.
                      </p>
                    </div>
                  </Card>{" "}
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

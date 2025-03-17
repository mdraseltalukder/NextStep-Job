import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, Building2, Globe2, Users } from "lucide-react";
import about from "../assets/about.webp";

export default function AboutSection() {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Active Users",
      description: "Join our growing community of job seekers and employers",
    },
    {
      icon: Briefcase,
      value: "200K+",
      label: "Job Posts",
      description: "New opportunities added daily across all sectors",
    },
    {
      icon: Building2,
      value: "10K+",
      label: "Companies",
      description: "Leading companies trust our platform for hiring",
    },
    {
      icon: Globe2,
      value: "50+",
      label: "Countries",
      description: "Connect with opportunities worldwide",
    },
  ];

  return (
    <section className="py-24 dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Connecting Talent with Opportunity
          </h2>
          <p className="text-lg dark:text-white text-muted-foreground">
            We're on a mission to make job searching and hiring simpler, more
            efficient, and more accessible for everyone. Our platform brings
            together job seekers and employers in a seamless, user-friendly
            environment.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardHeader className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold">
                  {stat.value}
                </CardTitle>
                <CardDescription className="text-lg font-medium text-gray-900 dark:text-white">
                  {stat.label}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground dark:text-white">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">
                Why Choose Our Platform?
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-200 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>Smart job matching using AI technology</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-200 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>Real-time notifications for new opportunities</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-200 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>Advanced resume builder and portfolio tools</span>
                </li>
              </ul>
            </div>
            <Button size="lg" className="w-full sm:w-auto">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img
                src={about}
                alt="Platform interface showcase"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

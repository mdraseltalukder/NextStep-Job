import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I found my first job through Fresher.Jobs. The process was smooth and the support was great!",
    author: "Sarah K.",
    role: "Software Developer",
  },
  {
    quote:
      "As a recent graduate, Fresher.Jobs helped me land interviews with top companies in my field.",
    author: "Alex M.",
    role: "Marketing Associate",
  },
  {
    quote:
      "The resources and job listings on FresherJobs are tailored for newcomers. Highly recommended!",
    author: "Emily R.",
    role: "Data Analyst",
  },
];

export default function Revews() {
  return (
    <section className="w-full px-4 py-12 ">
      <div
        className="max-w-6xl mx-auto space-y-12 bg-[#1a0d26]
      "
      >
        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3 ">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6 bg-[#1a0d26]">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4  text-white">{testimonial.quote}</p>
                <div className="text-white">
                  <span>{testimonial.author}</span>
                  <span className="mx-1">·</span>
                  <span>{testimonial.role}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

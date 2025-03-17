import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-950 text-white">
      <div className=" mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-left ">
            <h2 className=" text-lg font-semibold mb-4">JobConnect</h2>
            <p className="mb-4">
              Connecting talent with opportunity. Find your dream job or the
              perfect candidate with JobConnect.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-900">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-900 ">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-900">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-900">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-900">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className=" text-lg font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:">
                  Career Advice
                </a>
              </li>
              <li>
                <a href="#" className="hover:">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:">
                  Salary Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:">
                  Job Alerts
                </a>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className=" text-lg font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:">
                  Browse Candidates
                </a>
              </li>
              <li>
                <a href="#" className="hover:">
                  Recruiting Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:">
                  Employer Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className=" text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest job opportunities and
              career tips.
            </p>
            <form
              action="https://formspree.io/f/mwplpqqv"
              method="POST"
              className="space-y-2"
              target="_blank"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="-gray-700  placeholder-gray-400"
              />
              <Button type="submit" className="w-full bg-blue-700 ">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-indigo-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} JobConnect. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:">
              Privacy Policy
            </a>
            <a href="#" className="hover:">
              Terms of Service
            </a>
            <a href="#" className="hover:">
              Cookie Policy
            </a>
            <a href="#" className="hover:">
              Accessibility
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

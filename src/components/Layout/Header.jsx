import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Briefcase, ChevronDown, LayoutDashboard } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ThemeToggle from "../mode-toggle";
export default function Header() {
  const { user } = useUser();
  const navbarRef = useRef(null);

  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const [showSignin, setShowSignin] = useState(false);
  // const { user } = useUser();
  const [search, setSearch] = useSearchParams();

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignin(false);
      setSearch();
    }
  };

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignin(true);
    }
  }, [search]);

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsToggleOpen(false);
      }
    }

    // Add event listener when menu is open
    if (isToggleOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isToggleOpen]);

  // Handle nav link click
  const handleNavLinkClick = () => {
    setIsToggleOpen(false);
  };

  return (
    <>
      {/*<!-- Header --> */}
      <div className="">
        <header className=" relative z-20 w-full border-b border-slate-200  shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden bg-fixed">
          <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
            <nav
              aria-label="main navigation"
              className="flex h-[5.5rem] items-center justify-between font-medium "
              role="navigation"
            >
              {/*      <!-- Brand logo --> */}
              <Link
                id="logo"
                aria-label=" logo"
                aria-current="page"
                className=" text-xl  lg:text-2xl text-indigo-600 focus:outline-none lg:flex-1 log-cinzel-decorative font-thin"
                to="./"
              >
                NextStep
              </Link>
              {/*      <!-- Mobile trigger --> */}
              <button
                className={`relative  order-10 block h-10 w-10 self-center lg:hidden 
${
  isToggleOpen
    ? "visible  opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
    : ""
}
`}
                onClick={() => setIsToggleOpen(!isToggleOpen)}
                aria-expanded={isToggleOpen ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full   transition-all duration-300 dark:bg-white bg-black"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-6 transform rounded-full    transition duration-300 dark:bg-white bg-black"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full   transition-all duration-300 dark:bg-white bg-black"
                  ></span>
                </div>
              </button>
              {/*      <!-- Navigation links --> */}
              <ul
                role="menubar"
                aria-label="Select page"
                className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain  px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 bg-white/80 dark:bg-black/80 ${
                  isToggleOpen
                    ? "visible opacity-100 backdrop-blur-sm"
                    : "invisible opacity-0"
                }`}
              >
                <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 font-medium text-xl hover:text-indigo-600 focus:text-indigo-600 focus:outline-none focus-visible:outline-none lg:px-8"
                    to="/"
                    onClick={handleNavLinkClick}
                  >
                    <span className="flex gap-1 items-end">
                      Home <ChevronDown className=" w-4" />
                    </span>
                  </Link>
                </li>
                <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4  transition-colors duration-300 font-medium text-xl hover:text-indigo-600 focus:text-indigo-600 focus:outline-none focus-visible:outline-none lg:px-8"
                    to="alljobs"
                    onClick={handleNavLinkClick}
                  >
                    <span className="flex gap-1 items-end">
                      Jobs <ChevronDown className=" w-4" />
                    </span>
                  </Link>
                </li>
                <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 font-medium text-xl hover:text-indigo-600 focus:text-indigo-600 focus:outline-none focus-visible:outline-none lg:px-8"
                    to="/about"
                    onClick={handleNavLinkClick}
                  >
                    <span className="flex gap-1 items-end">
                      About <ChevronDown className=" w-4" />
                    </span>
                  </Link>
                </li>
                <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 font-medium text-xl hover:text-indigo-600 focus:text-indigo-600 focus:outline-none focus-visible:outline-none lg:px-8"
                    to="/contact"
                    onClick={handleNavLinkClick}
                  >
                    <span className="flex gap-1 items-end">
                      Contact <ChevronDown className=" w-4" />
                    </span>
                  </Link>
                </li>
              </ul>

              {/*      <!-- Actions --> */}
              <div className="ml-auto flex items-center gap-5 justify-end float-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
                {user?.unsafeMetadata?.role === "recruiter" && (
                  <div>
                    <Link to="/postjob">
                      <Button variant="primary">post a job</Button>
                    </Link>
                  </div>
                )}
                <header>
                  <SignedOut>
                    <Button onClick={() => setShowSignin(true)}>
                      Login/Register
                    </Button>
                    {/* <SignInButton /> */}
                  </SignedOut>
                  <SignedIn>
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "size-10",
                        },
                      }}
                    >
                      <UserButton.MenuItems>
                        <UserButton.Link
                          label="Onboard"
                          labelIcon={<LayoutDashboard size={20} />}
                          href="/onboard"
                        />
                      </UserButton.MenuItems>
                      <UserButton.MenuItems>
                        {user?.unsafeMetadata?.role === "recruiter" ? (
                          <UserButton.Link
                            label="My Jobs"
                            labelIcon={<Briefcase size={20} />}
                            href="/myjobs"
                          />
                        ) : (
                          <UserButton.Link
                            label="all Jobs"
                            labelIcon={<Briefcase size={20} />}
                            href="/alljobs"
                          />
                        )}
                      </UserButton.MenuItems>
                    </UserButton>
                  </SignedIn>
                  {showSignin && (
                    <div
                      className="fixed inset-0 flex items-center justify-center  h-screen w-screen z-50"
                      onClick={handleOverlayClick}
                    >
                      <SignIn
                        signUpForceRedirectUrl="/onboard"
                        fallbackRedirectUrl="/onboard"
                      />
                    </div>
                  )}
                </header>
              </div>
              <div>
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </header>
      </div>
      {/*<!-- End Navbar with Topbar--> */}
    </>
  );
}

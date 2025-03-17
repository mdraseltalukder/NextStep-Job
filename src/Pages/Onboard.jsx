import { Button } from "@/Components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function Onboard() {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  console.log(user);

  const handleUser = async (role) => {
    await user.update({ unsafeMetadata: { role } }).then(() => {
      console.log(role);
      navigateUser(role);
    });
  };
  const navigateUser = (currentrole) => {
    // navigate(currentrole === "recruiter" ? "/postjob" : "/alljobs");

    if (currentrole === "recruiter") {
      navigate("/postjob");
      toast.success("Welcome to post a job ");
    } else {
      navigate("/alljobs");
      toast.success("You are not a recruiter");
    }
  };

  if (!isLoaded) {
    return <h2>loading...</h2>;
  }

  // if role pawa jai tahole ar onboard page e jawa jabe na
  useEffect(() => {
    if (isLoaded && user?.unsafeMetadata?.role) {
      navigateUser(user?.unsafeMetadata?.role);
    }
  }, [user, isLoaded]);

  return (
    <div className="flex flex-col gap-12 items-center justify-center h-[60vh]">
      <h2 className="text-2xl md:text-3xl font-bold ">Choose Your Role...📝</h2>
      <div className="flex gap-6 items-center ">
        <Button
          className="text-xl"
          variant="destructive"
          onClick={() => handleUser("applicant")}
        >
          Applicant- i&apos;m looking for job
        </Button>
        <Button
          className="text-xl"
          variant="primary"
          onClick={() => handleUser("recruiter")}
        >
          recruiter- i want to post a job
        </Button>
      </div>
    </div>
  );
}

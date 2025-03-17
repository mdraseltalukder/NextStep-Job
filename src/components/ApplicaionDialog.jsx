import { applyToJob } from "@/api/applications";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useFetch from "@/hooks/useFetch";
import { FileIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function ApplicationDialog({ job, applied, user, fetchJob }) {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { fetchData: applyJob } = useFetch(applyToJob);
  const onSubmit = (data) => {
    console.log(data);

    applyJob({
      ...data,
      job_id: job.id,
      name: user.fullName,
      candidate_id: user.id,
      status: "applied",
      resume: data.resume[0],
    }).then(() => {
      fetchJob();
      reset();
      toast.success("Job Applied Successfully !");
      setOpen(false);
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {applied ? (
        <Button className="w-full " variant="danger">
          {" "}
          Applied
        </Button>
      ) : (
        <DialogTrigger asChild>
          <Button
            className="w-full"
            variant="primary"
            onClick={() => setOpen(true)}
          >
            Apply now
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="sm:max-w-[60vw] py-6 lg:py-16 lg:max-w-[40vw]">
        <DialogHeader className="flex flex-col gap-8 items-center">
          <DialogTitle className="text-3xl">{job?.title}</DialogTitle>
          <DialogDescription>{job?.companies?.name}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 py-4">
            {/* Experience Field */}
            <div className="grid grid-cols-4 items-center gap-2">
              <Label htmlFor="experience" className="text-right">
                Years of Experience:
              </Label>
              <Input
                id="experience"
                placeholder="2 years"
                className="col-span-3 border-gray-300 focus:ring-indigo-500"
                {...register("experience", {
                  required: "Experience is required",
                })}
              />
              {errors.experience && (
                <p className="text-red-500 text-sm col-span-4">
                  {errors.experience.message}
                </p>
              )}
            </div>

            {/* Skills Field */}
            <div className="grid grid-cols-4 items-center gap-2">
              <Label htmlFor="skills" className="text-right">
                Skills:
              </Label>
              <Input
                id="skills"
                placeholder="React.js, Next.js"
                className="col-span-3 border-gray-300 focus:ring-indigo-500"
                {...register("skills", { required: "Skills are required" })}
              />
              {errors.skills && (
                <p className="text-red-500 text-sm col-span-4">
                  {errors.skills.message}
                </p>
              )}
            </div>

            {/* Education Field */}
            <div className="grid grid-cols-4 items-center gap-2">
              <Label className="text-right">Education:</Label>
              <div className="col-span-3 flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    {...register("education", {
                      required: "Education level is required",
                    })}
                    type="radio"
                    value="graduate"
                  />
                  Graduate
                </label>
                <label className="flex items-center gap-2">
                  <input
                    {...register("education", {
                      required: "Education level is required",
                    })}
                    type="radio"
                    value="undergraduate"
                  />
                  Undergraduate
                </label>
                <label className="flex items-center gap-2">
                  <input
                    {...register("education", {
                      required: "Education level is required",
                    })}
                    type="radio"
                    value="others"
                  />
                  Others
                </label>
              </div>
              {errors.education && (
                <p className="text-red-500 text-sm col-span-4">
                  {errors.education.message}
                </p>
              )}
            </div>

            {/* File Upload Section */}
            <div>
              <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-2 p-6 items-center w-96 mx-auto">
                <FileIcon className="w-12 h-12" />
                <span className="text-sm font-medium text-gray-500">
                  Drag and drop a file or click to browse
                </span>
                <span className="text-xs text-gray-500">
                  PDF, DOC, DOCX only
                </span>
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf, .doc, .docx"
                  className="mt-2"
                  {...register("resume", {
                    required: "Resume is required",
                    validate: {
                      fileType: (value) =>
                        value[0]?.type === "application/pdf" ||
                        value[0]?.type === "application/msword" ||
                        value[0]?.type ===
                          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          ? true
                          : "Only PDF, DOC, and DOCX files are allowed",
                    },
                  })}
                />
                {errors.resume && (
                  <p className="text-red-500 text-sm col-span-4">
                    {errors.resume.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <DialogFooter>
            <Button className="w-full mt-5" type="submit">
              Apply
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

import { IoIosArrowForward } from "react-icons/io";

export default function ContactBanner() {
  return (
    <>
      <div
        className=" relative min-h-[40vh] w-full flex flex-col items-center justify-center  after:w-full after:h-full
         after:bg-gray-950/40 after:absolute after:top-0 after:left-0 after:z-0 "
        style={{
          backgroundImage: "url('images/contact-banner.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100%",
        }}
      >
        <div className="absolute inset-0 bg-black/40 "></div>

        <h1 className="text-4xl md:text-5xl lg-text-7xl font-bold text-white z-10">
          Contact Us
        </h1>
        <div className="flex items-center gap-2 text-white z-10">
          <a href="/">Home</a>
          <span className="z-10">
            <IoIosArrowForward />
          </span>
          <span className="text-indigo-300 z-10">Contact</span>
        </div>
      </div>
    </>
  );
}

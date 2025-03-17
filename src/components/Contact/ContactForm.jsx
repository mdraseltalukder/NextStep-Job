import { useState } from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 10.99835602,
    lng: 77.01502627,
  };

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        <div className="text-indigo-500 font-medium mb-2">CONTACT WITH US</div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold  mb-8">
              We Are Best About This Job Solution.
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-200 dark:bg-black rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-200 dark:bg-black rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-200 dark:bg-black rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />

              <textarea
                name="message"
                placeholder="Write here your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full p-3 border border-gray-200 dark:bg-black rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />

              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-3 px-6 rounded hover:bg-indigo-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <p className="">
              There are many variations of passages of Lorem Ipsum Fasts. There
              are many variations of passages of Lorem Ipsum Fastsby injected
              humour, by injected humour, or randomised coved ceilings.
            </p>

            {/* Google Maps Component */}
            <div className="relative h-[300px] md:h-[400px] w-full border rounded overflow-hidden">
              <div id="map" className="w-full h-full">
                {/* google map */}
                <div className="relative h-[300px] md:h-[400px] w-full border rounded overflow-hidden">
                  <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={11}
                    >
                      <Marker position={center} />
                    </GoogleMap>
                  </LoadScript>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

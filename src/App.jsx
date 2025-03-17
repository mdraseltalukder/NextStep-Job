import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import "./App.css";
import AuthenticatedRoute from "./Components/AuthenticatedRoute";
import Root from "./Components/Layout/Root";
import About from "./Pages/About";
import AllJobs from "./Pages/AllJobs";
import Applicants from "./Pages/Applicants";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import JobDetails from "./Pages/JobDetails";
import MyJobs from "./Pages/MyJobs";
import Onboard from "./Pages/Onboard";
import Postjob from "./Pages/Postjob";
import { ThemeProvider } from "./Components/theme-provider";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/alljobs",
        element: (
          <AuthenticatedRoute>
            <AllJobs />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/jobdetails/:id",
        element: (
          <AuthenticatedRoute>
            <JobDetails />
          </AuthenticatedRoute>
        ),
      },

      {
        path: "/aplicants",
        element: (
          <AuthenticatedRoute>
            <Applicants />
          </AuthenticatedRoute>
        ),
      },

      {
        path: "/myjobs",
        element: (
          <AuthenticatedRoute>
            <MyJobs />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/onboard",
        element: (
          <AuthenticatedRoute>
            <Onboard />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/postjob",
        element: (
          <AuthenticatedRoute>
            <Postjob />
          </AuthenticatedRoute>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: "#ffffff",
              color: "#363636",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              iconTheme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;

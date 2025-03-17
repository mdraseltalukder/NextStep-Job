import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

export default function AuthenticatedRoute({ children }) {
  const { isLoaded, isSignedIn, user } = useUser();
  const { pathname } = useLocation();

  // Wait until user data is fully loaded
  if (!isLoaded) {
    return "Loading..."; // You can add a loading spinner here if needed
  }
  // Redirect to the sign-in page if the user is not signed in
  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }

  // if role set kora na hoi tobe onboard page e cole asbe

  if (
    user === undefined ||
    (user && !user.unsafeMetadata?.role && pathname !== "/onboard")
  ) {
    return <Navigate to="/onboard" />;
  }

  return children;
}

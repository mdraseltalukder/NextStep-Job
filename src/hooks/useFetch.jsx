import { useSession } from "@clerk/clerk-react";
import { useState } from "react";

export default function useFetch(cb, option = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { session } = useSession();

  const fetchData = async (...args) => {
    try {
      const supabseToken = await session?.getToken({
        template: "supabase",
      });
      const res = await cb(supabseToken, option, ...args);
      setData(res);
      console.log(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}

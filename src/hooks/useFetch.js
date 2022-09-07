import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const baseUrl = "https://fakestoreapi.com";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${baseUrl}/${url}`);
        setData(res.data);
        setLoading(false)
      } catch (error) {
        setError(error);
      }
    }
    fetchData()
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

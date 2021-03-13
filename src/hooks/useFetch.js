import { useState, useEffect } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://akabab.github.io/superhero-api/api/",
});

// custom hook for performing GET request
const useFetch = (url, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const response = await instance.get('./');
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, data };
};

export default useFetch;

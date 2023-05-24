import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          console.log("Data: ", result);
          setData(result);
          setisLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setisLoading(false);
        });
    }, 1000);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;

import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { FetchingContext } from "@/pages/Livescreen";
const KotakIndikator = ({ url }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { isFetching } = useContext(FetchingContext);

  useEffect(() => {
    let isCancelled = false;

    const fetchData = () => {
      axios
        .get(url)
        .then((response) => {
          if (!isCancelled) {
            if (response.status === 200) {
              setIsSuccess(true);
            } else {
              setIsSuccess(false);
            }

            if (isFetching) {
              // Call fetchData again after 1 second
              setTimeout(fetchData, 1000);
            }
          }
        })
        .catch((error) => {
          if (!isCancelled) {
            setIsSuccess(false);
            // Call fetchData again after 1 second

            if (isFetching) {
              // Call fetchData again after 1 second
              setTimeout(fetchData, 1000);
            }
          }
        });
    };

    if (isFetching) {
      fetchData();
    }

    return () => {
      isCancelled = true;
    };
  }, [url, isFetching]);

  const className = isSuccess ? "bg-green-600" : "bg-red-600";

  return (
    <div>
      <div
        className={`w-[10px] h-[10px] rounded-full border-2 border-black ${className}`}></div>
    </div>
  );
};

export default KotakIndikator;

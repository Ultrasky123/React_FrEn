import axios from "axios";
import React, { useEffect, useState } from "react";

const KotakIndikator = ({ url }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(url)
        .then((response) => {
          if (response.status === 200) {
            setIsSuccess(true);
          } else {
            setIsSuccess(false);
          }
        })
        .catch((error) => {
          setIsSuccess(false);
        });
    }, 1000); // call the API every 1 second

    return () => clearInterval(interval); // clear the interval on unmount
  }, [url]);

  const className = isSuccess ? "bg-green-600" : "bg-red-600";

  return (
    <div>
      <div
        className={`w-[10px] h-[10px] rounded-full border-2 border-black ${className}`}></div>
    </div>
  );
};

export default KotakIndikator;

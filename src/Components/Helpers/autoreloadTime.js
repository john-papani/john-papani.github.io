import React, { useEffect, useState } from "react";
import moment from "moment";

const LiveTime = () => {
  const [time, setTime] = useState(moment().format("LTS"));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("dddd D MMMM YYYY HH:mm:ss"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>{time}</>
};

export default LiveTime;

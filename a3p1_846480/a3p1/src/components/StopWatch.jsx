// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);



  useEffect(() => {
    /*Complete the missing code*/
    const intervalId = setInterval(() => {
      // setCount((prevCount) => {
     
      //   if (prevCount >= 9) {
      //     clearInterval(intervalId);
      //   }
      //   // Return the updated count
      //   return prevCount + 1;
      // });
      setCount((preValue)=>{
        if(preValue>=9){
          clearInterval(intervalId)
        }
        return preValue + 1

      })
      
    }, 1000);
 
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;

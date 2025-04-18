
import React, { useMemo, useState } from "react";
import CountDown from "react-countdown";
import { countDownTimeType } from "../utils/types";

const CountDownTimer = ({
 
    resentEmail,
    setResentEmail
}: countDownTimeType) => {


  const countDonwTime = useMemo(() => { 
    const timer = Date.now() + 60000
    return timer
  }, [])


  /* set default types for the library  */

  // Renderer callback with condition
  const renderer = ({
    hours,
    minutes,
    seconds,
    completed = false,
  }: {
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
      }) => {
      if (completed) { 
    return     <div className="flex space-x-1">
        <button onClick={() => { 
            setResentEmail(!resentEmail)
         /*    setCounterKey(counterKey + 1) */
        }} className="text-zinc-600 text-xs font-normal font-['Aeonik-Regular'] leading-tight">
        Click to resend code 
        </button> 
         </div>
   
      }
    return (
        <span className="text-zinc-600 text-xs font-normal font-['Aeonik-Regular'] leading-tight">
     Resend code in {minutes}:{seconds}
        </span>
      );
  };

  return (
    <CountDown
          date={countDonwTime}
          renderer={renderer}
    />
  );
};

export default CountDownTimer;

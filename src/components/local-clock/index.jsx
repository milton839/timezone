import React, { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockActios from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";

const LocalClock = ({ clock, updateClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);
  return (
    <>
      <ClockDisplay
        date={date}
        title={clock.title}
        timezone={timezone}
        offset={offset}
      />
      <ClockActios local={true} clock={clock} updateClock={updateClock} />
    </>
  );
};

export default LocalClock;

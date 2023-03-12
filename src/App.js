import { useState } from "react";
import LocalClock from "./components/local-clock";

const LOCAL_CLOCK_INTI = {
  title: "My Clock",
  timezone: "",
  offset: 0,
  date: null,
};
function App() {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INTI });

  const updateLocalClock = (data) =>{
    setLocalClock({
      ...localClock,
      ...data
    })
  }

  return <div>{<LocalClock clock={localClock} updateClock={updateLocalClock} />}</div>;
}

export default App;

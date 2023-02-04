import LocalClock from "./components/local-clock";
import useClock from "./hooks/useClock";

function App() {
  const {clock:local} = useClock('Local Clock');
  const {clock:pst} = useClock('PST clock', 'PST');
  const {clock:est} = useClock('EST clock', 'EST');
  const {clock:pak} = useClock('UTC clock', 'UTC', 5*60);
  const {clock:british} = useClock('UTC clock', 'BST');
  const {clock:europian} = useClock('UTC clock', 'EET');

  console.log(local.date?.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
  console.log(pst.date?.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
  console.log(est.date?.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
  console.log(pak.date?.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
  console.log(british.date?.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
  console.log(europian.date?.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
  return (
    <div className="App">
      <LocalClock />
    </div>
  );
}

export default App;

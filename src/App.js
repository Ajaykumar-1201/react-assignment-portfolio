import react from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import sectionData from "./data/sectionData";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      {sectionData.map((value) => {
        return <Section x={value.title} y={value.des} />;
      })}
    </div>
  );
};

export default App;

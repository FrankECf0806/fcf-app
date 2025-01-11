import './App.css';
import Component1 from './Component1';
import { Car } from './Components/Car';
import UseStateExamples from './Components/UseStateExamples';
import UseState from './Components/UseState';

function App() {
  return (
    <div className="App">
      <h1> Hello </h1>
      {/* Function Component */}
      <Component1 name="Maria" number={3} />
      {/* Class Component */}
      <Car color="red"/>
      {/* Use State */}
      <UseState/>
      {/* Use Effect */}
      <UseStateExamples/>
    </div>
  );
}

export default App;

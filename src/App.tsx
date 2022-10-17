import gentlemen from "./gentlemen";
import "./App.css";

import Gentleman from "./components/Gentleman/Gentleman";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <ul>
        <Gentleman gentleman={gentlemen[0]} />
      </ul>

      <ul>
        <Gentleman gentleman={gentlemen[1]} />
      </ul>
      <ul>
        <Gentleman gentleman={gentlemen[2]} />
      </ul>
    </div>
  );
};

export default App;

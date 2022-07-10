import './App.module.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import classes from "./App.module.css";

function App() {
  return (
      <div>
          <Header/>
          <div className={classes.wrapper}>
              <Content/>
          </div>

      </div>

  );
}

export default App;

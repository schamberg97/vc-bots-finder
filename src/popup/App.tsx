import * as React from "react";
import logo from "./logo.png";
import "./App.css";

interface IAppProps  {
  bots?: boolean
}

const App = (props: IAppProps) => {
  const [bots, setBots] = React.useState<boolean | undefined>(props.bots);

  React.useEffect(() => {
    chrome.storage.local.set({bots: bots});
  }, [bots])

  return (
    <div className="App">
      <header className={"App-header" + (bots ? "" : " App-header--inactive")}>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-settings">
          <label htmlFor="bots-checkbox">Bots finder</label>
          <input type="checkbox" id="bots-checkbox" checked={!!bots} onChange={() => {setBots(!bots)}} />
        </div>
      </header>
    </div>
  );
};

export default App;

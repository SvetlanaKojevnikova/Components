import "./components/App.css";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import Header from "./components/Header/Header";
import "./components/Header/Header.css";
import "./components/FirstScreen/FirstScreen.css";
import Info from "./components/info/Info";
import "./components/info/Info.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FirstScreen />
        <Info />
      </main>
    </div>
  );
}

export default App;

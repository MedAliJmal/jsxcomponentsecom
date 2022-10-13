import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardList from "./components/cardList/CardList";
import Description from "./components/description/Description";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Description />
      <CardList />
    </div>
  );
}

export default App;

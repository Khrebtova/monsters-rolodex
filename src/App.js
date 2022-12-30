import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({ monsters: users, displayMonsters: users })
      )
      .catch((error) => console.log(error));
  };

  handleSearch = (e) => {
    this.setState({ searchField: `${e.target.value}`.toLowerCase() });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { handleSearch } = this;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title ">Monsters Rolodex</h1>
        <SearchBox
          handleSearch={handleSearch}
          placeholder="search monsters"
          className="search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

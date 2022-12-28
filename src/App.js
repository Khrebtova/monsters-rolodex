import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : []
    }  
  }  

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title '>Monsters Rolodex</h1>
        {this.state.monsters.map(monster => {
          return (
            <div key={monster.id}>
              <h2>{monster.name} - {monster.username}</h2>
            </div>
          )
        })
        }
      </div>
    );
  }
}

export default App;

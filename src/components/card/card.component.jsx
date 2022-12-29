import { Component } from "react";

class Card extends Component {
  

    render() {
    const { monster } = this.props;
    return (
      <div>
        <h1 style={{color: 'white'}}>{monster.name}</h1>
        <p>{monster.email}</p>
      </div>
    );
  }
}

export default Card;
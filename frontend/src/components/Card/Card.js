import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            type: "",
            image: "/monsterCardZone.png",
            attack: 0,
            defense: 0
        }
    }

    componentDidMount = () => {
        this.changeImage(this.props.image)
    }

    changeImage = (imageUrl) => {
        this.setState({
            image: imageUrl
        })
    }

    render() {
        return (
          <div>
              <img src={this.state.image} alt="card"></img>
          </div>
        );
    }
}

export default Card;

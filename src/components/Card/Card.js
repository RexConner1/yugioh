import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
          <div>
              <img src={this.props.image ? this.props.image : "/monsterCardZone.png"} alt="monsterCardZone"></img>
          </div>
        );
    }
}

export default Card;

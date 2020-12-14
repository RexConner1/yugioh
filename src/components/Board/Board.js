import React, { Component } from 'react';

import './Board.css';
import MonsterZone from '../MonsterZone/MonsterZone'
import MagicTrapZone from '../MagicTrapZone/MagicTrapZone'
// import Hand from '../Hand/Hand'
import Graveyard from '../Graveyard/Graveyard'
import Deck from '../Deck/Deck'

class Board extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
          <div className="board">
              {/* <FieldSpell /> */}
              <div className="top monsterZone">
                <MonsterZone summonTo={this.props.summonTo} onField={this.props.onField} />
              </div>
              <div className="top graveyard">
                <Graveyard />
              </div>

              {/* <ExtraDeck /> */}
              <div className="bottom magicTrapZone">
                <MagicTrapZone />
              </div>
              <div className="bottom deck">
                <Deck draw={this.props.draw} />
              </div>
          </div>
        );
    }
}

export default Board;

import React, { Component } from 'react';

import './Board.css';
import MonsterZone from '../MonsterZone/MonsterZone'
import MagicTrapZone from '../MagicTrapZone/MagicTrapZone'
import Hand from '../Hand/Hand'
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
          <div>
              <MonsterZone />
              <MagicTrapZone />
              <Hand />
              {/* <FieldSpell /> */}
              {/* <ExtraDeck /> */}
              <Graveyard />
              <Deck />
          </div>
        );
    }
}

export default Board;

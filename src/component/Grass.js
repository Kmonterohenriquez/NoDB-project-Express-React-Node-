import React, {Component} from 'react';

class Grass extends Component {
    render(){
        const {pokemonData} = this.props;
        return(
            <div>
                <img
                 src={pokemonData.sprites.front_default}
                 alt={pokemonData.name}/>
            </div>
        )
    }
}

export default Grass;
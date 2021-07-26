import React from 'react';
import Pokemon from './Pokemon';
import data from '../src/data'

class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stateClick: 0
        }
        // this.handleOnClick = this.handleOnClick.bind(this);
    }
    
    handleForPok = () => {
        this.setState((state, _props) => (
            {
                stateClick: state.stateClick + 1 
            }
        ))
    }

    handleResetPok = () => {
        this.setState((state, _props) => ({
            stateClick: state.stateClick - state.stateClick
        })
        )
    }
    
    handleOnClick = (/* { target: value } */) => {
        if (this.state.stateClick < data.length - 1) {
            this.handleForPok();
            console.log(this.state.stateClick);
        }
        else if (this.state.stateClick >= data.length - 1) {
            this.handleResetPok();
        }
    }

    render() {
        const { pokemons } = this.props;
        return (
            <div className="pokedex">
                { pokemons
                .filter((pokemon) => pokemon.id === pokemons[this.state.stateClick].id)
                .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />) }
                <button className="btn btn-outline-success" onClick={ this.handleOnClick } > >> NEXT >></button>
            </div>
        );
    }
}

export default Pokedex;

import {first151Pokemon, getFullPokedexNumber} from "../utils/index.js";
import {useState} from "react";

export default function SideNav(props) {
    const { selectedPokemon, setSelectedPokemon, handleCloseMenu , showSideMenu} = props;
    const [searchVal, setSearchVal] = useState("");

    const filteredPokemon = first151Pokemon.filter(((ele, eleIndex) => {
        if (getFullPokedexNumber(eleIndex).includes(searchVal)) { return true }
        if (ele.toLowerCase().includes(searchVal.toLowerCase())) { return true }

        return false;
    }))
    return (
        <nav className={' ' + (!showSideMenu ? 'open' : '')}>
            <div className={"header " + (!showSideMenu ? 'open' : '')}>
                <button onClick={handleCloseMenu} className='open-nav-button'>
                    <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <h1 className="text-gradient">Pokedex</h1>
            </div >
            <input placeholder="E.g. 001 or Bulba.."  value={searchVal} onChange={(e) => setSearchVal(e.target.value)} type="text"/>
            {filteredPokemon.map((pokemon, pokemonIndex) => {
                const truePokedexNumber = first151Pokemon.indexOf(pokemon)
                return (
                    <button onClick={() => {
                        setSelectedPokemon(truePokedexNumber);
                        handleCloseMenu();
                    }} key={pokemonIndex} className={'nav-card ' + (selectedPokemon === pokemonIndex ? 'nav-card-selected' : '')} >
                        <p>{getFullPokedexNumber(truePokedexNumber)}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}
        </nav>
    )
}
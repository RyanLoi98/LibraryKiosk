import React, {useState} from "react";
import './searchbar.css';
import {useNavigate} from "react-router-dom";

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

function SearchBar(){
    // rename useNavigate function to navigate
    let navigate = useNavigate();

    // make our navigate to return book function
    const goSearch = () => {
        if (searchText.trim() !== '') {
            let searchPath = '/resultTwo';
            navigate(searchPath);
        }
    }
    const [searchText, setSearchText] = useState('');
    const [isKeyboardOn, setKeyboard] = useState(false);

    const onChange = (input) => {
        setSearchText(input);
    };

    const toggleKeyboard = () => {
        setKeyboard(!isKeyboardOn);
    };

    const closeKeyboard = () => {
        setKeyboard(false);
    };

    // const onInputChange = (event) => {
    //     const input = event.target.value
    //     setSearch(input);
    // }
    
    return(
        <div className="search-bar-container">
            <form className='search-bar'>
                <input className='search' type="text"
                       placeholder="Search for title, author, genre..."
                       value={searchText} onClick={toggleKeyboard}
                       onChange={(e) => setSearchText(e.target.value)}/>
                <button className='go' type="go" onClick={goSearch} disabled={searchText.trim === ''}>Search</button>
            </form>
            {isKeyboardOn && (
                <div className="keyboard-search">
                    <Keyboard inputName="default" onChange={onChange}/>
                    <button onClick={closeKeyboard}>X</button>
                </div>
            )}
        </div>
    )
}

export default SearchBar;
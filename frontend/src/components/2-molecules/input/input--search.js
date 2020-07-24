import React from 'react';
import './input.scss';
import Search from '../../../assets/images/avatars/1.jpg';
import '../../1-atoms/link-icon/link-icon--purple';


const Input = (props) => {
    return (
        <form onSubmit={() => {console.log('hello')}} class="m-input">
            <label htmlFor="search-input">Lorem ipsum</label>
                <div>

                <input type="text" id="search-input" name="search-input" placeholder="Lorem ipsum..."/>
                <button type="submit"> <img src={Search} /> </button>
                
                </div>
        </form>
    );
};

export default Input;
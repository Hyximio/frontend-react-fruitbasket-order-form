import React from 'react';
import './FruitContainer.css';

function FruitContainer( {title, value, setter} ) {

    function setValue( _val ){
        _val < 0 ? setter(0) : setter(_val);
    }

    return (
        <section className="fruit-container">
            <h2>{title}</h2>
            <button
                type="button"
                onClick={() => setValue( value - 1 )}
            >-</button>
            <p>{value}</p>
            <button
                type="button"
                onClick={() => setValue( value + 1 )}
            >+</button>
        </section>
    )
}

export default FruitContainer;
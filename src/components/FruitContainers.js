import React from 'react';
import './FruitContainers.css';

function FruitContainers( {fruits, states, setStates} ) {

    function increment( _fruitName, _increment ) {
        states[ _fruitName ] = Math.max(0, states[ _fruitName ] + _increment );
        setStates( {...states} );
    }

    const fruitComponents = fruits.map( (fruit) =>
        <section className="fruit-container" key={fruit}>
            <h2>{fruit}</h2>
            <button
                type="button"
                onClick={() => increment( fruit.toLowerCase(), -1 )}
            >-</button>
            <p>{ states[ fruit.toLowerCase() ]}</p>
            <button
                type="button"
                onClick={() => increment( fruit.toLowerCase(), 1 )}
            >+</button>
        </section>
    );

    return (
        <>{fruitComponents}</>
    )
}

export default FruitContainers;
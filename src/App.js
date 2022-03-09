import React, {useState} from 'react';
import './App.css';
import FruitContainers from './components/FruitContainers';
import {useForm} from 'react-hook-form';

function App() {

    const fruits = ["Aardbeien", "Bananen", "Appels", "Kiwi's"];

    // Dynamically create useStates for each fruit
    const fruitsObject = {};
    for ( const fruit of fruits ) fruitsObject[ fruit.toLowerCase() ] = 0;
    const [states, setStates] = useState( fruitsObject );


    // Form
    const { register, handleSubmit, formState: {errors} } = useForm();

    function onFormSubmit(data) {
        data["order"] = states;
        console.log( data );
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitContainers
                fruits={ fruits }
                states={ states }
                setStates={ setStates }
            />
            <button type="button"
                onClick={() => setStates( fruitsObject )}
            >Reset</button>


            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label htmlFor="details-name" className="label">
                    Voornaam
                    <input
                        type="text"
                        id="details-name"
                        {...register("name", {
                            required: true,
                        })}
                    />
                    {errors.name && <mark>Dit veld is verplicht</mark>}
                </label>
                <br></br>
                <label htmlFor="details-surname">
                    Achternaam
                    <input
                        type="text"
                        id="details-surname"
                        {...register("surname")}
                    />
                </label>
                <br></br>
                <label htmlFor="details-age">
                    Leeftijd
                    <input
                        type="number"
                        id="details-age"
                        {...register("age")}
                    />
                </label>
                <br></br>
                <label htmlFor="details-zipcode">
                    Postcode
                    <input
                        type="text"
                        id="details-zipcode"
                        {...register("zipcode")}
                    />
                </label>
                <h4>Bezorgfrequentie</h4>

                <select
                    {...register("when-delivery")} >
                    <option value="iedere-week">Iedere week</option>
                    <option value="om-de-week">Om de week</option>
                    <option value="iedere-maand">Iedere maand</option>
                </select>
                <br></br>
                <label htmlFor="timing">
                    <input
                        {...register("timing")}
                        value="afternoon"
                        type="radio"
                    />
                    Overdag
                </label>
                <label htmlFor="timing">
                    <input
                        {...register("timing")}
                        value="night"
                        type="radio"
                    />
                    'S avonds
                </label>
                <br></br>
                <label htmlFor="accept-conditions">
                    <input
                        type="checkbox"
                        {...register("conditions")}/>
                        Ik ga akkoord met de voorwaarden
                </label>
                <br></br>
                <label htmlFor="comments">
                    Opmerking</label>
                <br></br>
                    <input
                        type="text"
                        id="comments"
                        rows="4"
                        {...register("comments")}
                    />

                <br></br>
                <button
                    type="submit"
                >Verzenden</button>
            </form>
        </>
    );
}

export default App;

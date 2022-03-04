import React, {useState} from 'react';
import './App.css';

import FruitContainer from './components/FruitContainer';

function App() {

    const [counterST, setCounterST] = useState(0);
    const [counterBN, setCounterBN] = useState(0);
    const [counterAP, setCounterAP] = useState(0);
    const [counterKW, setCounterKW] = useState(0);

    const setters = [setCounterST, setCounterBN, setCounterAP, setCounterKW];

    function resetValues( _setters ) {
        for ( let setter of _setters ) setter(0);
    }

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>

        <FruitContainer
            title="Aardbeien"
            value={counterST}
            setter={setCounterST}
        />
        <FruitContainer
            title="Bananen"
            value={counterBN}
            setter={setCounterBN}
        />
        <FruitContainer
            title="Appels"
            value={counterAP}
            setter={setCounterAP}
        />
        <FruitContainer
            title="Kiwi's"
            value={counterKW}
            setter={setCounterKW}
        />
        <button type="button"
            onClick={() => resetValues(setters) }
        >Reset</button>
    </>
  );
}

export default App;

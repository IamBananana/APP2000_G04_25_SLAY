import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState<number>(0);
    const [inpPlayerCount, setInpPlayerCount] = useState(0);

    // Funksjon for å håndtere knappetrykk
    const incrementCounter = () => {
      setCount(count + 1);
    };

    return (
      <div className="container" style={{ paddingTop: '70px' }}>
          <h1 className="text-center">Velkommen til React med Bootstrap!</h1>
          <h2 className="text-center">Teller: {count}</h2>
          <button className="btn btn-primary" onClick={incrementCounter}>
            Øk teller
          </button>

          <input id="inpCountPlayers" type="number" value={inpPlayerCount} onChange={
                            (e) => {
                                const value = parseInt(e.target.value) || 0;
                                setInpPlayerCount(value); 
                                console.log(inpPlayerCount)
                            }}  
                                className="form-control me-auto mb-2 w-75" required min="1" max={6}/>
          <p>{inpPlayerCount}</p>
      </div>
    );
}
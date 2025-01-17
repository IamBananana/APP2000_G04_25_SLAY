import React, { ChangeEvent, ReactElement, ReactEventHandler, useState } from "react";

export default function Spill(){
    const maxSpillere : number = 6;
    const [inpPlayerCount, setInpPlayerCount] = useState<number>(0);
    let addPlayers = () => {
        console.log("Button clicked!");
        //Check if inpPlayerCount > 0 || inpPlayerCount < maxPlayer
    };

    React.useEffect(() => {
        setMenuItems(items);
      }, [inpPlayerCount]);
      
    const items : ReactElement = 
                    <div className="mx-4">
                        <div className="fs-6 mb-1">Ant Spillere: (max {maxSpillere})</div>
                        <input id="inpCountPlayers" type="number" value={inpPlayerCount} 
                                onChange={(e) => {
                                    const value = Math.min(parseInt(e.target.value) || 0, maxSpillere);
                                    setInpPlayerCount(value);
                                }}
                                onFocus={(e) => {
                                    e.target.select();
                                }}
                                
                                className="form-control me-auto mb-2 w-75" 
                                required 
                                min="1"
                                max={maxSpillere}/>
                        <button type="button" className="btn btn-outline-primary w-50 text-center me-auto"
                        onClick={addPlayers}>Legg til</button>
                    </div>;

    
    const [menuItems, setMenuItems] = useState(items);



    const addPlayer = () => {
        //Legger til bare en spiller
    }

    addPlayers = () => {
        //Legger til antall spillere brukeren har oppgitt
        {/*
        for(let i = 0; i<inpPlayerCount; i++){
            setMenuItems(<div className="mt-4 mx-3">
                <div className="input-group">
                    <label htmlFor="inpSpiller" className="input-group-text" style={{fontSize: "80%"}}>Spiller 1:</label>
                    <input id="inpNavn1" type="text" className="form-control" />
                </div>
            </div>)
        }
        */}
    }

    return (
        <form id="schema">
            <div id="main" className="container border border-warning" style={{height: "75vh"}}>
            <div className="row g-0  p-5 bg-dark text-light rounded" style={{height: "100%"}}>
                <div id="map" className="container border border-secondary col-9 p-5 me-1">Kart placeholder</div>
                <div id="options" className="d-flex flex-column align-items-center mx-0 border border-secondary rounded col-2 text-nowrap">
                    <div id="menu" className="mt-2 d-flex flex-column align-items-column">
                        {menuItems}
                        {/* 
                            Pluss tegn 
                            kanskje lage egen reusable component for icons?
                        */}
                    </div>

                    <button type="submit" className="btn btn-success mb-4 mt-auto w-50">Start spill</button>
                </div>
            </div>
            </div>
        </form>
    )
}


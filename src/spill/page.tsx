import { useState } from "react";

export default function Spill(){
    const maxSpillere : number = 6;

    const addPlayer = () => {
        //Legger til bare en spiller
    }

    const addPlayers = () => {
        //Legger til antall spillere brukeren har oppgitt

        const [menuItems, setMenuItems] = useState(0);

        const menu = document.getElementById("menu");
        let inpCountPlayers: any = document.getElementById("inpCountPlayers");
        

        //omg fuck this
        console.log(menu != null && inpCountPlayers != null);
        if(menu != null && inpCountPlayers != null) {
            menu.innerHTML = '';
            menu.innerHTML += '<i className="bi bi-plus ms-auto me-1 fs-5" style={{caretColor: "transparent", cursor: "pointer", width: "100%"}} onClick={addPlayer}></i>';
            
            for(let i: any = 0; i<inpCountPlayers; i++){
                menu.innerHTML += '<div className="mt-4 mx-3">' +
                                        '<div className="input-group">' +
                                            '<label htmlFor="inpSpiller" className="input-group-text" style={{fontSize: "80%"}}>Spiller 1:</label>' +
                                            '<input id="inpNavn1" type="text" className="form-control" />' +
                                        '</div>' +
                                    '</div>';
            }
        }
    }

    return (
        <form id="schema">
            <div id="main" className="container border border-warning" style={{height: "75vh"}}>
            <div className="row g-0  p-5 bg-dark text-light rounded" style={{height: "100%"}}>
                <div id="map" className="container border border-secondary col-9 p-5 me-1">Kart placeholder</div>
                <div id="options" className="d-flex flex-column align-items-center mx-0 border border-secondary rounded col-2 text-nowrap">
                    <div id="menu" className="mt-2 d-flex flex-column align-items-column">
                        <div className="mx-4">
                            <div className="fs-6 mb-1">Ant Spillere: (max {maxSpillere})</div>
                            <input id="inpCountPlayers" className="form-control me-auto mb-2 w-75" required pattern="[1-6] {1}"/>
                            <button type="button" className="btn btn-outline-primary w-50 text-center me-auto"
                            onClick={addPlayers}>Legg til</button>
                        </div>
                        
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


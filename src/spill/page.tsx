import { ReactElement, useEffect, useState } from "react";
import Icon from "../components/Icon";

export default function Spill(){
    const maxSpillere: number = 6;
    const [inpPlayerCount, setInpPlayerCount] = useState<number>(0);
    const [isInpMenuVisible, setIsInpMenuVisible] = useState<boolean>(true);
    const [playersMenu, setPlayersMenu] = useState<ReactElement[]>([]);

    {/**
        Er ikke compatible for mobil enda. Bare desktop...
    */}

    //Legger til antall spillere brukeren har oppgitt

    const handleDeletePlayer = (deletePlayer: string) => {
        setPlayersMenu((prevPlayers) => prevPlayers.filter((player) => player.key !== deletePlayer));
    }
    
    const addPlayers = () => {

        if(inpPlayerCount > 1 && inpPlayerCount < maxSpillere){
            let newItems = [];

            newItems.push(
                <Icon iconName="plus-circle" className="ms-auto mt-2 me-2" onClick={addPlayer}/>
            )

            for(let i = 0; i<inpPlayerCount; i++){
                    newItems.push(
                    <div className="mt-4 mx-3 d-flex flex-row align-items-center" key={`player-${i}`}>
                        <div className="input-group">
                            <label htmlFor="inpSpiller" className="input-group-text" style={{fontSize: "80%"}}>Spiller {i+1}:</label>
                            <input id="inpNavn1" type="text" className="form-control" />
                        </div>
                        <Icon iconName="x-lg" onClick={() => handleDeletePlayer(`player-${i}`)} className="ms-1" />
                    </div>
                )
            }

            setIsInpMenuVisible(false);
            setPlayersMenu(newItems);
            console.log("Hi")
        }
        else {
            //Vis feilmelding
        }
    }

    const addPlayer = () => {
        //Legger til bare en spiller
            
        setInpPlayerCount(prevCount => {
            if(prevCount < maxSpillere) {
                const newCount = prevCount + 1;

                setPlayersMenu( prevItems => [...prevItems,
                    <div className="mt-4 mx-3 d-flex flex-row align-items-center" key={`player-${newCount}`}>
                        <div className="input-group">
                            <label htmlFor="inpSpiller" className="input-group-text" style={{fontSize: "80%"}}>Spiller {newCount}:</label>
                            <input id="inpNavn1" type="text" className="form-control" />
                        </div>
                        <Icon iconName="x-lg" onClick={() => handleDeletePlayer(`player-${newCount}`)} className="ms-1" />
                    </div>
                ]);

                console.log("newCount: "+newCount);

                return newCount;
            }
            else {
                return prevCount //Ikke increase counter hvis den er mer eller lik maxSpillere
            }
        });
    }

    let inpMenu: ReactElement = (
        <div className="mx-4 mt-3" key="initial-menu">
            <div className="fs-6 mb-1">Ant Spillere: (max {maxSpillere})</div>
            <input
                id="inpCountPlayers"
                type="number"
                value={inpPlayerCount} 
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
                max={maxSpillere}
            />
            <button 
                type="button" 
                className="btn btn-outline-primary w-50 text-center me-auto"
                onClick={addPlayers}
            >
                Legg til
            </button>
        </div>
    );

    useEffect(() => {
        console.log("Updated player count:", inpPlayerCount);
        console.log(isInpMenuVisible);
        //addPlayer();
    }, [inpPlayerCount]);

    return (
        <form id="schema">
            <div id="main" className="container" style={{height: "75vh"}}>
            <div className="row g-0  p-5 bg-dark text-light rounded" style={{height: "100%"}}>
                <div id="map" className="container border border-secondary p-5 me-1 
                                            col-xl-9 col-lg-8 col-md-7 col-sm-6 
                                            d-sm-block d-none">Kart placeholder</div>

                <div id="options" className="d-flex flex-column align-items-center mx-0 border border-secondary rounded text-nowrap 
                                            col-xl-2 col-lg-3 col-md-4 col-sm-5">

                    <div id="menu" className="mt-2 d-flex flex-column align-items-column align-content-center">
                        <label className="fs-5 align-self-center">
                            Spill innstillinger
                        </label>
                        {isInpMenuVisible ? inpMenu : playersMenu}
                    </div>
                    <button type="submit" className="btn btn-success mb-4 mt-auto w-50">Start spill</button>
                </div>
            </div>
            </div>
        </form>
    )
}


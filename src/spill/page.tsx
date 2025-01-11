export default function Spill(){
    const maxSpillere : number = 6;

    return (
        <div id="main" className="container border border-warning" style={{height: "75vh"}}>
            <div className="row g-0  p-5 bg-dark text-light rounded" style={{height: "100%"}}>
                <div id="map" className="container border border-secondary col-9 p-5 me-1">Kart placeholder</div>
                <div id="options" className="d-flex flex-column align-items-center mx-0 border border-secondary rounded col-2 text-nowrap">
                    <div className="mt-2 mx-4">
                        <div className="fs-6 mb-1">Ant Spillere: (max {maxSpillere})</div>
                        <input id="inpAntall" className="form-control me-auto mb-2 w-75"/>

                        <button type="button" className="btn btn-outline-primary w-50 text-center me-auto">Legg til</button>
                    </div>

                    <button type="button" className="btn btn-success mb-4 mt-auto w-50">Start spill</button>
                </div>
            </div>
        </div>
    )
}


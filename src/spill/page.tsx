export default function Spill(){
    const divStyle = {
        width: "100%"
    };

    return (
        <div className="container-fluid border border-warning">
            <div className="row g-0  p-5 bg-white">
                <div id="map" className="container border col-9 p-5 me-0">Kart her</div>
                <div id="options" className="border col-2 p-5 mx-0 text-nowrap">
                    <div className="full-width border border-primary" style={divStyle}>
                        <div className="fs-6 text-muted">Ant Spillere:</div>
                        <input id="inpAntall" className="form-control"/>

                        <div className="btn btn-primary">Bekreft</div>
                    </div>

                    <div className="btn btn-success mt-5">Start spill</div>
                </div>
            </div>
        </div>
    )
}


 import logo from '../assets/android-chrome-512x512.png';

 
 export default function Page(){
    return (
        <div id="wrapper"
         className="container col-md-6 d-flex flex-column justify-content-around align-items-center border border-success
         bg-light rounded p-5">

            <img src={logo} className="img w-25" alt="logo"/>
            
            <div className='container text-center'>
                <p className="display-6 mb-0 fs-2 fw-normal">Velkommen</p>
                <p className="display-12">It's TeeTime</p>
            </div>
            
            <div className="form-floating mb-3">
                <input id="inpBrukernavn" className="form-control rounded-pill" type="email" placeholder="Brukernavn"/>
                <label htmlFor="inpBrukernavn">Brukernavn</label>
            </div>
            <div className="form-floating mb-1">
                <input id="inpPassord" className="form-control rounded-pill" type="password" placeholder="password"/>
                <label htmlFor="inpPassord">Passord</label>
            </div>
            
            <button className="btn btn-success btn-lg rounded-pill mt-3 mb-2 col-lg-3">LOGIN</button>
            

            <div className='mb-4'>
                <a href="#" className='text-decoration-none'>Glemt passord?</a>  {/* Vet ikke om vi vil lage egen side for dette... */}
            </div>
            
            <div>
                Har du ikke ikke bruker? <a href="/registrer" className='text-decoration-none'>Registrer deg!</a>
            </div>

        </div>
    )
}
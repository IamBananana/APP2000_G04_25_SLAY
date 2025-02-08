export default function Footer() {
    return (
        <footer className="text-center text-lg-start text-white bg-dark my-5">
            <div className="container-fluid p-4 pb-0">
                <section>
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                TeeTime
                            </h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto bg-light"
                                style={{ width: "60px", height: "2px" }}
                            />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Repudiandae itaque tempora
                                inventore ratione non quod!
                            </p>
                        </div>
                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3"></div>
                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                Links
                            </h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto bg-light"
                                style={{ width: "60px", height: "2px" }}
                            />
                            <p>
                                <a className="text-white">Your Account</a>
                            </p>
                            <p>
                                <a className="text-white">Register Now!</a>
                            </p>
                            <p>
                                <a className="text-white">Help</a>
                            </p>
                        </div>
                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                Contact
                            </h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto bg-light"
                                style={{ width: "60px", height: "2px" }}
                            />
                            <p>
                                <i className="fas fa-home mr-3"></i>{" "}
                                Gullbringvegen 28, Bø 3800, NOR
                            </p>
                            <p>
                                <i className="fas fa-envelope mr-3"></i>{" "}
                                info@gmail.com
                            </p>
                            <p>
                                <i className="fas fa-phone mr-3"></i> + 47 123
                                456 78
                            </p>
                        </div>
                    </div>
                </section>
                <hr className="my-3" />
                <section className="p-3 pt-0">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-8 text-center text-md-start">
                            <div className="p-3">© 2020 Copyright</div>
                        </div>

                        {/*Her kommer eventuelle ikoner*/}
                        <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                            <a
                                className="btn btn-outline-light btn-floating m-1 text-white"
                                role="button"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                className="btn btn-outline-light btn-floating m-1 text-white"
                                role="button"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                className="btn btn-outline-light btn-floating m-1 text-white"
                                role="button"
                            >
                                <i className="fab fa-google"></i>
                            </a>
                            <a
                                className="btn btn-outline-light btn-floating m-1 text-white"
                                role="button"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
}

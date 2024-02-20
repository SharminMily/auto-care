/* eslint-disable react/no-unescaped-entities */
const Transfer = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="hero min-h-[150px]" style={{ backgroundImage: 'url(https://i.ibb.co/nj4Brn9/IMG-20240220-154722.jpg?fbclid=IwAR2JhVHaSIb9nhuUDyz3M47TLQO8d_QIzBpCDLWDdaYtH-mFY2AoCiTFGyM)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">

                                {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}

                                <div className="carousel w-full">
                                    <div id="slide1" className="carousel-item relative w-full">
                                        <div className="m-20">
                                            <h1 className="mb-5 text-5xl font-bold">Business Transfer</h1>
                                <p className="mb-5">Involving the shift of ownership and operational control, Business Transfer denotes the process of transferring an established enterprise from one proprietor to another.</p>
                                        </div>
                                        <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide4" className="btn btn-circle">❮</a>
                                            <a href="#slide2" className="btn btn-circle">❯</a>
                                        </div>
                                    </div>
                                    <div id="slide2" className="carousel-item relative w-full">
                                    <div className="m-20">
                                            <h1 className="mb-5 text-5xl font-bold">Luxury Vehicles</h1>
                                <p className="mb-5">Exuding opulence and sophistication, luxury vehicles redefine automotive elegance. Meticulously crafted with precision and adorned with premium materials, these automotive marvels.</p>
                                        </div>
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide1" className="btn btn-circle">❮</a>
                                            <a href="#slide3" className="btn btn-circle">❯</a>
                                        </div>
                                    </div>
                                    <div id="slide3" className="carousel-item relative w-full">
                                    <div className="m-20">
                                            <h1 className="mb-5 text-5xl font-bold">Airport Transfer</h1>
                                <p className="mb-5">Airport transfers are transportation services that take you to or from an airport. They are convenient and can provide a smooth transition between the airport and your destination.</p>
                                        </div>
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide2" className="btn btn-circle">❮</a>
                                            <a href="#slide4" className="btn btn-circle">❯</a>
                                        </div>
                                    </div>
                                    <div id="slide4" className="carousel-item relative w-full">
                                    <div className="m-20">
                                            <h1 className="mb-5 text-5xl font-bold">Events & Wedding</h1>
                                <p className="mb-5">It seems like you're interested in information related to events and weddings. Whether you're planning an event or wedding, or just looking for general information, I'm here to hel.</p>
                                        </div>
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide3" className="btn btn-circle">❮</a>
                                            <a href="#slide1" className="btn btn-circle">❯</a>
                                        </div>
                                    </div>
                                    <div id="slide4" className="carousel-item relative w-full">
                                    <div className="m-20">
                                            <h1 className="mb-5 text-5xl font-bold">Chauffeur Services</h1>
                                <p className="mb-5">Chauffeur services provide a premium and personalized transportation experience, offering clients the luxury of professional drivers who are dedicated to ensuring a comfortable.</p>
                                        </div>
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide5" className="btn btn-circle">❮</a>
                                            <a href="#slide1" className="btn btn-circle">❯</a>
                                        </div>
                                    </div>
                                </div>

                                {/* <button className="btn ">Get Started</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Transfer;
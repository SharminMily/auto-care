
const Banner = () => {
    return (
        <div className="md:mb-40 mb-20">
            <div className=" relative  w-full">
                <img className="w-full" src="https://i.ibb.co/gV5ZM5t/IMG-20240220-163605.jpg" alt="" />
            </div>

            {/* <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/gV5ZM5t/IMG-20240220-163605.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn text-white bg-red-700 hover:bg-red-700">Get Started</button>
                    </div>
                </div>
            </div> */}


            <div className="lg:top-[320px] lg:left-68 lg:px-32 md:top-52 md:left-48 left-20 top-24 align-middle absolute grid grid-cols- justify-center items-center bg-white p-4 shadow-slate-500 shadow-xl">
                {/* <div>heloo</div>
                <div>hhhooo</div>
                <div>hhhhh</div> */}
                <div className="items-center justify-center align-middle">
                    <div className="font-bold text-center  md:text-3xl text-xl md:pb-8 pb-2"><span className="text-red-600 md:text-5xl">35%</span> Discount Offer</div>
                <div className=" text-center">
                    <div className="grid grid-flow-col gap-2 md:gap-5 text-center auto-cols-max">
                        <div className="flex flex-col p-2  bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono md:text-5xl">
                                <span style={{ "--value": 15 }}></span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono md:text-5xl">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono md:text-5xl">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono md:text-5xl">
                                <span style={{ "--value": 53 }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
                </div>
                
            </div>

        </div>
    );
};

export default Banner;
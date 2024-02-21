const Discount = () => {
    return (
        <div className="m-20">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div>
                    <figure><img src="https://i.ibb.co/F5zgpGy/IMG-20240221-115802.jpg" alt="Album" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-3xl"><span className="text-6xl text-red-600 font-bold">20%</span>Discount Offer!</h2>
                    <p>Rapid Car Dispatch is a cutting-edge and efficient vehicle logistics solution designed to streamline and optimize the process of dispatching cars swiftly and seamlessly.</p>
                    <div className="card-actions">

                        <button className="text-white bg-gradient-to-br from-black via-red-500 to-black
       hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-base px-4 py-2 w-full text-center me-2 mb-2 uppercase">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const ProductCars = ({ car }) => {
    const { id, image, car_name, price, details, rating, speed } = car;
    return (
        <div>
            <div className="card border border-red-700 mb-10 bg-base-100 shadow-xl">
                <figure><img className="h-80" src={image} alt="Shoes" /></figure>
                <div className="card-body pb-4">

                <div className="card-actions justify-end">
                        <div className="badge border-2 border-red-500 p-3 bg-red-500 text-white hover:badge-outline ">Level</div>
                        <div className="badge border-2 border-red-500 p-3 bg-red-500 text-white hover:badge-outline ">Speed</div>
                    </div>

                    <h2 className="card-title text-2xl">
                        {car_name}
                    </h2>

                    <p className="text-xl font-semibold">Price: <span className="text-red-500 font-bold">$ {price}</span></p>

                    <button className="text-white bg-gradient-to-br from-black via-red-500 to-black
       hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-base px-4 py-2 w-full text-center me-2 uppercase">Details</button>
                    <button className="text-white bg-gradient-to-br from-black via-red-500 to-black
       hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-base px-4 py-2 w-full text-center me-2 mb-2 uppercase">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCars;
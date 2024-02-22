import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import ProductCars from "./ProductCars";

const Product = () => {
    const cars = useLoaderData();
    console.log(cars)

    return (
        <div>
            <Navbar></Navbar>

            <div className="md:m-20">

                <h1 className="text-center text-4xl font-bold" data-aos="fade-left">All Cars Here</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10 mb-10">
                    {
                        cars.map(car => <ProductCars key={car.id} car={car}></ProductCars>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Product;
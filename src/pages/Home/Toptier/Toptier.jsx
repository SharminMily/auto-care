import ButtonStyle from "../../Shared/ButtonStyle/ButtonStyle";

/* eslint-disable react/no-unescaped-entities */
const Toptier = () => {
    return (
        <div className="md:m-20 m-8">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                <div>
                    <img className="w-full h-full" src="https://i.ibb.co/4R9PG0P/IMG-20240220-161159.jpg" alt="" />
                </div>
                <div className="">
                    <h1 className="font-bold text-3xl text-red-600 py-4 ">Top-tier Luxury Cars for Maximum Satisfaction</h1>
                    <p className="text-gray-600">Investing in a yacht can be a dream come true, but it's essential to thoroughly research and plan to make an informed decision that aligns with your goals and financial capabilities. Consulting with experts in yacht ownership, such as yacht brokers.</p>
                    <div className="flex gap-4">
                        <button className="btn mt-4 btn-outline hover:bg-red-500 border-2 border-red-400 hover:border-red-500 font-semibold text-red-500 hover:text-white">Details</button>
                        <button className="btn mt-4 btn-outline hover:bg-red-500 border-red-400 hover:border-red-500 border-2  font-semibold text-red-500 hover:text-white">View More</button>
                    </div>
                    {/* <ButtonStyle name="Details"></ButtonStyle> */}
                </div>
            </div>
        </div>
    );
};

export default Toptier;
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Experiences from "../Experiences/Experiences";
import LuxuryCar from "../LuxuryCar/LuxuryCar";
import Toptier from "../Toptier/Toptier";
import Transfer from "../Transfer/Transfer";
import Discount from "./Discount/Discount";

const Home = () => {
    return (
        <>
        <div>
          <Navbar></Navbar>
        </div>
          <div className="">
          <Banner></Banner>
          <Toptier></Toptier>
          <Experiences></Experiences>
          <LuxuryCar></LuxuryCar>
          <Transfer></Transfer>
          <Discount></Discount>
          </div>
          <Footer></Footer>
        </>
    );
};

export default Home;
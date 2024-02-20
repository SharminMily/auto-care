import Banner from "../Banner/Banner";
import Experiences from "../Experiences/Experiences";
import Toptier from "../Toptier/Toptier";
import Transfer from "../Transfer/Transfer";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Toptier></Toptier>
          <Experiences></Experiences>
          <Transfer></Transfer>
        </div>
    );
};

export default Home;
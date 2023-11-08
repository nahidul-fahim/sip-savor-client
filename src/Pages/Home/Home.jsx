import FirstBanner from "./FirstBanner";
import OutStory from "./OutStory";
import TodaySpecial from "./TodaySpecial";
import TopProduct from "./TopProduct";
import {Helmet} from "react-helmet";



const Home = () => {


    return (
        <div>
            <Helmet>
                <title>Homepage</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <FirstBanner />
            <OutStory />
            <TodaySpecial />
            <TopProduct />

        </div>
    );
};

export default Home;
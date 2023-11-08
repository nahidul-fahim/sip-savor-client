import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const ErrorPage = () => {

    const img404 = 'https://i.ibb.co/ZMXS31g/404-anime.gif';

    return (
        <div className="flex justify-center items-center h-[100vh] flex-col gap-4">
            <Helmet>
                <title>404 page</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <h2 className="text-6xl font-extrabold font-heading uppercase text-center text-[gray]">Oops!</h2>
            <img src={img404} alt="" />
            <h2 className="text-4xl font-extrabold font-heading uppercase text-center text-[gray]">page not found!</h2>
            <Link to="/"><button className="px-5 py-2 mt-10 text-heading uppercase font-medium text-white bg-main hover:bg-second hover:text-white duration-500 tracking-[3px]">Return to Home</button></Link>
        </div>
    );
};

export default ErrorPage;
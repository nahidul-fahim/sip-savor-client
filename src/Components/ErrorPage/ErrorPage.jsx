import { Link } from "react-router-dom";


const ErrorPage = () => {

    const img404 = 'https://i.ibb.co/vhjh1c4/empty-res.png';

    return (
        <div className="flex flex-col justify-center items-center h-[100vh]"
        style={{backgroundImage: `linear gradient(to bottom, #00000030, #00000030), url(${img404})`}}>
            <Link to="/"><button className="px-5 py-2 border-2 text-heading uppercase font-medium text-main border-main hover:bg-main hover:text-white duration-500 tracking-[3px]">Return to Home</button></Link>
        </div>
    );
};

export default ErrorPage;
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-main text-5xl font-bold uppercase text-heading">404 Error</h1>
            <Link to="/"><button>Return to Home</button></Link>
        </div>
    );
};

export default ErrorPage;
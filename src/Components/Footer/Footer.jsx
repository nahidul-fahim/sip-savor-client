import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

    const logo = 'https://i.ibb.co/qR6mqLh/logo.png';


    return (
        <div className="bg-second">
            <footer className="container mx-auto footer p-10 bg-second text-neutral-content">
                <aside>
                    <img src={logo} alt="" />
                    <p className="font-heading">Sip & Savor Restaurant <br />9800 S Cicero Ave, Oak Lawn, Indiana</p>
                    <p className="font-heading"><small>&copy; All rights reserved.</small></p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <Link> <FaFacebookSquare className="text-3xl"/></Link>
                        <Link> <FaTwitterSquare className="text-3xl"/></Link>
                        <Link> <FaInstagramSquare className="text-3xl"/></Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
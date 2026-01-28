import {Link, link} from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <div className="container">
                <nav className="nav-center">
            <div className={"logo"}>
                <img src="../img/logo.jpg" alt="logo" border="0"/>
            </div>
            <ul className="nav-links">
                <li><Link to={"/home"} className={"link active"}>Home</Link></li>
                <li>
                    <Link to={"/About"} className={"link active"}>About</Link>
                </li>
                <li>
                    <Link to={"/News"} className={"link active"}>News</Link>
                </li>
                <li>
                    <Link to={"/Jobs"} className={"link active"}>Jobs</Link>
                </li>
                <li>
                    <Link to={"/ContactUs"} className={"link active"}>Contact Us</Link>
                </li>
            </ul>
                </nav>
            </div>

        </div>
    )
}
export default Navbar
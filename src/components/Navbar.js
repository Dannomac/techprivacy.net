import {useState} from "react";

function Navbar() {
    const [showSoftware, setShowSoftware] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const dropdown = {
        position: "relative",
        display: "inline-block"
    }
    const dropdownContent = {
        position: "absolute",
        backgroundColor: "#1f1f1f",
        minWidth: "200px",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        padding: "12px 16px",
        zIndex: 1,
        borderRadius: "10px"
    };
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="navbar-brand" href="/"><img src="/assets/icon.png" alt="Techprivacy.net logo" title="Techprivacy.net"/></a>
                    </li>
                    <div style={dropdown}>
                        <a className="nav-link dropdown-toggle" href="#" onClick={() => {setShowSoftware(!showSoftware)}}>Software</a>
                        {showSoftware &&
                            <div style={dropdownContent} onMouseLeave={() => {setShowSoftware(!showSoftware)}}>
                                <a className="text-light" href="/software/browser">Browser</a> <br/>
                                <a className="text-light" href="/software/email-client">Email client</a> <br/>
                                <a className="text-light" href="/software/os">Operating system</a> <br/>
                                <a className="text-light" href="/software/messaging">Messaging</a> <br/>
                                <a className="text-light" href="/software/office">Office</a> <br/>
                                <a className="text-light" href="/software/password-manager">Password manager</a> <br/>
                            </div>
                        }
                    </div>
                    <div style={dropdown}>
                        <a className="nav-link dropdown-toggle" href="#" onClick={() => {setShowServices(!showServices)}}>Services</a>
                        {showServices &&
                            <div style={dropdownContent} onMouseLeave={() => {setShowServices(!showServices)}}>
                                <a className="text-light" href="/services/vpn">VPN</a> <br/>
                                <a className="text-light" href="/services/dns">DNS</a> <br/>
                                <a className="text-light" href="/services/search">Search</a> <br/>
                            </div>
                        }
                    </div>
                    <li className="nav-item">
                        <a className="nav-link"
                           href="https://www.buymeacoffee.com/techprivacy.net">Donate</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                           href="https://github.com/Dannomac/techprivacy.net">GitHub</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
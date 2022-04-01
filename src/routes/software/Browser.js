import Navbar from "../../components/Navbar";

function Browser() {
    document.title = "Browser | Techprivacy";
    return (
        <>
            <Navbar />
            <h1>Browser</h1>
            <div data-ea-publisher="techprivacy-net" data-ea-type="image"></div>
            <p className="fw-bold anchored">Mozilla Firefox</p>
            <p>Mozilla Firefox is an open source browser developed by the Mozilla Foundation</p>
            <p className="fw-bold anchord">Vivaldi</p>
            <p>Vivaldi is an open source browser based on Chromium</p>
            <p className="fw-bold anchored">Tor browser</p>
            <p>The tor browser is a browser based on Firefox. It routes your traffic through the Tor network</p>
        </>
    );
}

export default Browser;
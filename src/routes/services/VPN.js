import Navbar from "../../components/Navbar";

function VPN() {
    document.title = "VPN | Techprivacy";
    return (
        <>
            <Navbar />
            <h1 className="mt-5">VPN</h1>
            <div data-ea-publisher="techprivacy-net" data-ea-type="image"></div>
            <p className="fw-bold anchored">Mullvad</p>
            <p>Mullvad VPN has many server locations. They don't log anything. Plans start at 5 euros</p>
            <p className="fw-bold anchored">ProtonVPN</p>
            <p>ProtonVPN is a VPN by ProtonMail. It is more expensive then Mullvad but has more locations</p>
        </>
    );
}

export default VPN;
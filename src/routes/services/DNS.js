import Navbar from "../../components/Navbar";

function DNS() {
    document.title = "DNS | Techprivacy";
    return (
        <>
            <Navbar/>
            <h1 className="mt-5">DNS</h1>
            <div data-ea-publisher="techprivacy-net" data-ea-type="image"></div>
            <p className="fw-bold anchored">Quad9</p>
            <p>Quad9 is a non profit DNS provider started by IBM, Global Cyber Alliance and Packet Clearing House</p>
            <p className="fw-bold bg-primary w-25 m-auto">9.9.9.9</p>
            <p className="fw-bold bg-primary w-25 m-auto">149.112.112.112</p>
            <p className="fw-bold mt-4">Cloudflare 1.1.1.1</p>
            <p>Cloudflare 1.1.1.1 is a free DNS service by Cloudflare</p>
            <p className="fw-bold bg-primary w-25 m-auto">1.1.1.1</p>
            <p className="fw-bold bg-primary w-25 m-auto">1.0.0.1</p>
            <p className="fw-bold mt-4">AdGuard DNS</p>
            <p>AdGuard DNS blocks ads. It can be configured not to block ads if you wish</p>
            <p className="fw-bold bg-primary w-25 m-auto">94.140.14.14</p>
            <p className="fw-bold bg-primary w-25 m-auto">94.140.15.15</p>
        </>
    );
}

export default DNS;
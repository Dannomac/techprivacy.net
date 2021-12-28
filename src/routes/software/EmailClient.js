import Navbar from "../../components/Navbar";

function EmailClient() {
    document.title = "Email Client | Techprivacy";
    return (
        <>
            <Navbar/>
            <h1 className="mt-5">Email client</h1>
            <div data-ea-publisher="techprivacy-net" data-ea-type="image"></div>
            <p className="fw-bold anchored">Mozilla Thunderbird</p>
            <p>Thunderbird is a free, open source email client developed by the Mozilla Foundation. It is available on Mac OS, Windows and Linux</p>
            <p className="fw-bold anchored">Apple Mail</p>
            <p>Apple mail is a free email client by Apple. It is included in Mac OS, IOS and Ipad OS</p>
        </>
    );
}

export default EmailClient;
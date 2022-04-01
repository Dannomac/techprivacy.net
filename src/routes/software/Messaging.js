import Navbar from "../../components/Navbar";

function Messaging() {
    document.title = "Messaging | Techprivacy";
    return (
        <>
            <Navbar />
            <h1 className="mt-5">Messaging</h1>
            <div data-ea-publisher="techprivacy-net" data-ea-type="image"></div>
            <p className="fw-bold anchored">Signal</p>
            <p>Signal is a free, open source messaging app for Android and IOS. It supports Messaging, Video chat and calling</p>
            <p className="fw-bold anchored">iMessage</p>
            <p>iMessage is a free messaging app by Apple. It is only available on Apple devices</p>
        </>
    );
}

export default Messaging;
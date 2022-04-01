import Navbar from "../../components/Navbar";

function Office() {
    document.title = "Office | Techprivacy";
    return (
        <>
            <Navbar />
            <h1 className="mt-5">Office</h1>
            <div data-ea-publisher="techprivacy-net" data-ea-type="image"></div>
            <p className="fw-bold anchored">LibreOffice</p>
            <p>LibreOffice is a free, open source office suite. It is based on Apache OpenOffice</p>
            <p className="fw-bold anchored">Open Office</p>
            <p>OpenOffice is a free, open source office suite. It gets far less updated then LibreOffice</p>
        </>
    );
}

export default Office;
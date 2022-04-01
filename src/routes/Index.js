import Navbar from "../components/Navbar";

function Index() {
    document.title = "Home | Techprivacy";
    return (
        <>
            <Navbar />
            <h1 className="mt-5">Techprivacy.net</h1>
            <div data-ea-publisher="techprivacy-net" data-ea-type="image"></div>
            <p>Techprivacy.net helps you find privacy friendly alternatives to common programs and services</p>
        </>
    );
}

export default Index;
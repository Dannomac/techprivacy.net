import Navbar from "../../components/Navbar";

function OS() {
    document.title = "OS | Techprivacy";
    return (
        <>
            <Navbar />
            <h1 className="mt-5">Operating system</h1>
            <div data-ea-publisher="techprivacy-net" data-ea-type="image"></div>
            <p className="fw-bold anchored">Ubuntu</p>
            <p>Ubuntu is a free, open source Linux distro. It is a fork of Debian</p>
            <p className="fw-bold anchored">Debian</p>
            <p>Debian is a free, open source Linux distro. It uses APT for package management</p>
            <p className="fw-bold anchored">Manjaro</p>
            <p>Manjaro is an Arch fork. It supports many desktop environments</p>
        </>
    );
}

export default OS;
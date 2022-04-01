import Navbar from "../../components/Navbar";

function PasswordManager() {
    document.title = "Password Manager | Techprivacy";
    return (
        <>
            <Navbar />
            <h1 className="mt-5">Password Manager</h1>
            <div data-ea-publisher="techprivacy-net" data-ea-type="image"></div>
            <p className="fw-bold anchored">Bitwarden</p>
            <p>Bitwarden is a free, open source password manager. It can be self hosted or cloud hosted. Their cloud hosting uses Microsoft Azure. It supports most browsers</p>
        </>
    );
}

export default PasswordManager;
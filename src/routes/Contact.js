import Navbar from "../components/Navbar";

function Contact() {
    return (
        <>
            <Navbar/>
            <h1 className="mt-5">Contact</h1>
            <div data-ea-publisher="techprivacy-net" data-ea-type="image"></div>
            <p>Email:</p>
            <a className="text-light" href="mailto:techprivacy@mailbox.org">techprivacy@disroot.org</a>
        </>
    );
}

export default Contact;
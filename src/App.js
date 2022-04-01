import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageLoad from "./components/PageLoad";
import loadable from "@loadable/component";
import Helmet from "react-helmet";
const Index = loadable(() => import("./routes/Index"));
const Browser = loadable(() => import("./routes/software/Browser"));
const EmailClient = loadable(() => import("./routes/software/EmailClient"));
const OS = loadable(() => import("./routes/software/OS"));
const Messaging = loadable(() => import("./routes/software/Messaging"));
const Office = loadable(() => import("./routes/software/Office"));
const PasswordManager = loadable(() => import("./routes/software/PasswordManager"));
const VPN = loadable(() => import("./routes/services/VPN"));
const Search = loadable(() => import("./routes/services/Search"));
const DNS = loadable(() => import("./routes/services/DNS"));
const Contact = loadable(() => import("./routes/Contact"));

function App() {
    return (
        <>
            <Helmet>
                <title>Techprivacy</title>
                <link rel="canonical" href="https://techprivacy.net" />
                <link href="/assets/icon.png" rel="icon" />
            </Helmet>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index fallback={<PageLoad />} />} />
                    <Route path="/software/browser" element={<Browser fallback={<PageLoad />} />} />
                    <Route path="/software/email-client" element={<EmailClient fallback={<PageLoad />} />} />
                    <Route path="/software/os" element={<OS fallback={<PageLoad />} />} />
                    <Route path="/software/messaging" element={<Messaging fallback={<PageLoad />} />} />
                    <Route path="/software/office" element={<Office fallback={<PageLoad />} />} />
                    <Route path="/software/password-manager" element={<PasswordManager fallback={<PageLoad />} />} />
                    <Route path="/services/vpn" element={<VPN fallback={<PageLoad />} />} />
                    <Route path="/services/dns" element={<DNS fallback={<PageLoad />} />} />
                    <Route path="/services/search" element={<Search fallback={<PageLoad />} />} />
                    <Route path="/contact" element={<Contact fallback={<PageLoad />} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
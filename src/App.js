import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./routes/Index";
import Browser from "./routes/software/Browser";
import EmailClient from "./routes/software/EmailClient";
import OS from "./routes/software/OS";
import Messaging from "./routes/software/Messaging";
import Office from "./routes/software/Office";
import PasswordManager from "./routes/software/PasswordManager";
import VPN from "./routes/services/VPN";
import DNS from "./routes/services/DNS";
import Search from "./routes/services/Search";
import Contact from "./routes/Contact";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Index/>}/>
                  <Route path="/software/browser" element={<Browser/>}/>
                  <Route path="/software/email-client" element={<EmailClient/>}/>
                  <Route path="/software/os" element={<OS/>}/>
                  <Route path="/software/messaging" element={<Messaging/>}/>
                  <Route path="/software/office" element={<Office/>}/>
                  <Route path="/software/password-manager" element={<PasswordManager/>}/>
                  <Route path="/services/vpn" element={<VPN/>}/>
                  <Route path="/services/dns" element={<DNS/>}/>
                  <Route path="/services/search" element={<Search/>}/>
                  <Route path="/contact" element={<Contact/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
import {useState} from "react";
import {TailSpin} from "react-loader-spinner";
import Navbar from "./Navbar";

function PageLoad() {
    const [hideLoader, setHideLoader] = useState(true);
    setTimeout(() => {
        setHideLoader(false);
    }, 1000);
    return (
        <>
            <Navbar />
            <div hidden={hideLoader} style={{position: "absolute", top: "50%", right: "50%"}}>
                <TailSpin color="gray" />
            </div>
        </>
    );
}

export default PageLoad;
import Navbar from "../../components/Navbar";

function Search() {
    document.title = "Search | Techprivacy";
    return (
        <>
            <Navbar />
            <h1 className="mt-5">Search</h1>
            <div data-ea-publisher="techprivacy-net" data-ea-type="image"></div>
            <p className="fw-bold anchored">DuckDuckGo</p>
            <p>DuckDuckGo is a US based search engine. They use Bing, Yandex and more. They are good for people who live outside of the EU</p>
            <div className="card bg-dark m-auto" style={{width: "18rem"}}>
                <h3 className="card-header bg-success">What they collect:</h3>
                <div className="card-body">
                    <p className="card-text">DuckDuckGo store your search query with no personalized data for legitimate reasons</p>
                </div>
            </div>
            <p className="fw-bold anchored">Qwant</p>
            <p>Qwant is an EU based search engine. Their good for people who live in the EU</p>
            <div className="card bg-dark m-auto" style={{width: "18rem"}}>
                <h3 className="card-header bg-success">What they collect:</h3>
                <div className="card-body">
                    <p className="card-text">Qwant store your search query, hashed IP and query string for 7 days for legitimate reasons</p>
                </div>
            </div>
        </>
    );
}

export default Search;
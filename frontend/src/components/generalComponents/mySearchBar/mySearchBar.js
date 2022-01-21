import "./mySearchBar.css";

const MySearchBar = () => 
{
    return (
        <div className="searchBox">
            <label className="sr-only" htmlFor="srch">search</label>
            <input className="searchInput" id="srch" name="q" placeholder="Αναζήτηση..."></input>
            <button className="searchButton" type="submit">
                <i className="material-icons search-item"> search </i>
            </button>
        </div>
	);
};

export default MySearchBar;

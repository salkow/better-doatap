import "./mySearchBar.css";

const MySearchBar = () => 
{
    return (
        <div className="searchBox">
            <input className="searchInput" type="search" name="q" placeholder="Αναζήτηση..."></input>
            <button className="searchButton" type="submit">
                <i className="material-icons search-item"> search </i>
            </button>
        </div>
	);
};

export default MySearchBar;

import "./mySearchBar.css";

const MySearchBar = () => 
{
    return (
        <div class="searchBox">
            <input class="searchInput" type="search" name="q" placeholder="Αναζήτηση..."></input>
            <button class="searchButton" type="submit">
                <i class="material-icons search-item"> search </i>
            </button>
        </div>
	);
};

export default MySearchBar;

import "./mySearchBar.css";

const MySearchBar = ({}) => 
{
    return (
        <div class="searchBox">
            <button class="searchButton" type="submit">
                <i class="material-icons"> search </i>
            </button>
            <input class="searchInput" type="search" name="q" placeholder="Αναζήτηση..."></input>
        </div>
	);
};

export default MySearchBar;

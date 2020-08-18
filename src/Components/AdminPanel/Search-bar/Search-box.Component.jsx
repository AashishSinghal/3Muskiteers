import React from "react";
import "./Search-box.Style.scss";
import { ReactComponent as SearchIcon } from "../../../Assets/img/svg/search.svg";


function SearchBar() {
  return (
    <div className="search-bar">
      <input className="search-input" type="search" placeholder="Search..." />
      <SearchIcon className="search-svg" />
    </div>
  );
}

export default SearchBar;
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  icon: {
    fontSize: "2.5rem",
  },
});

const Search = () => {
  const classes = useStyles();
  return (
    <div className="search">
      <SearchIcon className={`search__icon ${classes.icon}`} />
      <input className="search__input" type="text" placeholder="Search..." />
    </div>
  );
};

export default Search;

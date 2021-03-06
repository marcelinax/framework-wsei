import React, { FC } from "react";

const NavbarSearch: FC = () => {
  return (
    <div className="search">
      <input placeholder="Search Legalcluster" />
      <img src="media/icons/search.svg" alt="search" className="icon" />
    </div>
  );
};

export default NavbarSearch;

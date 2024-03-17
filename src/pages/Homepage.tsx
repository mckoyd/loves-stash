import React, { useCallback, useState } from "react";
import { useRecoilValue } from "recoil";

import { IStashLink } from "../data/stashLinks";
import { stashLinksState } from "../state/stashLinks";
import { ReactComponent as SearchIcon } from "../assets/searchIcon.svg";
import { ReactComponent as CancelIcon } from "../assets/cancelIcon.svg";

import "../styles/Homepage.css";

const Homepage: React.FC = () => {
  const links = useRecoilValue(stashLinksState);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredLinks, setFilteredLinks] = useState<IStashLink[]>(links);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSearchInput = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setSearchValue(event.currentTarget.value.toLowerCase());
      setShowResults(false);
      setFilteredLinks(links);
    },
    [links]
  );

  const handleSearchIconButton = useCallback(() => {
    let updatedList = filteredLinks;
    if (searchValue === "") {
      updatedList = links;
    } else {
      updatedList = updatedList.filter(({ name }: IStashLink) => {
        return name.toLowerCase().includes(searchValue);
      });
    }
    setFilteredLinks(updatedList);
    setShowResults(true);
  }, [filteredLinks, searchValue, links]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.code === "Enter") {
        handleSearchIconButton();
      }
    },
    [handleSearchIconButton]
  );

  const handleCancelIconButton = useCallback(() => {
    setFilteredLinks(links);
    setSearchValue("");
    setShowResults(false);
  }, [links]);

  return (
    <section className="homepage">
      <div className="warning-msg-container">
        <p className="warning-msg">
          What makes Love's Stash different? All these codes{" "}
          <span className="emphasized">stack</span>. Which means if you use one
          code, that code will likely keep working on other products (without
          needing to type in the code again). All codes are subject to a
          deadline specific to each code. Codes will be reset regularly (usually
          on Fridays). Please note there is limited availability per item{" "}
          <span className="emphasized">so act fast</span>.
        </p>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          onChange={handleSearchInput}
          value={searchValue}
          placeholder="SEARCH"
          onKeyDown={handleKeyDown}
        />
        <SearchIcon className="input-icon" onClick={handleSearchIconButton} />

        <CancelIcon className="input-icon" onClick={handleCancelIconButton} />
      </div>
      {showResults && (
        <h2 className="search-results-title">
          Search Results for:{" "}
          <span className="search-value">"{searchValue}"</span>
        </h2>
      )}
      <div className="links">
        {filteredLinks.map(({ name, link, code, imageLink }: IStashLink) => {
          return (
            <div key={link} className="link-container">
              <img src={imageLink} className="link-img" alt={name} />
              <div className="link-details">
                <a href={link} className="link-name">
                  {name}
                </a>
                <p className="link-code">Code: {code}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Homepage;

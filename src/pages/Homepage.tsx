import React from "react";
import { IStashLink } from "../data/stashLinks";

import { useRecoilValue } from "recoil";
import { stashLinksState } from "../state/stashLinks";

import "../styles/Homepage.css";

const Homepage: React.FC = () => {
  const links = useRecoilValue(stashLinksState);

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
      <div className="links">
        {links.map(({ name, link, code, imageLink }: IStashLink) => {
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

import React from "react";

const testString = `Ea hoodie ullamco, knausgaard ugh farm-to-table ut ethical distillery 90's post-ironic voluptate typewriter mixtape. Id in ex irony. Kombucha try-hard hot chicken, fingerstache ethical lumbersexual iPhone tempor dolore mollit mixtape poutine ex air plant gentrify.”
- Unknown Colleague`;

const Information = () => {
  return <div className="accolade">{testString}</div>;
};

const Accolade = () => {
  return (
    <div className="accolades">
      <Information />
    </div>
  );
};

export default Accolade;

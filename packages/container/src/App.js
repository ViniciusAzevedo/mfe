import React from "react";
import MarketingApp from "../components/MarketingApp";

// mount is not a React componente because it is a project`s requirement
// of not making assumptions of a specific framework is used by a remote MF
// mount should be a pure js function
// if we ever decide to swap technologies, both sides are free to do it!

export default () => {
  return (
    <div>
      <h1>Hi there, this is App talking!!</h1>
      <hr></hr>
      <MarketingApp />
    </div>
  );
};

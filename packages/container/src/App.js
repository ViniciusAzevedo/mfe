import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import MarketingApp from "../components/MarketingApp";
import Header from "../components/Header";

// mount is not a React componente because it is a project`s requirement
// of not making assumptions of a specific framework is used by a remote MF
// mount should be a pure js function
// if we ever decide to swap technologies, both sides are free to do it!

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

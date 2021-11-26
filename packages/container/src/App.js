import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "../components/Header";
import Progress from "../components/Progress";

const MarketingLazy = lazy(() => import("../components/MarketingApp"));
const AuthLazy = lazy(() => import("../components/AuthApp"));
// mount is not a React componente because it is a project`s requirement
// of not making assumptions of a specific framework is used by a remote MF
// mount should be a pure js function
// if we ever decide to swap technologies, both sides are free to do it!

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)}></AuthLazy>
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

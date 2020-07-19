import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/Home";
import { Footer } from "./components/atoms/Footer";
import { Kapitel1 } from "./components/pages/Kapitel1";
import { AnimatePresence } from "framer-motion";
import { StoreProvider } from "./helper/store";
import { UnlockChapter1 } from "./components/pages/UnlockChapter1";
import { HomeDev } from "./components/pages/HomeDev";
import { UnlockRiddle2_4 } from "./components/pages/UnlockRiddle2_4";
import { Kapitel2 } from "./components/pages/Kapitel2";

function App() {
  return (
    <>
      <HashRouter>
        <StoreProvider>
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/kapitel1" component={Kapitel1} />
                  <Route exact path="/kapitel2" component={Kapitel2} />
                  <Route exact path="/dev" component={HomeDev} />
                  <Route
                    exact
                    path="/abschlusskapitel1"
                    component={UnlockChapter1}
                  />
                  <Route
                    exact
                    path="/abschlusskapitel2"
                    component={UnlockRiddle2_4}
                  />
                  <Route default component={Home} />
                </Switch>
              </AnimatePresence>
            )}
          />
        </StoreProvider>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;

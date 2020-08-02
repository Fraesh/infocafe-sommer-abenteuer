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
import { Kapitel2 } from "./components/pages/Kapitel2";
import { Kapitel3 } from "./components/pages/Kapitel3";
import { Kapitel4 } from "./components/pages/Kapitel4";
import { UnlockRiddle } from "./components/pages/UnlockRiddle";
import { UnlockRiddle4_9 } from "./components/pages/UnlockRiddle4_9";

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
                  <Route exact path="/kapitel3" component={Kapitel3} />
                  <Route exact path="/kapitel4" component={Kapitel4} />
                  <Route exact path="/siegel/:id" component={UnlockRiddle4_9} />
                  <Route
                    exact
                    path="/kapitel-4-bansa"
                    render={() => (
                      <UnlockRiddle chapter={4} riddle={8}>
                        <Kapitel4 />
                      </UnlockRiddle>
                    )}
                  />
                  <Route
                    exact
                    path="/abschlusskapitel2"
                    render={() => (
                      <UnlockRiddle chapter={2} riddle={4}>
                        <Kapitel2 />
                      </UnlockRiddle>
                    )}
                  />
                  <Route exact path="/dev" component={HomeDev} />
                  <Route
                    exact
                    path="/abschlusskapitel1"
                    component={UnlockChapter1}
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

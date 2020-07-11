import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/Home";
import { Footer } from "./components/atoms/Footer";
import { Kapitel1 } from "./components/pages/Kapitel1";
import { AnimatePresence } from "framer-motion";
import { StoreProvider } from "./helper/store";

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

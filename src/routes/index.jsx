import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { RegisterClient } from "../pages/RegisterClient";
import { RegisterMaintence } from "../pages/RegisterMaintence";
import { RegisterObject } from "../pages/RegisterObject";
import { RegisterObjectType } from "../pages/RegisterObjectType";
import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/client">
          <RegisterClient />
        </Route>
        <Route path="/object_type">
          <RegisterObjectType />
        </Route>
        <Route path="/objects">
          <RegisterObject />
        </Route>
        <Route path="/maintence">
          <RegisterMaintence />
        </Route>
      </Switch>
    </>
  );
};

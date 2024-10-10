import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Router } from "./router/Router";
export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <br />
      <Link to="/page1">Page1</Link>
      <br />
      <Link to="/page2">Page2</Link>
      <Router />
    </BrowserRouter>
  );
}

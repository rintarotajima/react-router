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

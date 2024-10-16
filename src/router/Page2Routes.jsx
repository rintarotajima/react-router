import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />,
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />,
  },
];

import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import ShopContextProvider from "./Context/ShopContext.jsx";

render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>,
  document.getElementById("app")
);

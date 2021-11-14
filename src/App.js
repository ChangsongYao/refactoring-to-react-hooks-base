import React, { useContext, createContext } from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
// import DataFetchingContainer from "./features/Playground/DataFetchingContainer";
import { sales } from "./mocks";


if (process.env.NODE_ENV === "development") {
  console.log("development")
  const { Server } = require("miragejs");
  const { sales, subscriptions } = require("./mocks");
  new Server({
    routes() {
      this.namespace = process.env.REACT_APP_BASE_URL;
      this.get("sales/", () => sales);
      this.get("subscription/", () => subscriptions);
    }
  })
}



const initialState = {
  loading: false,
  error: "",
  data: sales,
  salesTotal: 3466,
  subscriptionsTotal: 1492,
};

export const GlobalContext = createContext()
const App = () => {
  return (
    <GlobalContext.Provider value={initialState}>
      <DashboardShell />
    </GlobalContext.Provider>
  );
};

export default App;

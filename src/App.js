import React, { useContext, createContext } from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import DataFetchingContainer from "./features/Playground/DataFetchingContainer";
import { sales } from "./mocks";

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

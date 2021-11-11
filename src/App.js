import React, { useContext, createContext } from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import DataFetchingContainer from "./features/Playground/DataFetchingContainer";

const initialState = {
  loading: false,
  error: "",
  data: [],
  salesTotal: 0,
  subscriptionsTotal: 0,
};

export const AppContext = createContext()
const App = () => {
  return (
    <AppContext.Provider value={initialState}>
      <DashboardShell />
    </AppContext.Provider>
  );
  // return <DataFetchingContainer />
};

export default App;

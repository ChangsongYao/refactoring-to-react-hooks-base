import React, { useState } from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import Select from "./common/components/Select";

const App = () => {
  // return <DashboardShell />;
  return <Select options={["Sales", "Subscriptions"]} />;
};

export default App;

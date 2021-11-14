import React, { Component, useState } from "react";
import Aside from "../../common/components/Aside";
import ChartContainer from "./ChartContainer";
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main";
import SummaryContainer from "./SummaryContainer";
import Select from "../../common/components/Select";
import DataFetching from "../../common/components/DataFetching";

function DashboardShell() {
  const [selectedEndpoint, setSelectedEndpoint] = useState("");
  const [selectedLabel, setsSlectedLabel] = useState("--");
  const optionsForSelect = [
    { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
    { label: "Subscription", value: `${process.env.REACT_APP_BASE_URL}/subscription/` }
  ];

  function handleSelect(event) {
    setsSlectedLabel(event.target.selectedOptions[0].label);
    setSelectedEndpoint(event.target.value);
  }

  return (
    <Layout>
      <Aside>
        <h2># Polly dashboard</h2>
        <Select
          handleChange={handleSelect}
          label="Please, select a chart"
          id="select-chart"
          options={optionsForSelect}
        />
        {selectedEndpoint ? <DataFetching endPoint={selectedEndpoint} /> : null}
      </Aside>
      <Main>
        <h1>
          Welcome, <span className="bold">learner!</span>
        </h1>
        <SummaryContainer />
        <ChartContainer selectedLabel={selectedLabel} />
      </Main>
    </Layout>
  );
}


export default DashboardShell;

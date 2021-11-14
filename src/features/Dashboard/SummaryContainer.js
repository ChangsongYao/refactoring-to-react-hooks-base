import React, { useContext } from "react";
import { GlobalContext } from '../../App.js';

export default function SummaryContainer() {


  const { salesTotal, subscriptionsTotal } = useContext(GlobalContext);

  return (
    <div className="summary flex flex-row">
      <div className="card bg-indigo">
        <p>CellFast sales</p>
        <p>$ {salesTotal}</p>
      </div>
      <div className="card bg-blue">
        <p>CellNow subscriptions</p>
        <p>$ {subscriptionsTotal}</p>
      </div>
    </div>
  );
};

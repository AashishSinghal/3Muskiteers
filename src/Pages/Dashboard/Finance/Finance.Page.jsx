import React from "react";
import "./Finance.Style.scss";
import { Route, Switch } from "react-router-dom";
import { CardList } from "../../../Components/AdminPanel/Card-list/Card-list.Component";
import { ReactComponent as SalesIcon } from "../../../Assets/img/svg/sales.svg";
import { ReactComponent as ExpensesIcon } from "../../../Assets/img/svg/expenses.svg";
import { ReactComponent as PaymentsIcon } from "../../../Assets/img/svg/payments.svg";
import { ReactComponent as ReceiptIcon } from "../../../Assets/img/svg/receipt.svg";
import { ReactComponent as CommissionIcon } from "../../../Assets/img/svg/commission.svg";
import { ReactComponent as ProjectionIcon } from "../../../Assets/img/svg/projection.svg";
import Sales from "./Sales/Sales.Page";

class Finance extends React.Component {
  constructor() {
    super();
    this.state = {
      OptionsA: [
        {
          id: 1,
          notifiCount: 120,
          name: "Sales",
          svg: <SalesIcon className="sales opt-svg-class" />,
          linkUrl: "/dashboard/finance/sales",
        },
        {
          id: 2,
          notifiCount: 121,
          name: "Expenses",
          svg: <ExpensesIcon className="expenses opt-svg-class" />,
          linkUrl: "/dashboard/finance/expenses",
        },
        {
          id: 3,
          notifiCount: 122,
          name: "Payments",
          svg: <PaymentsIcon className="payments opt-svg-class" />,
          linkUrl: "/dashboard/finance/payments",
        },
        {
          id: 4,
          notifiCount: 123,
          name: "Receipt",
          svg: <ReceiptIcon className="Receipt opt-svg-class" />,
          linkUrl: "/dashboard/finance/receipt",
        },
        {
          id: 5,
          notifiCount: "none",
          name: "Commission",
          svg: <CommissionIcon className="commission opt-svg-class" />,
          linkUrl: "/dashboard/finance/commission",
        },
        {
          id: 6,
          notifiCount: "none",
          name: "Projection",
          svg: <ProjectionIcon className="projection opt-svg-class" />,
          linkUrl: "/dashboard/finance/projection",
        },
      ],
    };
  }

  render() {
    return (
      <div className="finance">
        <Switch>
          <Route exact path="/dashboard/finance">
            <CardList OptionsA={this.state.OptionsA} />
          </Route>
          <Route exact path="/dashboard/finance/sales">
            <Sales />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Finance;

import React from "react";
import { withRouter } from "react-router-dom";

import Button from "../../UI/Button/Button";
import Burger from "../../Burger/Burger";

import styles from "./CheckoutSummary.module.css";

const checkoutSummary = props => {
  console.log(props);
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope this tastes Well!</h1>
      <div className={styles.Burger}>
        <Burger ingredients={props.ingredients} />
      </div>

      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default withRouter(checkoutSummary);
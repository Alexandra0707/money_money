import React from "react";
import { useSelector } from "react-redux";
import styles from "./Balance.module.css";
import { selectUserBalance } from "@redux/auth/selectors";
import { prettyBalanceFormat } from "helpers/prettyBalanceFormat";
import { selectIncomeSummaryByPeriod } from "@redux/statistics/selectors";
import { selectExpenseSummaryByPeriod } from "@redux/statistics/selectors";
import { selectBalance } from "@redux/transactions/selectors";

const Balance = () => {
  const totalBalance = useSelector(selectBalance);
  const income = useSelector(selectIncomeSummaryByPeriod);
  const expense = useSelector(selectExpenseSummaryByPeriod);
  const Balance = prettyBalanceFormat(income - expense);

  return (
    <div className={styles.balanceWrapper}>
      <p className={styles.balanceText}>Your balance</p>
      <p className={styles.balanceAmount}>₴ {totalBalance || "0.00"}</p>
    </div>
  );
};

export default Balance;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./StatisticsTable.module.css";
import { getCategories } from "@redux/categories/operations";
import { selectIsLoggedIn } from "@redux/auth/selectors";

const formatNumber = (number) => {
  return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const StatisticsTable = ({
  summary,
  categories,
  incomeSummaryByPeriod,
  expensesSummaryByPeriod,
}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCategories());
    }
  }, [dispatch, isLoggedIn]);

  const getCategoryName = (id) => {
    return categories.find((cat) => cat.id === id)?.name || "Unknown";
  };

  const getCategoryColor = (index) => {
    const colors = [
      "#FED057",
      "#FFD8D0",
      "#FD9498",
      "#C5BAFF",
      "#6E78E8",
      "#4A56E2",
      "#81E1FF",
      "#24CCA7",
      "#00AD84",
    ];
    return colors[index % colors.length];
  };

  const expenseItems = summary.filter((item) => item.type === "EXPENSE");

  return (
    <div className={css.wrapper}>
      <div className={css.headerRow}>
        <span>Category</span>
        <span>Sum</span>
      </div>
      <table className={css.table}>
        <tbody>
          {expenseItems.map((item, index) => (
            <tr key={item.categoryId} className={css.row}>
              <td className={css.dotCell}>
                <span
                  className={css.dot}
                  style={{ backgroundColor: getCategoryColor(index) }}
                />
              </td>
              <td className={css.name}>{getCategoryName(item.categoryId)}</td>
              <td className={css.amount}>{formatNumber(item.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={css.summaryRow}>
        <span className={css.label}>Expenses:</span>
        <span className={css.value}>
          {formatNumber(expensesSummaryByPeriod)}
        </span>
      </div>
      <div className={css.summaryRow}>
        <span className={css.label}>Income:</span>
        <span className={css.income}>
          {formatNumber(incomeSummaryByPeriod)}
        </span>
      </div>
    </div>
  );
};

export default StatisticsTable;

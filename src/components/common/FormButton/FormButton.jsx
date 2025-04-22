import { NavLink } from "react-router-dom";
import css from "./FormButton.module.css";

const FormButton = ({ isLink, to, type = "button", children }) => {
  if (isLink) {
    return (
      <NavLink to={to} className={css.linkBtn}>
        {children}
      </NavLink>
    );
  }

  return (
    <button type={type} className={css.submitBtn}>
      {children}
    </button>
  );
};

export default FormButton;

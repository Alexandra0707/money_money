import { logIn } from "../../redux/auth/operations.js";
import { useDispatch } from "react-redux";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormButton from "../common/FormButton/FormButton";

import "react-toastify/dist/ReactToastify.css";

import sprite from "../../images/icons/sprite.svg";

import css from "./LoginForm.module.css";

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at most 12 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
          <div className={css.logoBlock}>
            <svg className={css.logo} width="36" height="36">
              <use href={`${sprite}#logo`} />
            </svg>
            <h2 className={css.logoText}>MoneyGuard</h2>
          </div>

          <label className={css.inputGroup}>
            <svg className={css.icon} width="24" height="24">
              <use href={`${sprite}#mail`} />
            </svg>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={css.input}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>

          <label className={css.inputGroup}>
            <svg className={css.icon} width="24" height="24">
              <use href={`${sprite}#lock`} />
            </svg>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={css.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </label>

          <FormButton type="submit">Log in</FormButton>
          <FormButton isLink to="/register">
            Register
          </FormButton>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;

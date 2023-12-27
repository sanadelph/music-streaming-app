import React from "react";
import { useFormik, Formik, Field } from "formik";
import styles from "./Form.module.css";
import Card from "../UI/Card";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Link from "next/link";

function UserForm({ mode }) {
  const altContent = () => {
    if (mode === "signup")
      return (
        <p className={styles["form__alt--text"]}>
          Already have an account?{" "}
          <Link className={styles["form__alt--link"]} href="/login?mode=login">
            Login
          </Link>
        </p>
      );
    else
      return (
        <p className={styles["form__alt--text"]}>
          Create a new account
          <Link className={styles["form__alt--link"]} href="/login?mode=signup">
            {" "}
            Signup
          </Link>
        </p>
      );
  };
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be at least 6 characters";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",

      lastName: "",

      email: "",

      password: "",
    },
    onSubmit: (values) => console.log(values),
    validate,
  });
  return (
    <section className={styles["form__section"]}>
      <h1 className={styles["form__header"]}>{`${
        mode === "signup" ? "Get started" : ""
      }`}</h1>
      <Card>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          {mode === "signup" && (
            <React.Fragment>
              <div className={styles.nowrap}>
                <label className={styles["form__label"]} htmlFor="firstName">
                  First Name
                </label>
                {formik.touched.firstName && formik.errors.firstName ? (
                  <AiOutlineExclamationCircle
                    title={formik.errors.firstName}
                    className={styles["input--error"]}
                  ></AiOutlineExclamationCircle>
                ) : null}
              </div>

              <input
                className={styles["form__input"]}
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              <div className={styles.nowrap}>
                <label className={styles["form__label"]} htmlFor="lastName">
                  Last Name
                </label>
                {formik.touched.lastName && formik.errors.lastName ? (
                  <AiOutlineExclamationCircle
                    title={formik.errors.lastName}
                    className={styles["input--error"]}
                  ></AiOutlineExclamationCircle>
                ) : null}
              </div>

              <input
                className={styles["form__input"]}
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
            </React.Fragment>
          )}
          <div className={styles.nowrap}>
            <label className={styles["form__label"]} htmlFor="email">
              Email Address
            </label>
            {formik.touched.email && formik.errors.email ? (
              <AiOutlineExclamationCircle
                title={formik.errors.email}
                className={styles["input--error"]}
              ></AiOutlineExclamationCircle>
            ) : null}
          </div>

          <input
            className={styles["form__input"]}
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          <div className={styles.nowrap}>
            <label className={styles["form__label"]} htmlFor="password">
              Password
            </label>
            {formik.touched.password && formik.errors.password ? (
              <AiOutlineExclamationCircle
                title={formik.errors.password}
                className={styles["input--error"]}
              ></AiOutlineExclamationCircle>
            ) : null}
          </div>

          <input
            className={styles["form__input"]}
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          <button className={styles["form__button"]} type="submit">
            {mode === "signup" ? "Sign Up" : "Login"}
          </button>
          {altContent()}
        </form>
      </Card>
    </section>
  );
}

export default UserForm;

import React from 'react';
import './styles.scss';

type Props = {};
const backgroundUrl = 'https://colorlib.com/etc/lf/Login_v15/images/bg-01.jpg';
const LoginForm = (props: Props) => {
  return (
    <div className="login-form__wrapper">
      <div className="login-form__title">
        <div className="login-form__title--text">SIGN IN</div>
        <div
          className="login-form__background"
          style={{ backgroundImage: `url(${backgroundUrl})` }}
        />
      </div>
      <form action="" className="login-form__container">
        <div
          className="login-form__container--field-container"
          data-validate="Username is required"
        >
          <span className="login-form__container--field-label">Username</span>
          <input
            className="login-form__container--field-input"
            type="text"
            name="username"
            placeholder="Enter username"
          />
        </div>
        <div
          className="login-form__container--field-container"
          data-validate="Password is required"
        >
          <span className="login-form__container--field-label">Password</span>
          <input
            className="login-form__container--field-input"
            type="text"
            name="password"
            placeholder="Enter password"
          />
        </div>
        <div>
          <div className="login-form__container--field-container remember-me">
            <div>
              <input
                className="login-form__container--field-checkbox"
                id="ckb1"
                type="checkbox"
                name="remember-me"
              />
              <label
                className="login-form__container--field-checkbox-label"
                htmlFor="ckb1"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              target="_blank"
              className="login-form__container--field-forgot-pass"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div>
          <button className="login-form__btn-login" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

import React from 'react';
import './styles.scss';
type Props = {};

const Form = (props: Props) => {
  return (
    <div className="form">
      <div className="form-logo">
        <span className="fa fa-html5"></span>
      </div>
      <form action="#" method="post">
        <div className="field-group">
          <span className="fa fa-user" aria-hidden="true"></span>
          <div className="wthree-field">
            <input
              name="text1"
              id="text1"
              type="text"
              placeholder="Username"
              required
            />
          </div>
        </div>
        <div className="field-group">
          <span className="fa fa-lock" aria-hidden="true"></span>
          <div className="wthree-field">
            <input
              name="password"
              id="myInput"
              type="Password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="wthree-field">
          <button type="submit" className="btn">
            Get Started
          </button>
        </div>
        <ul className="list-login">
          <li className="switch-agileits">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              Keep Logged in
            </label>
          </li>
          <li>
            <a href="#" className="text-right">
              Forgot password?
            </a>
          </li>
          <li className="clearfix"></li>
        </ul>
        <ul className="list-login-bottom">
          <li className="">
            <a href="#" className="">
              Create Account
            </a>
          </li>
          <li className="">
            <a href="#" className="text-right">
              Need Help?
            </a>
          </li>
          <li className="clearfix"></li>
        </ul>
      </form>
    </div>
  );
};

export default Form;

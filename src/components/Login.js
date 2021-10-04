import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="login-body">
      <div className="main-content-box">
        <img src="images/cta-logo-one.svg" alt="brands_logo" />
        <button className="button_action">
          Get All These for $12.99/month
        </button>
        <p className="desc">
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </p>
        <img src="images/cta-logo-two.png" className="bottom_img" />
      </div>
    </div>
  );
};

export default Login;

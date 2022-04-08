import React from "react";
// import logo from "../../../images/Banner&Background/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5 footer">
      <div>
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="first-cart">
              <h4 className="mt-5">About Us</h4>
              <p>RSG Group</p>
              <p>values</p>
              <p>story</p>
              <p>partner</p>
            </div>
          </div>
          <div className="col-md-3">
            
          </div>
          <div className="col-md-3">
           
          </div>
          <div className="col-md-3">
            <div className="fourth-part">
              <h1>Contact Us</h1>
              <small className="mt-5">Office: 12 Fake Street, Berlin</small>
              <br />
              <small className="mt-3">Phone: (49) 8827 633354</small>
              <br />
              <small className="mt-3">Fax: 08) 08 4752 1499</small>
              <br />
              <small className="mt-3">Mail: support.goaltheme.com</small>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <small>© 2021 Eat And Order. All rights reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;

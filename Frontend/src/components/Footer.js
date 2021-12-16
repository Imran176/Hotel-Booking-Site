import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
            <div className="col">
              <h3>CONTACT INFO</h3>
              <h4><PhoneIcon />342-420-6969</h4>
              <h4><LocationOnIcon/>123 Streeet Model Town, Lahore</h4>
              <h4><ContactSupportIcon/>support@psl.com</h4>
            </div>

          {/* Column2 */}
            <div className="col">
              <h3>Teams</h3>
                <h4>Karachi Kings    | Multan Sultans</h4> <h4></h4>
                <h4>Peshawar Zalmi   | Lahore Qalanders</h4> 
                <h4>Islamabad United | Quetta Gladiators</h4>

            </div>

          {/* Column3 */}
          <div className="col">
              <h3>CONNECT WITH US</h3>
              <ui className="list-unstyled">
                <li><FacebookIcon  /></li>
                <li><TwitterIcon /></li>
                <li><InstagramIcon /></li>
              </ui>
            </div>
          
          {/* Column4 */}
          <div className="col">
              <h3>ABOUT US</h3>
              <ui className="list-unstyled">
                <p>The Pakistan Super League is a professional Twenty20 cricket league contested during February and March of every year by six teams representing six cities in Pakistan. The league was founded on 9 September 2015 with five teams by the Pakistan Cricket Board.. </p>
              </ui>
            </div>  
          
        </div>
        <hr />
        <div className="row-end">
          <p className="center">
            &copy;{new Date().getFullYear()} PSL | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
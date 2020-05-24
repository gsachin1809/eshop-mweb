// Imports
import React from 'react'
import {
  Link
} from "react-router-dom";

export class FooterComponent extends React.Component {

    render() {
      return (<footer>
                <div className="footer-nav-wrapper">
                  <Link to="/" className="footer-nav-single">
                    <div className="menu-wrapper">
                      <img src="assets/img/icons/home.svg" className="injectable" alt="" />
                      <span>Home</span>
                    </div>
                  </Link>
                  <Link to="/chat" className="footer-nav-single">
                    <div className="menu-wrapper">
                      <img src="assets/img/icons/chat.svg" className="injectable" alt="" />
                      <span>Chat</span>
                    </div>
                  </Link>
                  <Link to="/cart" className="footer-nav-single">
                    <div className="menu-wrapper">
                      <img src="assets/img/icons/cart.svg" className="injectable" alt="" />
                      <span>Cart</span>
                    </div>
                  </Link>
                  <Link to="/my-profile" className="footer-nav-single">
                    <div className="menu-wrapper">
                      <img src="assets/img/icons/profile.svg" className="injectable" alt="" />
                      <span>Profile</span>
                    </div>
                  </Link>
                </div>
              </footer>)
    }


}

// Imports
import React,{ PureComponent } from 'react'


export class FooterComponent extends React.Component {

    render() {
      return (<footer>
                <div className="footer-nav-wrapper">
                  <a href="index.html" className="footer-nav-single">
                    <div className="menu-wrapper">
                      <img src="assets/img/icons/home.svg" className="injectable" alt="" />
                      <span>Home</span>
                    </div>
                  </a>
                  <a href="chat.html" className="footer-nav-single">
                    <div className="menu-wrapper">
                      <img src="assets/img/icons/chat.svg" className="injectable" alt="" />
                      <span>Chat</span>
                    </div>
                  </a>
                  <a href="cart.html" className="footer-nav-single">
                    <div className="menu-wrapper">
                      <img src="assets/img/icons/cart.svg" className="injectable" alt="" />
                      <span>Cart</span>
                    </div>
                  </a>
                  <a href="profile.html" className="footer-nav-single">
                    <div className="menu-wrapper">
                      <img src="assets/img/icons/profile.svg" className="injectable" alt="" />
                      <span>Profile</span>
                    </div>
                  </a>
                </div>
              </footer>)
    }


}

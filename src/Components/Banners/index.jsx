// Imports
import React,{ PureComponent } from 'react'


export class BannerComponent extends React.Component {

    render() {
      return (<div className="offcanvas-menu" id="offcanvas-menu">
                <div className="profile-card text-center">
                  <div className="profile-card__image space-mb--10">
                    <img src="assets/img/profile.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="profile-card__content">
                    <p className="name">Don Normane <span className="id">ID MD 4350</span></p>
                  </div>
                </div>
                <div className="offcanvas-navigation-wrapper space-mt--40">
                  <ul className="offcanvas-navigation">
                    <li><span className="icon"><img src="assets/img/icons/profile.svg" className="injectable" alt="" /></span><a href="login.html">Login / Sign up</a></li>
                    <li><span className="icon"><img src="assets/img/icons/profile-two.svg" className="injectable" alt="" /></span><a href="profile.html">My Profile</a></li>
                    <li><span className="icon"><img src="assets/img/icons/notification.svg" className="injectable" alt="" /></span><a href="notification.html">Notification</a></li>
                    <li><span className="icon"><img src="assets/img/icons/product.svg" className="injectable" alt="" /></span><a href="shop.html">All products</a></li>
                    <li><span className="icon"><img src="assets/img/icons/cart-two.svg" className="injectable" alt="" /></span><a href="order.html">My Order</a></li>
                    <li><span className="icon"><img src="assets/img/icons/cart-three.svg" className="injectable" alt="" /></span><a href="cart.html">Cart</a></li>
                    <li><span className="icon"><img src="assets/img/icons/wishlist.svg" className="injectable" alt="" /></span><a href="wishlist.html">Wishlist</a></li>
                    <li><span className="icon"><img src="assets/img/icons/gear-two.svg" className="injectable" alt="" /></span><a href="edit-profile.html">Settings</a></li>
                    <li><span className="icon"><img src="assets/img/icons/profile.svg" className="injectable" alt="" /></span><a href="contact.html">Contact Us</a></li>
                  </ul>
                </div>
              </div>)
    }


}

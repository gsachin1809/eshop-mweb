// Imports
import React from 'react'
import {
  Link
} from "react-router-dom";

export class CheckoutComponent extends React.Component {

    render() {
      return (<div className="checkout-body space-mt--30">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="checkout-form">
                          <div>
                            <div className="checkout-form__single-field space-mb--30">
                              <label htmlFor="fullName">Full Name</label>
                              <input type="text" name="fullName" id="fullName" placeholder="Enter Full Name" />
                            </div>
                            <div className="checkout-form__single-field space-mb--30">
                              <label htmlFor="userName">User Name</label>
                              <input type="text" name="userName" id="userName" placeholder="Enter User Name" />
                            </div>
                            <div className="checkout-form__single-field space-mb--30">
                              <label htmlFor="phoneNo">Phone</label>
                              <input type="text" name="phoneNo" id="phoneNo" placeholder="Enter Phone Number" />
                            </div>
                            <div className="checkout-form__single-field space-mb--30">
                              <label htmlFor="emailAddress">Email Address</label>
                              <input type="text" name="emailAddress" id="emailAddress" placeholder="Enter Email Address" />
                            </div>
                            <div className="checkout-form__single-field space-mb--30">
                              <label htmlFor="shippingAddress">Shipping Address</label>
                              <textarea name="shippingAddress" id="shippingAddress" cols="30" rows="5" placeholder="Enter Shipping Address"></textarea>
                            </div>
                            <div className="checkout-form__single-field space-mb--30">
                              <label htmlFor="orderNotes">Order Notes</label>
                              <textarea name="orderNotes" id="orderNotes" cols="30" rows="5" placeholder="Enter Order Notes"></textarea>
                            </div>
                            <div className="your-order-area space-mb--30">
                              <h3>Your order</h3>
                              <div className="your-order-wrap gray-bg-4">
                                <div className="your-order-product-info">
                                  <div className="your-order-top">
                                    <ul>
                                      <li>Product</li>
                                      <li>Total</li>
                                    </ul>
                                  </div>
                                  <div className="your-order-middle">
                                    <ul>
                                      <li><span className="order-middle-left">Product Name X 1</span> <span className="order-price">$329 </span></li>
                                      <li><span className="order-middle-left">Product Name X 1</span> <span className="order-price">$329 </span></li>
                                    </ul>
                                  </div>
                                  <div className="your-order-bottom">
                                    <ul>
                                      <li className="your-order-shipping">Shipping</li>
                                      <li>Free shipping</li>
                                    </ul>
                                  </div>
                                  <div className="your-order-total">
                                    <ul>
                                      <li className="order-total">Total</li>
                                      <li>$329</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button className="checkout-form__button"><Link to="/order-confirm" >Place Order</Link></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)
    }
}

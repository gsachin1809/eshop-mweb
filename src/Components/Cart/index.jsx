// Imports
import React from 'react'
import {
  Link
} from "react-router-dom";

export class CartComponent extends React.Component {

    renderCartItems = () => {
      return (<div className="cart-product-area">
                  <div className="cart-product border-bottom--medium">
                    <div className="cart-product__image">
                      <a href="shop-product.html">
                        <img src="assets/img/products/product1.png" className="img-fluid" alt="" />
                      </a>
                    </div>
                    <div className="cart-product__content">
                      <h3 className="title"><a href="shop-product.html">Leather Bag</a></h3>
                      <span className="category">Bag</span>
                      <div className="price">
                        <span className="main-price">$460</span>
                        <span className="discounted-price">$320</span>
                      </div>
                    </div>
                    <div className="cart-product__counter">
                      <div className="cart-plus-minus">
                        <input className="cart-plus-minus-box" type="text" name="qtybutton" disabled value="1" />
                      </div>
                    </div>
                  </div>
                  <div className="cart-product border-bottom--medium">
                    <div className="cart-product__image">
                      <a href="shop-product.html">
                        <img src="assets/img/products/product2.png" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="cart-product__content">
                      <h3 className="title"><a href="shop-product.html">Lipstick</a></h3>
                      <span className="category">Cosmetics</span>
                      <div className="price">
                        <span className="main-price">$4</span>
                        <span className="discounted-price">$3</span>
                      </div>
                    </div>
                    <div className="cart-product__counter">
                      <div className="cart-plus-minus">
                        <input className="cart-plus-minus-box" type="text" name="qtybutton" disabled value="1" />
                      </div>
                    </div>
                  </div>
                  <div className="cart-product border-bottom--medium">
                    <div className="cart-product__image">
                      <a href="shop-product.html">
                        <img src="assets/img/products/product3.png" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="cart-product__content">
                      <h3 className="title"><a href="shop-product.html">Sports shoe</a></h3>
                      <span className="category">Show</span>
                      <div className="price">
                        <span className="main-price">$60</span>
                        <span className="discounted-price">$20</span>
                      </div>
                    </div>
                    <div className="cart-product__counter">
                      <div className="cart-plus-minus">
                        <input className="cart-plus-minus-box" type="text" name="qtybutton" disabled value="1" />
                      </div>
                    </div>
                  </div>
                </div>)
    }

    renderDiscountCoupon = () =>{
      return (<div className="discount-code-wrapper space-mt--20">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title">Use Coupon Code</h4>
                      </div>
                      <div className="discount-code">
                        <p>Enter your coupon code if you have one.</p>
                        <form>
                          <input type="text" required="" name="name" />
                          <button className="cart-btn-2" type="submit">Apply Coupon</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
    }


    renderCartTotal = () => {
      return (<div className="grand-total space-mt--20">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title">Cart Total</h4>
                      </div>
                      <h5>Total products <span>$260.00</span></h5>
                      <div className="total-shipping">
                        <h5>Total shipping</h5>
                        <ul>
                          <li><input type="radio" name="shippingInput" /> Standard <span>$20.00</span></li>
                          <li><input type="radio" name="shippingInput"/> Express <span>$30.00</span></li>
                        </ul>
                      </div>
                      <h4 className="grand-total-title">Grand Total <span>$260.00</span></h4>
                      <Link to="/checkout">Proceed to Checkout</Link>
                    </div>
                  </div>
                </div>
              </div>)
    }

    render() {
      return (<div>
        {this.renderCartItems()}
        {this.renderDiscountCoupon()}
        {this.renderCartTotal()}
      </div>)
    }
}

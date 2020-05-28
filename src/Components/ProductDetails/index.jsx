// Imports
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {
  Link
} from "react-router-dom";
export class ProductDetailsComponent extends React.Component {

    renderProductImages = () => {
      return (<div>
                <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/du8msdgbj/image/upload/l_watermark_346,w_240,h_240/a_ignore,w_240,h_240,c_fit,q_auto,f_auto/v1530607458/lq14iplxendogrncv8vc.png"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/du8msdgbj/image/upload/l_watermark_346,w_240,h_240/a_ignore,w_240,h_240,c_fit,q_auto,f_auto/v1540460131/is40nxpbytz0idn4mvmy.png"
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/du8msdgbj/image/upload/l_watermark_346,w_240,h_240/a_ignore,w_240,h_240,c_fit,q_auto,f_auto/v1536325287/ubbxdpyro2ghxrqk43hh.png"
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
              </div>)
    }

    renderProductHeading = () => {
      return (<div className="product-content-header-area border-bottom--thick space-pb--30">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="product-content-header">
                          <div className="product-content-header__main-info">
                            <h3 className="title">1mg Flexi-Tip Digital Thermometer</h3>
                            <div className="price">
                              <span className="main-price">206</span>
                              <span className="discounted-price">100</span>
                            </div>
                            <div className="rating">
                              <ul className="rating__stars">
                                <li><img src="assets/img/icons/star.svg" className="injectable" alt="" /></li>
                                <li><img src="assets/img/icons/star.svg" className="injectable" alt="" /></li>
                                <li><img src="assets/img/icons/star.svg" className="injectable" alt="" /></li>
                                <li><img src="assets/img/icons/star.svg" className="injectable" alt="" /></li>
                                <li><img src="assets/img/icons/star.svg" className="injectable" alt="" /></li>
                              </ul>
                              <span className="rating__text">6</span>
                            </div>
                          </div>
                          <div className="product-content-header__wishlist-info text-center">
                            <img src="assets/img/icons/heart-dark.svg" className="injectable" alt="" />
                            <span className="count">10</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)
    }

    renderProductDetails = () => {
        return (<div className="product-content-description border-bottom--thick space-pt--25 space-pb--25">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <p className="space-mb--25">There are many variations of passages of Lorem <br /> Ipsum available, but the majority have suffered alteration.</p>
                        <h4 className="space-mb--5">Free Shipping</h4>
                        <p>To Bangladesh from seller via china. Shipping <br /> method online.</p>
                      </div>
                    </div>
                  </div>
                </div>
                )
    }

    renderProductProperties = () => {
      return (<div className="product-color-picker border-bottom--thick space-pt--25 space-pb--25">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h3 className="space-mb--20">Color Select</h3>
                      <form>
                        <ul className="color-picker">
                          <li>
                            <input id="black" type="radio" name="color" value="black" checked />
                            <label className="black" for="black"></label>
                          </li>
                          <li>
                            <input id="blue" type="radio" name="color" value="blue" />
                            <label className="blue" for="blue"></label>
                          </li>
                          <li>
                            <input id="pink" type="radio" name="color" value="pink" />
                            <label className="pink" for="pink"></label>
                          </li>
                          <li>
                            <input id="brown" type="radio" name="color" value="brown" />
                            <label className="brown" for="brown"></label>
                          </li>
                        </ul>
                      </form>
                    </div>
                  </div>
                </div>
              </div>)
    }


    renderActionButton = () => {
      return (<div className="shop-product-button">
                <button className="cart">ADD TO CART</button>
                <button className="buy"><Link to="/checkout">BUY NOW</Link></button>
              </div>)
    }


    render() {
      return (
        <div>
          {this.renderProductImages()}
          {this.renderProductHeading()}
          {this.renderProductDetails()}
          {this.renderProductProperties()}
          {this.renderActionButton()}
        </div>
      )
    }
}

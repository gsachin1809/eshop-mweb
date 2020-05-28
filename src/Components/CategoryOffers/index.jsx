// Imports
import React from 'react'
import {
  Link
} from "react-router-dom";

export class CategoryOffersComponent extends React.Component {

    render() {
      return (
        <div className="featured-product-area space-mb--25">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="section-title space-mb--20">Best Sale <Link to="/category-details">VIEW ALL <span><img src="assets/img/icons/arrow-right.svg" className="injectable" alt="" /></span></Link></h2>
                <div className="featured-product-wrapper space-mb-m--15">
                  <div className="row row-5">
                    <div className="col-4">
                      <div className="featured-product space-mb--15">
                        <div className="featured-product__image">
                          <Link to="/product-details">
                            <img src="https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1588683507/oontq8ukzvyixl0z49yb/complan-nutrition-and-health-drink-refill-royale-chocolate.jpg" className="img-fluid" alt="" />
                          </Link>
                        </div>
                        <div className="featured-product__content">
                          <div className="price">
                            <span className="main-price">$460</span>
                            <span className="discounted-price">$320</span>
                          </div>
                          <div className="icon">
                            <button><img src="assets/img/icons/heart.svg" className="injectable" alt="" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="featured-product space-mb--15">
                        <div className="featured-product__image">
                          <Link to="/product-details">
                            <img src="https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1579719230/sfjq1eadaytdrqccgnte/pediasure-powder-vanilla-delight.jpg" className="img-fluid" alt="" />
                          </Link>
                        </div>
                        <div className="featured-product__content">
                          <div className="price">
                            <span className="main-price">$460</span>
                            <span className="discounted-price">$320</span>
                          </div>
                          <div className="icon">
                            <button><img src="assets/img/icons/heart.svg" className="injectable" alt="" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="featured-product space-mb--15">
                        <div className="featured-product__image">
                          <Link to="/product-details">
                            <img src="https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1566327152/xzp3zxv7k8xrv4gv7ccf/protinex-junior-powder-chocolate.jpg" className="img-fluid" alt="" />
                          </Link>
                        </div>
                        <div className="featured-product__content">
                          <div className="price">
                            <span className="main-price">$460</span>
                            <span className="discounted-price">$320</span>
                          </div>
                          <div className="icon">
                            <button><img src="assets/img/icons/heart.svg" className="injectable" alt="" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
    }


}

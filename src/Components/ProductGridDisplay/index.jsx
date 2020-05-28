// Imports
import React from 'react'
import {
  Link
} from "react-router-dom";

export class ProductGridDisplayComponent extends React.Component {

    render() {
      return (<div className="products-area">
                <div className="container">
                  <div className="row">
                    <div className="col-12">

                      <h2 className="section-title space-mb--20">All Products</h2>
                      <div className="all-products-wrapper space-mb-m--20">
                        <div className="row">
                          <div className="col-6">
                            <div className="grid-product space-mb--20">
                              <div className="grid-product__image">
                                <Link to="/product-details">
                                  <img src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1590598638/lltihmv1zlireeiz4bl1.png" className="img-fluid" alt="" />
                                </Link>
                                <button className="icon"><img src="assets/img/icons/heart-dark.svg" className="injectable" alt="" /></button>
                              </div>
                              <div className="grid-product__content">
                                <h3 className="title"><Link to="/product-details">Leather Bag</Link></h3>
                                <span className="category">Bag</span>
                                <div className="price">
                                  <span className="main-price">$460</span>
                                  <span className="discounted-price">$320</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="grid-product space-mb--20">
                              <div className="grid-product__image">
                                <Link to="/product-details">
                                  <img src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1588747197/zr1lywget5yjgwes8bsf.png" className="img-fluid" alt="" />
                                </Link>
                                <button className="icon"><img src="assets/img/icons/heart-dark.svg" className="injectable" alt="" /></button>
                              </div>
                              <div className="grid-product__content">
                                <h3 className="title"><Link to="/product-details">Lipstick</Link></h3>
                                <span className="category">Cosmetics</span>
                                <div className="price">
                                  <span className="main-price">$40</span>
                                  <span className="discounted-price">$30</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="grid-product space-mb--20">
                              <div className="grid-product__image">
                                <Link to="/product-details">
                                  <img src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1590644148/hyskxqqxzlafkzdbjjp5.png" className="img-fluid" alt="" />
                                </Link>
                                <button className="icon"><img src="assets/img/icons/heart-dark.svg" className="injectable" alt="" /></button>
                              </div>
                              <div className="grid-product__content">
                                <h3 className="title"><Link to="/product-details">Sports Shoe</Link></h3>
                                <span className="category">Shoe</span>
                                <div className="price">
                                  <span className="main-price">$50</span>
                                  <span className="discounted-price">$20</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="grid-product space-mb--20">
                              <div className="grid-product__image">
                                <Link to="/product-details">
                                  <img src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1590584005/bbmcgfvlkxcmlfcgchlh.png" className="img-fluid" alt="" />
                                </Link>
                                <button className="icon"><img src="assets/img/icons/heart-dark.svg" className="injectable" alt="" /></button>
                              </div>
                              <div className="grid-product__content">
                                <h3 className="title"><Link to="/product-details">Premium Shoe</Link></h3>
                                <span className="category">Shoe</span>
                                <div className="price">
                                  <span className="main-price">$150</span>
                                  <span className="discounted-price">$120</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="grid-product space-mb--20">
                              <div className="grid-product__image">
                                <Link to="/product-details">
                                  <img src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1590598638/lltihmv1zlireeiz4bl1.png" className="img-fluid" alt="" />
                                </Link>
                                <button className="icon"><img src="assets/img/icons/heart-dark.svg" className="injectable" alt="" /></button>
                              </div>
                              <div className="grid-product__content">
                                <h3 className="title"><Link to="/product-details">Leather Bag</Link></h3>
                                <span className="category">Bag</span>
                                <div className="price">
                                  <span className="main-price">$460</span>
                                  <span className="discounted-price">$320</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="grid-product space-mb--20">
                              <div className="grid-product__image">
                                <Link to="/product-details">
                                  <img src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1588747197/zr1lywget5yjgwes8bsf.png" className="img-fluid" alt="" />
                                </Link>
                                <button className="icon"><img src="assets/img/icons/heart-dark.svg" className="injectable" alt="" /></button>
                              </div>
                              <div className="grid-product__content">
                                <h3 className="title"><Link to="/product-details">Lipstick</Link></h3>
                                <span className="category">Cosmetics</span>
                                <div className="price">
                                  <span className="main-price">$40</span>
                                  <span className="discounted-price">$30</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="grid-product space-mb--20">
                              <div className="grid-product__image">
                                <Link to="/product-details">
                                  <img src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1590644148/hyskxqqxzlafkzdbjjp5.png" className="img-fluid" alt="" />
                                </Link>
                                <button className="icon"><img src="assets/img/icons/heart-dark.svg" className="injectable" alt="" /></button>
                              </div>
                              <div className="grid-product__content">
                                <h3 className="title"><Link to="/product-details">Sports Shoe</Link></h3>
                                <span className="category">Shoe</span>
                                <div className="price">
                                  <span className="main-price">$50</span>
                                  <span className="discounted-price">$20</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="grid-product space-mb--20">
                              <div className="grid-product__image">
                                <Link to="/product-details">
                                  <img src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1590584005/bbmcgfvlkxcmlfcgchlh.png" className="img-fluid" alt="" />
                                </Link>
                                <button className="icon"><img src="assets/img/icons/heart-dark.svg" className="injectable" alt="" /></button>
                              </div>
                              <div className="grid-product__content">
                                <h3 className="title"><Link to="/product-details">Premium Shoe</Link></h3>
                                <span className="category">Shoe</span>
                                <div className="price">
                                  <span className="main-price">$150</span>
                                  <span className="discounted-price">$120</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="grid-product space-mb--20">
                              <div className="grid-product__image">
                                <Link to="/product-details">
                                  <img src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1590598638/lltihmv1zlireeiz4bl1.png" className="img-fluid" alt="" />
                                </Link>
                                <button className="icon"><img src="assets/img/icons/heart-dark.svg" className="injectable" alt="" /></button>
                              </div>
                              <div className="grid-product__content">
                                <h3 className="title"><Link to="/product-details">Leather Bag</Link></h3>
                                <span className="category">Bag</span>
                                <div className="price">
                                  <span className="main-price">$460</span>
                                  <span className="discounted-price">$320</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="grid-product space-mb--20">
                              <div className="grid-product__image">
                                <Link to="/product-details">
                                  <img src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1588747197/zr1lywget5yjgwes8bsf.png" className="img-fluid" alt="" />
                                </Link>
                                <button className="icon"><img src="assets/img/icons/heart-dark.svg" className="injectable" alt="" /></button>
                              </div>
                              <div className="grid-product__content">
                                <h3 className="title"><Link to="/product-details">Lipstick</Link></h3>
                                <span className="category">Cosmetics</span>
                                <div className="price">
                                  <span className="main-price">$40</span>
                                  <span className="discounted-price">$30</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="grid-product space-mb--20">
                              <div className="grid-product__image">
                                <Link to="/product-details">
                                  <img src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1590644148/hyskxqqxzlafkzdbjjp5.png" className="img-fluid" alt="" />
                                </Link>
                                <button className="icon"><img src="assets/img/icons/heart-dark.svg" className="injectable" alt="" /></button>
                              </div>
                              <div className="grid-product__content">
                                <h3 className="title"><Link to="/product-details">Sports Shoe</Link></h3>
                                <span className="category">Shoe</span>
                                <div className="price">
                                  <span className="main-price">$50</span>
                                  <span className="discounted-price">$20</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="grid-product space-mb--20">
                              <div className="grid-product__image">
                                <Link to="/product-details">
                                  <img src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1590584005/bbmcgfvlkxcmlfcgchlh.png" className="img-fluid" alt="" />
                                </Link>
                                <button className="icon"><img src="assets/img/icons/heart-dark.svg" className="injectable" alt="" /></button>
                              </div>
                              <div className="grid-product__content">
                                <h3 className="title"><Link to="/product-details">Premium Shoe</Link></h3>
                                <span className="category">Shoe</span>
                                <div className="price">
                                  <span className="main-price">$150</span>
                                  <span className="discounted-price">$120</span>
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

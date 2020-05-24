// Imports
import React from 'react'


export class CategoryOffersComponent extends React.Component {

    render() {
      return (
        <div className="featured-product-area space-mb--25">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="section-title space-mb--20">Best Sale <a href="shop.html">VIEW ALL <span><img src="assets/img/icons/arrow-right.svg" className="injectable" alt="" /></span></a></h2>
                <div className="featured-product-wrapper space-mb-m--15">
                  <div className="row row-5">
                    <div className="col-4">
                      <div className="featured-product space-mb--15">
                        <div className="featured-product__image">
                          <a href="shop-product.html">
                            <img src="assets/img/products/featured/product1.png" className="img-fluid" alt="" />
                          </a>
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
                          <a href="shop-product.html">
                            <img src="assets/img/products/featured/product2.png" className="img-fluid" alt="" />
                          </a>
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
                          <a href="shop-product.html">
                            <img src="assets/img/products/featured/product3.png" className="img-fluid" alt="" />
                          </a>
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

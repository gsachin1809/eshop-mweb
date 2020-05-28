// Imports
import React from 'react'
import {
  Link
} from "react-router-dom";

export class CategoryDetailsComponent extends React.Component {

  renderFilterSection = () =>{
    return (<div className="shop-header bg-color--grey">
                <div className="container space-y--15">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <Link href="/" className="back-link"> <i className="fa fa-angle-left"></i> Back</Link>
                    </div>
                    <div className="col-6">
                      <h4 className="category-title text-center">All Categories</h4>
                    </div>
                    <div className="col-3 text-right">
                      <button className="filter-trigger" id="filter-trigger">Filter</button>
                    </div>
                  </div>
                </div>
                <div className="shop-filter space-pt--15 space-pb--50" id="shop-filter-menu">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="shop-filter-block space-mb--25">
                          <h4 className="shop-filter-block__title space-mb--5">Price</h4>
                          <div className="shop-filter-block__content">
                            <div className="widget-price-range">
                              <input type="text" id="price-range-slider" />
                            </div>
                          </div>
                        </div>
                        <div className="shop-filter-block space-mb--25">
                          <h4 className="shop-filter-block__title space-mb--15">Size</h4>
                          <div className="shop-filter-block__content">
                            <ul className="shop-filter-block__size">
                              <li><button className="active">XS</button></li>
                              <li><button>S</button></li>
                              <li><button>M</button></li>
                              <li><button>L</button></li>
                              <li><button>XL</button></li>
                            </ul>
                          </div>
                        </div>
                        <div className="shop-filter-block space-mb--40">
                          <h4 className="shop-filter-block__title space-mb--15">Brand</h4>
                          <div className="shop-filter-block__content">
                            <ul className="shop-filter-block__brand">
                              <li><button>HasThemes</button></li>
                              <li><button className="active">HasTech</button></li>
                              <li><button>Bootxperts</button></li>
                              <li><button>Codecarnival</button></li>
                            </ul>
                          </div>
                        </div>
                        <div className="shop-filter-block">
                          <button className="shop-filter-btn apply-btn">APPLY</button>
                          <button className="shop-filter-btn cancel-btn" id="shop-filter-slideup">CANCEL</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
  }

  renderCategoryItemList = () => {
    return (<div className="shop-products-area">
              <div className="shop-grid-products-wrapper space-mt--30 space-mb-m--20">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <div className="grid-product space-mb--20">
                        <div className="grid-product__image">
                          <Link to="/product-details">
                            <img src="https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1572955772/eekt9flkkfdmsixnf9zs/dabur-chyawanprash-1kg-get-dabur-honey-50g-free.png" className="img-fluid" alt="" />
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
                            <img src="https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1561716633/xw3zrxtvk9nlhcyyulpf/dabur-lal-tail.png" className="img-fluid" alt="" />
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
                            <img src="https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1527769424/l928qlv77jezvua2xdid/dabur-pudin-hara-pearls.jpg" className="img-fluid" alt="" />
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
                            <img src="https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1577364618/ijkfqbwu5y7i9fm1rhde/dabur-honey-squeezy-buy-1-get-1-free.png" className="img-fluid" alt="" />
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
                            <img src="https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1572955772/eekt9flkkfdmsixnf9zs/dabur-chyawanprash-1kg-get-dabur-honey-50g-free.png" className="img-fluid" alt="" />
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
                            <img src="https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1561716633/xw3zrxtvk9nlhcyyulpf/dabur-lal-tail.png" className="img-fluid" alt="" />
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
                            <img src="https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1527769424/l928qlv77jezvua2xdid/dabur-pudin-hara-pearls.jpg" className="img-fluid" alt="" />
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
                            <img src="https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1577364618/ijkfqbwu5y7i9fm1rhde/dabur-honey-squeezy-buy-1-get-1-free.png" className="img-fluid" alt="" />
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
                            <img src="https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1572955772/eekt9flkkfdmsixnf9zs/dabur-chyawanprash-1kg-get-dabur-honey-50g-free.png" className="img-fluid" alt="" />
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
                            <img src="https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1561716633/xw3zrxtvk9nlhcyyulpf/dabur-lal-tail.png" className="img-fluid" alt="" />
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
                            <img src="https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1527769424/l928qlv77jezvua2xdid/dabur-pudin-hara-pearls.jpg" className="img-fluid" alt="" />
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
                            <img src="https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1577364618/ijkfqbwu5y7i9fm1rhde/dabur-honey-squeezy-buy-1-get-1-free.png" className="img-fluid" alt="" />
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
            </div>)
  }

  render() {
      return (
        <div>
          {this.renderFilterSection()}
          {this.renderCategoryItemList()}
        </div>
      )
  }
}

// Imports
import React,{ PureComponent } from 'react'


export class CategorySliderComponent extends React.Component {

    render() {
      return (
        <div className="category-slider-area bg-color--grey space-pb--25 space-mb--25">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="section-title space-mt--10 space-mb--20">Categories</h2>
                <div className="category-slider-wrapper">
                  <div className="category-item">
                    <div className="category-item__image">
                      <a href="shop.html">
                        <img src="assets/img/icons/category/cat1.svg" className="injectable" alt="" />
                      </a>
                    </div>
                    <div className="category-item__title">
                      <a href="shop.html">Men</a>
                    </div>
                  </div>
                  <div className="category-item">
                    <div className="category-item__image">
                      <a href="shop.html">
                        <img src="assets/img/icons/category/cat2.svg" className="injectable" alt="" />
                      </a>
                    </div>
                    <div className="category-item__title">
                      <a href="shop.html">Women</a>
                    </div>
                  </div>
                  <div className="category-item">
                    <div className="category-item__image">
                      <a href="shop.html">
                        <img src="assets/img/icons/category/cat3.svg" className="injectable" alt="" />
                      </a>
                    </div>
                    <div className="category-item__title">
                      <a href="shop.html">Bag</a>
                    </div>
                  </div>
                  <div className="category-item">
                    <div className="category-item__image">
                      <a href="shop.html">
                        <img src="assets/img/icons/category/cat4.svg" className="injectable" alt="" />
                      </a>
                    </div>
                    <div className="category-item__title">
                      <a href="shop.html">Cosmetics</a>
                    </div>
                  </div>
                  <div className="category-item">
                    <div className="category-item__image">
                      <a href="shop.html">
                        <img src="assets/img/icons/category/cat5.svg" className="injectable" alt="" />
                      </a>
                    </div>
                    <div className="category-item__title">
                      <a href="shop.html">Sports</a>
                    </div>
                  </div>
                  <div className="category-item">
                    <div className="category-item__image">
                      <a href="shop.html">
                        <img src="assets/img/icons/category/cat3.svg" className="injectable" alt="" />
                      </a>
                    </div>
                    <div className="category-item__title">
                      <a href="shop.html">Bag</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      )
    }
}

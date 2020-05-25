// Imports
import React from 'react'
import {
  Link
} from "react-router-dom";

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
                      <Link to="/category-details">
                        <img src="assets/img/icons/category/cat1.svg" className="injectable" alt="" />
                      </Link>
                    </div>
                    <div className="category-item__title">
                      <Link to="/category-details">Men</Link>
                    </div>
                  </div>
                  <div className="category-item">
                    <div className="category-item__image">
                      <Link to="/category-details">
                        <img src="assets/img/icons/category/cat2.svg" className="injectable" alt="" />
                      </Link>
                    </div>
                    <div className="category-item__title">
                      <Link to="/category-details">Women</Link>
                    </div>
                  </div>
                  <div className="category-item">
                    <div className="category-item__image">
                      <Link to="/category-details">
                        <img src="assets/img/icons/category/cat3.svg" className="injectable" alt="" />
                      </Link>
                    </div>
                    <div className="category-item__title">
                      <Link to="/category-details">Bag</Link>
                    </div>
                  </div>
                  <div className="category-item">
                    <div className="category-item__image">
                      <Link to="/category-details">
                        <img src="assets/img/icons/category/cat4.svg" className="injectable" alt="" />
                      </Link>
                    </div>
                    <div className="category-item__title">
                      <Link to="/category-details">Cosmetics</Link>
                    </div>
                  </div>
                  <div className="category-item">
                    <div className="category-item__image">
                      <Link to="/category-details">
                        <img src="assets/img/icons/category/cat5.svg" className="injectable" alt="" />
                      </Link>
                    </div>
                    <div className="category-item__title">
                      <Link to="/category-details">Sports</Link>
                    </div>
                  </div>
                  <div className="category-item">
                    <div className="category-item__image">
                      <Link to="/category-details">
                        <img src="assets/img/icons/category/cat3.svg" className="injectable" alt="" />
                      </Link>
                    </div>
                    <div className="category-item__title">
                      <Link to="/category-details">Bag</Link>
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

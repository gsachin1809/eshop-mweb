// Imports
import React,{ PureComponent } from 'react'


export class BannersComponent extends React.Component {

    render() {
      return (<div className="hero-slider bg-color--grey space-y--10">
                  <div className="container">
                    <div className="row row-10">
                      <div className="col-12">
                        <div className="hero-slider-wrapper">
                          <div className="hero-slider-item d-flex bg-img" data-bg="assets/img/hero-slider/slider-1.jpg">
                            <div className="container">
                              <div className="row">
                                <div className="col-12">
                                  <div className="hero-slider-content">
                                    <h2 className="hero-slider-content__title space-mb--10">Most popular <br /> Hand Bag</h2>
                                    <p className="hero-slider-content__text">GET 30% OFF</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="hero-slider-item d-flex bg-img" data-bg="assets/img/hero-slider/slider-2.jpg">
                            <div className="container">
                              <div className="row">
                                <div className="col-12">
                                  <div className="hero-slider-content">
                                    <h2 className="hero-slider-content__title space-mb--10">New Arrival <br /> Sport Shoes</h2>
                                    <p className="hero-slider-content__text">GET 40% OFF</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="hero-slider-item d-flex bg-img" data-bg="assets/img/hero-slider/slider-3.jpg">
                            <div className="container">
                              <div className="row">
                                <div className="col-12">
                                  <div className="hero-slider-content">
                                    <h2 className="hero-slider-content__title space-mb--10">Featured Product <br /> Summer Clothes</h2>
                                    <p className="hero-slider-content__text">GET 50% OFF</p>
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

// Imports
import React from 'react'
import {
  Link
} from "react-router-dom";
export class HeaderComponent extends React.Component {

    render() {
      return (<header>
                  <div className="header-wrapper border-bottom">
                    <div className="container space-y--15">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <div className="header-logo">
                            <Link to="/">
                              <img src="assets/img/logo.png" className="img-fluid" alt="" />
                            </Link>
                          </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                          <div className="header-search">
                            <form>
                              <input type="text" id="header-search-input" placeholder="Search anything" />
                              <img src="assets/img/icons/search.svg" className="injectable" alt="" />
                            </form>
                          </div>
                        </div>
                        <div className="col-auto">
                          <button className="header-menu-trigger" id="header-menu-trigger">
                            <img src="assets/img/icons/menu.svg" className="injectable" alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="search-keyword-area space-xy--15 bg-color--grey2" id="search-keyword-box">
                    <div className="search-keyword-header space-mb--20">
                      <h4 className="search-keyword-header__title">Hot Keywords</h4>
                    </div>
                    <ul className="search-keywords">
                      <li><a href="search.html">Shoes</a></li>
                      <li><a href="search.html">Fashion Bag</a></li>
                      <li><a href="search.html">Light Bag</a></li>
                      <li><a href="search.html">Parts</a></li>
                      <li><a href="search.html">Sport Shoes</a></li>
                      <li><a href="search.html">Travel Bag</a></li>
                    </ul>
                  </div>
                </header>)
    }


}

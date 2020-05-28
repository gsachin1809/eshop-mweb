// Imports
import React from 'react'
import {
          Image,
          Container
      } from 'react-bootstrap'

import './assests/style.css';

export class OrderConfirmComponent extends React.Component {

    render() {
      return (<div className="checkout-body space-mt--30">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 center-align">
                        <div className="col-3"></div>
                        <div className="col-6 set-to-center">
                            <Image src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/ok.png" className="rounded mx-auto d-block"  width="100%"/>
                        </div>
                      </div>
                      <div className="col-12 center-align set-to-center" style={{ "textAlign" : "center"}}>
                        <h3>
                            <strong> Thank you,</strong>
                            <br />
                            <br />
                            <br />
                            Your order has been confirm.</h3>
                            <br /><br />
                            <h4>Your order will be deliverd to you shortly </h4>
                            <br />
                            <button type="button" className="btn btn-success" onClick={()=> {this.props.goToHome()}}>Go back to Home </button>
                      </div>

                    </div>
                  </div>
                </div>)
    }
}

// Imports
import React from 'react'
import {
  Link
} from "react-router-dom";
export class UserProfileComponent extends React.Component {

    renderBasicDetails = () => {
      return (
        <div className="profile-header-area space-pt--30 space-mb--40">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="profile-header">
                    <div className="profile-header__image">
                      <img src="assets/img/profile.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="profile-header__content space-mt--10">
                      <h3 className="name space-mb--15">Nicholas J. Echeverria</h3>
                      <div className="profile-info space-mb--10">
                        <div className="profile-info-block">
                          <div className="profile-info-block__value">
                            MB 4350
                          </div>
                          <div className="profile-info-block__title">
                            ID Number
                          </div>
                        </div>
                        <div className="profile-info-block">
                          <div className="profile-info-block__value">
                            346 ($40)
                          </div>
                          <div className="profile-info-block__title">
                            Points
                          </div>
                        </div>
                      </div>
                      <div className="profile-level">
                        <div className="profile-level__title">
                          Level 04
                        </div>
                        <div className="profile-level__progress progress">
                          <div className="progress-bar" role="progressbar" style={{ "width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    }

    renderMoreDetails = () => {
      return (<div className="profile-body-area">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="profile-body">
                        <div className="profile-info-table space-mb--40">
                          <div className="profile-info-block">
                            <div className="profile-info-block__title">Full Name</div>
                            <div className="profile-info-block__value">Don Normane</div>
                          </div>
                          <div className="profile-info-block">
                            <div className="profile-info-block__title">User Name</div>
                            <div className="profile-info-block__value">john007</div>
                          </div>
                          <div className="profile-info-block">
                            <div className="profile-info-block__title">Phone</div>
                            <div className="profile-info-block__value">(+1) 223556 66</div>
                          </div>
                          <div className="profile-info-block">
                            <div className="profile-info-block__title">E-mail Address</div>
                            <div className="profile-info-block__value">demo@mail.com</div>
                          </div>
                          <div className="profile-info-block">
                            <div className="profile-info-block__title">Shipping Address</div>
                            <div className="profile-info-block__value">935-1670 Neque. St. Centennial Delaware 48432</div>
                          </div>
                          <div className="profile-info-block">
                            <div className="profile-info-block__title">Total Order</div>
                            <div className="profile-info-block__value">25</div>
                          </div>
                          <div className="profile-info-block">
                            <div className="profile-info-block__title">Edit Profile</div>
                            <div className="profile-info-block__value"><Link to="/my-profile"><img src="assets/img/icons/edit.svg" className="injectable" alt="" /></Link></div>
                          </div>
                        </div>
                        <div className="profile-info-table">
                          <div className="profile-info-block">
                            <div className="profile-info-block__title">Help Center</div>
                            <div className="profile-info-block__value">62256</div>
                          </div>
                          <div className="profile-info-block">
                            <div className="profile-info-block__title">To be Shiped</div>
                            <div className="profile-info-block__value">05</div>
                          </div>
                          <div className="profile-info-block">
                            <div className="profile-info-block__title">Review</div>
                            <div className="profile-info-block__value">10</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
    }

    render() {

      return (<div>
                { this.renderBasicDetails()}
                { this.renderMoreDetails()}
              </div>
      )
    }
}

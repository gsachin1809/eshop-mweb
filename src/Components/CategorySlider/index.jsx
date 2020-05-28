// Imports
import React from 'react'
import {
  Link
} from "react-router-dom";
import './assests/style.css';
import Slider from "react-slick";
import {Image,Container} from 'react-bootstrap'

export class CategorySliderComponent extends React.Component {

    displayTesting = () => {
      const settings = {
                          dots: true,
                          infinite: true,
                          speed: 500,
                          slidesToShow: 3,
                          slidesToScroll: 1
                        };
      return <div className="categorySection">
                <Container>
                <h5>Service</h5>
                <Slider {...settings}>
                  <div>
                    <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1562926079/ozbusoyfoixrvhufwe4n.png" width="100px" roundedCircle/>
                  </div>
                  <div>
                    <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1579602672/fejyebkvnkilca1vua4l.png" width="100px" roundedCircle/>
                  </div>
                  <div>
                    <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1590602237/fjxqzyitg1v1ugb78jwb.png" width="100px" roundedCircle/>
                  </div>
                  <div>
                    <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1561119957/hnui9xsoxvea3iq74joe.png" width="100px" roundedCircle/>
                  </div>
                </Slider>
              </Container>
            </div>
    }

    render() {
      return this.displayTesting()
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

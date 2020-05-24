// Imports
import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import * as action from './action';
import { HeaderComponent } from '../../Components/Header/index';
import { BannerComponent } from '../../Components/Banners/index';
import { CategorySliderComponent } from '../../Components/CategorySlider/index';
import { CategoryOffersComponent } from '../../Components/CategoryOffers/index';
import { ProductGridDisplayComponent } from '../../Components/ProductGridDisplay/index';
import { FooterComponent } from '../../Components/Footer/index';
class Home extends React.Component {

    render() {
      console.log("props to display ",this.props);
      return (<div className="body-wrapper space-pt--70 space-pb--120">
                  <HeaderComponent />
                  <BannerComponent />
                  <CategorySliderComponent />
                  <CategoryOffersComponent />
                  <ProductGridDisplayComponent />
                  <FooterComponent />
              </div>)
    }


}
const mapStateToProps = (state) => {
  return {
    articles : state.articles
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    updateArticals : (name) =>{ dispatch({ type: "UPDATE_ARTICAL", payload : name }) },
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(Home);

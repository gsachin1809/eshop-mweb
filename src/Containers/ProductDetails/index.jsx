// Imports
import React from 'react';
import { connect } from 'react-redux';
import * as action from './action';
import { HeaderComponent } from '../../Components/Header/index';
import { ProductDetailsComponent } from '../../Components/ProductDetails/index';
import { FooterComponent } from '../../Components/Footer/index';
class ProductDetails extends React.Component {

    render() {
      return (<div className="body-wrapper space-pt--70 space-pb--120">
                  <HeaderComponent />
                  <ProductDetailsComponent />

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
export default connect(mapStateToProps , mapDispatchToProps)(ProductDetails);

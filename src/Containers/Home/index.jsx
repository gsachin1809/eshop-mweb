// Imports
import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import * as action from './action';

class Home extends React.Component {

    render() {
      console.log("props to display ",this.props);
      return (<div >
                home
                <button onClick={()=>{this.props.updateArticals("newstring")}}> click to change  </button>
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

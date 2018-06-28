import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import {Modal} from 'antd';
import Tloader from 'react-touch-loader';
import MyGift_touch_loader from './myGift_touch_loader';
import Dirlog from './dirlog';
import Footer from './footer'

class myGift  extends React.Component{
  constructor(){
      super();
      this.state = {

  }
}


  render(){

      return (
            <div className="mr10 resetBootrap">

                  <MyGift_touch_loader  />
          </div>
      )

}

}
export default  myGift;

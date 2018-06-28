import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col,Menu} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
var Dirlog = React.createClass({

     getInitialState(){
        return {
              isCloseDialog : false
        }
     },
     /*关闭遮罩层*/
     handleCloseDirlog(){
          this.setState({isCloseDialog:!this.state.isCloseDialog})
          if(this.state.isCloseDialog == false){
            $(".bg").hide(400);
            $(".withdrawFee_dirlog").hide(500);
          } else {
            $(".bg").show(500);
            $(".withdrawFee_dirlog").show(500);
          }
     },
      render(){
          return (

                  <div>
                      <div className="bg"></div>
                      <div className="dirlog withdrawFee_dirlog">
                           <h4>手续费说明</h4>
                           <p>1.普通提现费0.3%</p>
                           <p>2.单笔限额30万元,最低2元/笔</p>
                           <p>3.首次充值未出借提现费0.5%</p>
                           <p onClick={this.handleCloseDirlog} className="close_layer">我知道了</p>
                      </div>

                  </div>


          )


      }

})
export default Dirlog;

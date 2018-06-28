import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'antd';
import Footer from './footer'

var MyInvest = React.createClass({
      getInitialState(){

        return {

        }

      },


      render(){

            return (

              <div className="mr10">
                   <h4 className="h_title h_title_border">瑞企贷15号-15期</h4>
                   <div className="myinvest_details clearfix">
                        <ul>
                            <li><span className="fr">5,000,000.00<font>元</font></span>投资金额</li>
                            <li><span className="fr">30<font>天</font></span>剩余日期</li>
                            <li><span className="fr">60,000.00<font>元</font></span>待收金额</li>
                            <li>
                              <p style={{lineHight:'3rem'}}>目前</p>
                              <span className="fr">60,000.00<font>元</font></span>5,000,000.00*(6%+1%)
                            </li>
                            <li>
                              <span className="fr i_target_time">2016-01-02投标</span>
                              <p className="myinvest-icons">
                                <span className="green-icons">满标记息</span>
                                <span className="red-icons">1%加息</span>
                                <span className="bule-icons">可债转</span>
                              </p>
                            </li>
                            <li>
                              <span className="fa fa-angle-right fr"></span>
                              <b>原始项目</b>
                            </li>
                        </ul>
                   </div>
              </div>

            )

      }




})

export default MyInvest;

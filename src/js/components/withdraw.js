import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col,Menu} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
import Dirlog from './dirlog';
var Withdraw = React.createClass({

     getInitialState(){

        return {
            isWithdrawShow: false,
            isCouponsShow: false
        }

     },
     /*手续费说明弹框*/
     handleWithdrawFee(){
        this.setState({
            isWithdrawShow : !this.state.isWithdrawShow
        })
        if(this.state.isWithdrawShow == false){

              $(".bg").show(500);
              $(".withdrawFee_dirlog").show(500);
        } else {

              $(".bg").hide(500);
              $(".withdrawFee_dirlog").hide(500);
        }

     },
     /*提现券展示*/
     handleCoupons(){
        this.setState({
            isCouponsShow : !this.state.isCouponsShow
        })
        if(this.state.isWithdrawShow == false){
              $(".bg").show(500);
              $(".coupons_dirlog").show(500);
        } else {
              $(".bg").hide(500);
              $(".coupons_dirlog").hide(500);
        }

     },
      render(){
          return (
            <div className="recharge_area">
                  <div className="mr10">
                        <h4 className="h_title">提现</h4>
                        <div className="recharge_withdrawList">
                              <ul>
                                  <li>
                                      <span className="bank_icon fr"><img src="./src/images/bank_icon/zhoashang.png"/></span>
                                      <p>
                                          <span className="fontSize20">招商银行股份有限公司</span>
                                          <font className="cardNum">62222 2366 **** 0097</font>
                                      </p>
                                  </li>
                                  <li>
                                      <span className="fr"><font id="account_balance">100</font> 元</span>
                                      账户余额(元)
                                  </li>
                                  <li>
                                      <span className="fa fa-angle-right fr"></span>
                                      <font className="fr" id="coupons_nums" onClick={this.handleCoupons} >50元提现劵</font>
                                      提现劵
                                  </li>
                                  <li>
                                    <span className="fr">元</span>
                                    <input type="text" id="Withdraw_money" placeholder="提现金额(元)" />
                                  </li>
                              </ul>
                              <p>提现预计1-2个工作日内到账(周末及法定节假日的提现申请，将在上班后的第一个工作日进行处理）</p>
                        </div>
                  </div>
                  <div className="marTop">
                      <p className="btnB_border"><img src="./src/images/bitmap.png"/></p>
                      <div className="btnT_button withdraw_buttonB">
                          <div className="fl withdraw_fee">
                            <p>
                                <span className="fl">手续费</span>
                                <img  onClick={this.handleWithdrawFee} className="question_mark fl"  src="./src/images/question_mark.png"/>
                                <font className="fl">2.00元</font>
                            </p>
                            <p>
                                <span className="fl">实际到账</span><font className="fl">98.00元</font>
                            </p>
                          </div>
                          <button className="fr grad unityButton" id="cash_btn" onClick={this.handleWithdraw}>立即提现</button>
                      </div>
                  </div>
                  <Dirlog ref="dirlog" />
                  <div className="dirlog coupons_dirlog">
                        <h4>选择提现劵</h4>
                        <p className="noCoupons">不使用提现劵</p>
                        <ul>
                            <li><span className="fr">2017-07-21</span><font>150<span>元</span></font>提现券</li>
                            <li><span className="fr">2017-07-21</span><font>150<span>元</span></font>提现券</li>
                            <li><span className="fr">2017-07-21</span><font>150<span>元</span></font>提现券</li>
                        </ul>
                  </div>
              </div>
          )
      }

})
export default Withdraw;

import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col,Menu} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
var Recharge = React.createClass({

      render(){

          return (
            <div className="recharge_area">
                  <div className="mr10">
                        <h4 className="h_title">充值</h4>
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
                                      <span className="fr"><font id="account_balance">100</font>元</span>
                                      账户余额(元)
                                  </li>
                                  <li>
                                    <span className="fr">元</span>
                                    <input type="text" id="recharge_money" placeholder="请输入充值金额(100元起)" />
                                  </li>
                              </ul>
                              <p>招商银行单笔最高可充值 500,000 元</p>
                        </div>
                  </div>
                  <div className="marTop">
                      <p className="btnB_border"><img src="./src/images/bitmap.png"/></p>
                      <p className="btnT_button">
                        <button className="grad unityButton" id="next">下一步</button>
                      </p>
                  </div>
              </div>

          )


      }

})
export default Recharge;

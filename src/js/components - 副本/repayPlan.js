import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'antd';
import Footer from './footer'

var RepayPlan = React.createClass({
      getInitialState(){

        return {

        }

      },


      render(){

            return (
              <div className="repayPlan-warp">
                  <div className="mr10">
                          <h4 className="h_title h_title_border">回款计划</h4>
                          <section className="panel repayPlan_panel clearfix">
                                <div className="repayPlan_info clearfix">
                                      <p>
                                        <span>2017-09-24</span>
                                        <font>回款日期</font>
                                      </p>
                                      <p>
                                        <span>120.42</span>
                                        <font>本金(元)</font>
                                      </p>
                                      <p>
                                        <span>120.42</span>
                                        <font>利息(元)</font>
                                      </p>
                                </div>
                                <div className="periodsNum">
                                    <span className="fr">2/12</span>
                                    瑞资产12号-4期
                                </div>
                          </section>
                          <section className="panel repayPlan_panel clearfix">
                                <div className="repayPlan_info clearfix">
                                      <p>
                                        <span>2017-09-24</span>
                                        <font>回款日期</font>
                                      </p>
                                      <p>
                                        <span>120.42</span>
                                        <font>本金(元)</font>
                                      </p>
                                      <p>
                                        <span>120.42</span>
                                        <font>利息(元)</font>
                                      </p>
                                </div>
                                <div className="periodsNum">
                                    <span className="fr">2/12</span>
                                    瑞资产12号-4期
                                </div>
                          </section>
                  </div>
                        <div className="repay_totals">
                            <p>
                              <span>2</span>
                              <font>回款笔数</font>
                            </p>
                            <p>
                              <span>15,525.09</span>
                              <font>本月待收本金(元)</font>
                            </p>
                            <p>
                              <span>475.02</span>
                              <font>本月待收利息(元)</font>
                            </p>
                        </div>
            </div>
            )

      }




})

export default RepayPlan;

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Tabs } from 'antd';
import MyInvest_touch_loader from './myInvest_touch_loader';
import Tloader from 'react-touch-loader';
const TabPane =Tabs.TabPane;
class MyInvest extends React.Component{

        render(){
            return (
              <div className="mr10 resetBootrap">
                   <h4 className="h_title h_title_border">我的投资</h4>
                   <section className="incomes_panel">
                     <div className="total_assets">
                       <p><b>5,000.00</b> 元</p>
                       <p>待收收益</p>
                     </div>
                     <div className="total_assets">
                       <p><b style={{fontSize:'2rem'}}>5,000,324.00</b> 元</p>
                       <p>代收本金</p>
                     </div>
                   </section>
                   <Tabs defaultActiveKey="1"  className="invest_titile_list">
                      <TabPane tab="投标中" key="1">
								             <MyInvest_touch_loader pageSize={20} loanType="1"/>
                      </TabPane>
                      <TabPane tab="回款中" key="2">
                             <MyInvest_touch_loader pageSize={20} loanType="2"/>
                      </TabPane>
                      <TabPane tab="已结清" key="3">
                            <MyInvest_touch_loader pageSize={20} loanType="3"/>
                      </TabPane>
                   </Tabs>

                </div>

            )

      }




}

export default MyInvest;

import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'antd';
import Footer from './footer'

var FinanceList = React.createClass({
      getInitialState(){

        return {
            modal1Visible: false,
            modal2Visible: false,
            templates : '',
            isShow: true,
            isAddCard:false
        }

      },


      render(){

            return (
              <div className="mr10">
                  <div className="finacelist_area">
                      <div className="finace_title h_title_border clearfix">
                          <ul>
                              <li>分期</li>
                              <li>定期</li>
                              <li>债转</li>
                          </ul>
                      </div>
                      <section className="panel my_subject_panel clearfix">
                        <h4 className="subject_title"><span className="subject_span">瑞企贷535-03期</span><span className="rate_icon">满标计息</span></h4>
                        <div className="subject_projectInfo">
                          <div className="fl subject_project_rate">
                            <b>
                               11<span>%</span>
                               <span>+%</span>
                            </b>
                            <p>年化收益率</p>
                          </div>
                          <div className="fl subject_project_time">
                            <b>30<span>天</span></b>
                            <p>投资期限</p>
                          </div>
                          <button type="button" className="fr grad goBuyIng">立即投资</button>
                        </div>
                      </section>
                      <Footer/>
                   </div>
              </div>
            )

      }




})

export default FinanceList;

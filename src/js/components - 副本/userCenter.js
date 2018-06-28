import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Header from './header';
import Footer from './footer';
import CertTemplate from './certTemplate';
import "../../css/index.scss";
var UserCenter = React.createClass({

      getInitialState(){

          return {
              userName:'',
              userId:'06079fc1e4c6415b8684320fe926f5d3',
              res:[],
              totalAsset:'',
              accountBalance:'',
              accumulatedEarning:'',
              mobile: ''


          }

      },
      componentDidMount(){
          this.refs.certTemplate.isrealName();
          const _this = this;
          $.ajax({
              url:'http://test.rqbao.com/rqb/user/getUserCenter.do',
              type:'POST',
              data:{
               userId:'06079fc1e4c6415b8684320fe926f5d3'
             },
             dataType:'json',
             success:(res)=>{
               let info = JSON.parse(res.result);
               let _data = info.resultObject;
               console.log(_data);
               _this.setState({
                 res:res,
                 totalAsset: _data.totalAsset,
                 accountBalance: _data.accountBalance,
                 accumulatedEarning: _data.accumulatedEarning,
                 mobile : _data.mobile
               });
                 console.log(this.state.user_mobile);
             },error:()=>{
                console.log("用户名为空");
             }

          })

      },
      render(){
            let storage = window.localStorage;
            storage.setItem('mobile',this.state.mobile);
            return (

                  <div className="personalcenter_area">
                      <div className="mr10">
                        <CertTemplate ref="certTemplate" />
                        {/*我的账户START */}
                        <section className="h_title h_title_border">
                          <b>我的账户</b>
                          <Link to={`/sysInfos`}>
                             <span className="fa fa-commenting fr"/>
                          </Link>
                          <Link to={`/sysSets`}>
                             <span className="fa fa-cog  fr" />
                          </Link>
                          <font></font>
                        </section>
                        {/*我的账户END*/}
                        <div className="accountPanel panel">
                          <section className="total_assets">
                            <p><b>{this.state.totalAsset}</b> 元</p>
                            <p>总资产</p>
                          </section>
                          <section className="account_list">
                            <div className="incomes">
                              <p><b>{this.state.accountBalance}</b> 元</p>
                              <p>可用余额</p>
                            </div>
                            <div className="incomes">
                              <p><b>{this.state.accumulatedEarning}</b> 元</p>
                              <p>累计收益</p>
                            </div>
                          </section>
                          <section className="account_branch">
                            <ul>
                              <li>
                                <Link to={`/repayPlan`}>
                                  <p><img src="./src/images/returnPlan_icon.png" /></p>
                                  回款计划
                                </Link>
                              </li>
                              <li>
                                <Link to={`/fundsDetails`}>
                                    <p><img src="./src/images/fundDetails_icon.png" /></p>
                                    资金明细
                                </Link>
                              </li>
                              <li>
                                <Link to={`/myGift`}>
                                    <p><img src="./src/images/myGift.png" /></p>
                                    我的礼物
                                </Link>
                              </li>
                              <li>
                                 <Link to={`/recharge`}>
                                    <p><img src="./src/images/recharge_icon.png" /></p>
                                    充值
                                 </Link>
                              </li>
                              <li>
                               <Link to={`/withdraw`}>
                                  <p><img src="./src/images/withdraw_icon.png" /></p>
                                  提现
                                </Link>
                              </li>
                            </ul>
                          </section>
                        </div>
                        {/*financesPanel START */}
                        <section className="financesPanel panel">
                          <ul>
                            <li>
                              <span className="finances_icon">我的理财</span>
                              <Link to={`/myInvest`}>
                               <span className="fa fa-angle-right" />
                              </Link>
                            </li>
                            <li>
                              <span className="finances_yue">我的约标</span>
                              <Link to={`/mySubject`}>
                                <span className="fa fa-angle-right" />
                              </Link>
                            </li>
                            <li>
                              <span className="finances_risk">风险测评</span>
                              <Link to={`/riskAssess`}>
                                <span className="fa fa-angle-right" />
                              </Link>
                            </li>
                          </ul>
                        </section>
                        {/*financesPanel END*/}
                        <img className="personal_ad" src="./src/images/personal_ad.png" />
                      </div>
                      <Footer/>
                  </div>

            )

      }


})

export default UserCenter;

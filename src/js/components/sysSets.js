import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './header';
import Footer from './footer';
import CertTemplate from './certTemplate';
var SysSets = React.createClass({
      componentDidMount(){

          this.refs.certTemplate.isrealName();

      },
      render(){
            const mobile =localStorage.getItem('mobile');
            //localStorage.removeItem("mobile");
            return (

              <div className="mr10">
                   <CertTemplate ref="certTemplate" />
                   <h4 className="h_title h_title_border">个人信息</h4>
                   <div className="personalInfos">
                        <ul>

                            <li><font className="fr">{mobile}</font>手机号</li>
                            <li><span className="fa fa-angle-right fr"></span>收获地址</li>
                            <li>
                              <span className="fa fa-angle-right fr"></span>
                              <span className="iscertified fr">已认证</span>
                              实名认证
                            </li>
                            <li>
                              <span className="fa fa-angle-right fr"></span>
                              <span className="iscertified fr">已绑卡</span>
                              银行卡
                            </li>
                            <li><span className="fa fa-angle-right fr"></span>登录密码</li>
                            <li><span className="fa fa-angle-right fr"></span>手势密码</li>
                            <li><span className="fa fa-angle-right fr"></span>指纹密码</li>

                        </ul>
                   </div>
             </div>

            )


      }

})

export default SysSets;

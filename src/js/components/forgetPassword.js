import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs,Form,Button,Input,Icon} from 'antd';
import {Link} from 'react-router';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
var ForgetPassword = React.createClass({

        render (){

                return (
                  <section className="registerForm resetPassword">
                    	<h4 className="h_title">修改登录密码</h4>
                    	<ul>
                    		<li className="clearfix">
                    			<span>手机号</span>
                    			<input  type="password" value=""   placeholder="" />
                    		</li>
                    		<li className="clearfix">
                    			<span>验证码</span>
                    			<input  type="password" value="" className="safe_code"  placeholder="输入新密码" />
                    			<input  type="button" id="getSafeCode" value="获取短信验证码"  />
                    		</li>
                    	</ul>
                    	<button className="grad" id="completeBtn">下一步</button>
                  </section>

                )

        }

})

export default ForgetPassword;

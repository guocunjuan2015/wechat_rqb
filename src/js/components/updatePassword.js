import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs,Form,Button,Input,Icon,Checkbox} from 'antd';
import {Link} from 'react-router';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

var UpdatePassword = React.createClass({

        getInitialState(){
              return {

                  isCodeVisibility: true
              }
        },


        render (){

                return (

                  <section className="loginForm">
                      <h4  className="h_title">登录</h4>
                      <ul>
                        <li className="clearfix"><span>用户名</span><input  type="type"value="" placeholder="请输入您的手机号码" /></li>
                        <li className="clearfix"><span>密码</span><input type="type" value="" placeholder="请输入6-18位数字或字母或符号" /></li>
                      </ul>
                      <p className="forgetPassword"><a href="javascript:;">忘记密码？</a></p>
                      <button className="grad unityButton" id="loginBtn">登录</button>
                      <p className="registerEnter" onclick="">注册</p>
                   </section>



                )

        }

})

export default UpdatePassword;

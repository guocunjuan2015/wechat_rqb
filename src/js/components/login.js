import React from 'react';
import { browserHistory } from 'react-router'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

/*校验用户密码*/
function checkP(p_id){
return checkLength("showMess", p_id, 6, 16, p_mess);
}
const u_mess = "用户名长度应该为2-20位之间!";
const p_mess = "密码应该为6-16位之间!";
/*输入长度校验公共函数*/
function checkLength(showMess, id, s_l, e_l, message) {
var flag = false;
if ($("#" + id).val().length >= s_l && $("#" + id).val().length <= e_l
		&& $("#" + id).val() != '') {
	flag = true;
} else {
	myErrorMsg(showMess, message);
}
return flag;
}

/**
* 提示方法
*
* @param str
*  提示内容
*/
function myErrorMsg(msg_id, str) {
$("#" + msg_id).text(str);
$("#" + msg_id).show();
}
/**
 * 去除字符串两边的空格，如果字符串未创建，则返回空字符串
 * @param str 字符串
 * @returns
 */
function parseString(str){
	var target = str;
	if(isEmpty(target)){
		target = "";
	}
	target = $.trim(target);
	return target;
}

/**
 * 判断字符串是否为空的方法
 * @param str 要判断的字符串
 * @returns {Boolean} undefined，null和空格判断是true，其他为false
 */
function isEmptyStr(str){
	return parseString(str) == "";
}

/**
 * 获取url中的参数
 * @param name 参数名称
 * @returns 如果未找到则返回null
 */
function getRequestParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return unescape(r[2]);
	}
	return null;
}

/**
 * 判断js对象是否为空的方法
 * @param obj 要判断的字符串
 * @returns {Boolean} 如果为undefined或者null则返回true，其他返回false
 */
function isEmpty(obj){
	return obj == undefined || obj == null;
}
class  Login extends React.Component{

        constructor(){
              super();
              this.state = {
                  u:'',
                  p:'',


              }
        }
        handleChange =(event) => {
           this.setState
           ({
             u: event.target.u,
             p: event.target.p,
           });
         }
        /**登录接口
         * [handleLogin description]
         * @param  {[type]} event [description]
         * @return {[type]}       [description]
         */
        handleLogin = (event)=>{
          event.preventDefault();
          if (!checkP("p")) {
      			$("#login").attr("disabled", false);
      			return
      		}


          //去登陆
          $.ajax({
        			type : "POST",
        			url  : "http://test.rqbao.com/rqb/register/login.do",
        			data : {
                  u:this.refs.u.value,
                  p:this.refs.p.value
              } ,
        			success : function(response) {
        				let infoJson = response.result;
        				let info = $.parseJSON(infoJson);
        				let res = info.result;
        				if (res == 1) {
        					var userId = info.resultObject.userId;
        					var url = getRequestParam("reflect_url");
                  console.log(res);
        					if (isEmptyStr(url)) {
        							 browserHistory.push('/userCenter');
        						} else {
        							window.location.href = decodeURIComponent(url);
        						}

        				} else {

        					$("#showMess").text(info.errInfo);
        					console.log(info.errInfo);
        				}

        				$("#login").attr("disabled", false);
        			},
        			dataType : "json"
        		});


        }

        render (){

                return (

                    <section className="loginForm">
                        <h4  className="h_title">登录</h4>
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                                  <ul>
                                      <li>
                                            <span>用户名</span>
                                            <input type="text" ref="u" id="u" value={this.state.u} onChange={this.handleChange} placeholder="请输入您的手机号码"/>
                                      </li>
                                      <li>
                                            <span>密码</span>
                                            <input type="password" ref="p" id="p" value={this.state.p}  onChange={this.handleChange} placeholder="请输入6-18位数字或字母或符号"/>
                                      </li>

                                  </ul>
                              <p id="showMess"></p>
                              <p className="forgetPassword"><Link to={`/forgetPassword`}>忘记密码？</Link></p>
                              <button  type="submit"  className="grad unityButton" onClick={this.handleLogin} id="login">登录</button>
                          </form>
                          <p className="registerEnter" onClick="">注册</p>
                     </section>



                )

        }

}
export default Login;

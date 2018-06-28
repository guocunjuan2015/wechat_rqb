import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Modal} from 'antd';

class SysInfos extends React.Component{
      constructor(){

          super();
          this.state = {

              messageList:[{}]

          }
      }
      componentDidMount(){
          /**
           * 初始化消息
           * @type {String}
           */
          $.ajax({

              url:'http://test.rqbao.com/rqb/account/message/center/get.do',
              type:'post',
              data:{
                  userId:'36424a3505844be78c0583615bc46e18'
              },
              dataType:'json',
              success:(res)=>{
              console.log(res);
              //    console.log(info);

                /*  this.setState({
                    messageList:res
                  })*/
              },error:()=>{


              }

          })
      }
      render(){

            return (
              <div className="mr10">
              	    <h4 className="h_title h_title_border">消息</h4>
              			<section className="sysInfos_list  clearfix">
              					<ul>
              							<li>
              								<p>【活动】清凉一夏，盈在六月</p>
              								 2017-07-26
                               <div>
                                  瑞资产48号-21期：1/1的本息收益为100.53元。
                               </div>
              							</li>
              							<li>
              								<p>【消息】提现手续费规则公告</p>
              								 2017-07-26
              							</li>
              							<li>
              								<p>【消息】瑞钱宝与海口联合农商银行存管</p>
              								2017-07-26
              							</li>
              					</ul>

              			</section>
              </div>
            )

      }




}

export default SysInfos;

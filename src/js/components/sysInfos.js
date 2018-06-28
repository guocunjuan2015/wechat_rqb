import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Modal} from 'antd';

class SysInfos extends React.Component{
      constructor(){
          super();
          this.state = {

              messageList_data:[{}]

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
                  userId:'06079fc1e4c6415b8684320fe926f5d3'
              },
              dataType:'json',
              success:(res)=>{
              console.log(res);
              let infos = JSON.parse(res.result);
              let _data = infos.resultObject;
              //    console.log(info);

                /*  this.setState({
                    messageList_data:_data
                  })*/
              },error:()=>{


              }

          })
      }
      render(){
          /*  let messageList = this.state.messageList_data.length ?
            this.state.messageList_data.length.map((messageListItem,index)=>(
                <li>
                  <p>{messageListItem.subject}</p>
                  {messageListItem.date}
                   <div>
                      {messageListItem.content}
                   </div>
                </li>
            ))
            : "暂无数据";*/
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

                        {  /*    {messageList}*/}

              					</ul>

              			</section>
              </div>
            )

      }




}

export default SysInfos;

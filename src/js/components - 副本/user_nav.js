/*import '../../util/mockdata';*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Header from './header';
import Footer from './footer';
import {Tooltip,Avatar , Menu, Dropdown, Icon,Modal} from 'antd';

var UserNav = React.createClass({

      getInitialState(){

          return {

              isClosed : false,
              isVisibileFriends : false,
              isVisibile : false,
              isVisibileAccountSet :false,
            /*  news : ''*/

          }

      },
      handleMenuToggle(){ //点击导航显示隐藏左侧边栏

          this.setState({

            isClosed: !this.state.isClosed
          })

          if(this.state.isClosed == false){
              $("#sidebar").addClass('is-open');
              $(".container-right").css("left","65px");

          } else {
            $("#sidebar").removeClass('is-open');
            $(".container-right").css("left","170px");

          }

      },
      /*componentDidMount(){

        var myFetchOptions = {

            method :'GET'

        };

        fetch("/data", myFetchOptions).then(response => response.json()).then(json => {
            this.setState({news: json});
      });

      },*/
      render(){
        /*  const {news} = this.state;*/
        /*  const userNewslist =
            news.map((newsitem,index)=>(

                  <li key={index}>

                        <span>{newsitem.date}</span>
                        <span>{newsitem.name}</span>

                  </li>

            ));*/
            const noticeTip =
            <div className="noticeTip">
                <i className="fa fa-exclamation-circle"></i>
                <ul className="user-news-list">
                    <li>您当前还没有消息提醒</li>
                    <li>您当前还没有消息提醒</li>
                    <li>您当前还没有消息提醒</li>
                    <li>您当前还没有消息提醒</li>
                </ul>
                <p className="noticep">
                    <Link to={`/sysInfos`}>
                          全部消息
                    </Link>
                </p>
            </div>;
            const userList = (
                  <Menu className="userList">
                    <Menu.Item>
                      <a  rel="noopener noreferrer">我的任务</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a  rel="noopener noreferrer" data-toggle="modal" data-target="#accountSet">账号设置</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a  rel="noopener noreferrer" data-toggle="modal" data-target="#inviteFriends">邀请好友</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a  rel="noopener noreferrer">退出登录</a>
                    </Menu.Item>
                  </Menu>
            );




            return (
              <div>
                  {/*网页自动加载进度条START*/}
                    <div className="pace  pace-inactive">
                      <div className="pace-progress" data-progress-text="100%" data-progress={99} style={{width: '100%'}}>
                        <div className="pace-progress-inner" />
                      </div>
                        <div className="pace-activity" />
                    </div>
                    {/*网页自动加载进度条END*/}
                    {/*BEGIN page-header-topbar*/}
                      <div className="user-info-improve">
                          <span className="text">您的账号未绑定邮箱或手机号，可能存在安全风险，请尽快完善账号信息。</span>
                          <a className="gotoBind" rel="noopener noreferrer" data-toggle="modal" data-target="#accountSet">前往绑定</a>
                          <span className="text">, 或</span>
                          <span className="donotRemind"> 不再提醒</span>
                      </div>
                      <div className="page-header-topbar">
                            <span className="logo-text">Collection Books</span>
                            <a id="menu-toggle" href="javascript:;" className="hidden-xs">
                                  <i onClick={this.handleMenuToggle} className="fa fa-bars" />
                            </a>
                            <div className="fr navbar-account">
                                  <ul>
                                      <li>
                                          <Tooltip placement="bottom" title={noticeTip}>
                                            <i className="fa fa-envelope fa-fw"></i>
                                          </Tooltip>
                                      </li>
                                      <li>
                                          <Avatar className="fl avatar" icon="user" />
                                          <Dropdown overlay={userList}>
                                              <a className="fl dropdownList ant-dropdown-link" href="javascript:;">
                                                 username <Icon type="down" />
                                              </a>
                                          </Dropdown>
                                      </li>
                                      {/*<li>
                                            <i className="fa fa fa-cog"></i>
                                      </li>*/
                                      }
                                  </ul>
                            </div>
                      </div>
                    {/*END page-header-topbar*/}
               </div>
            )

      }

})

export default UserNav;

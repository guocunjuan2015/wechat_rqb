import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {Upload,Modal,Icon,Tabs} from 'antd';
import {CopyToClipboard} from 'react-copy-to-clipboard'; //React复制到剪贴板
const TabPane = Tabs.TabPane;
var MaskLayer = React.createClass({
      getInitialState(){
          return {
            previewVisible: false,
            previewImage: '',
            fileList: [{
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
            isVisibileBindPhone : false ,
            isExchange : false ,
            userId : 0 ,
            value: 'https://xxx.com',
            copied: false

          }
      },
      handleCancel (){

        this.setState({ previewVisible: false })
      },
      handleChange({ fileList }){
          this.setState({ fileList })
      },
      //个人设置左侧鼠标经过li状态
      onmouseenter(event){

          this.setState({

              isExchange: !this.state.isExchange

          })
          var $this = $(".leftWarp li");
          if(this.state.isExchange == false){
              $(".accountSetLogins").hide();
              $(".basicAvatar").show();
              $this.addClass('current');
          } else {
              $(".accountSetLogins").show();
              $(".basicAvatar").hide();
              $this.removeClass('current');
          }

      },
      //绑定手机号操作
      handleBindPhone(){

          this.setState({

            isVisibileBindPhone: !this.state.isVisibileBindPhone

          })
          if(this.state.isVisibileBindPhone == false){

            $(".editing").show(500);

          } else {

            $(".editing").hide(500);
          }
      },
      onChange({target: {value}}) {
         this.setState({value, copied: false});
        },


        onCopy() {
         this.setState({copied: true});
      },
      render(){
            const { previewVisible, previewImage, fileList } = this.state;
            const uploadButton = (
              <div>
                  添加头像
              </div>
            );
            return (
              <div className="mask-layers">
                {/*创建计划弹框START*/}
                    <div className="modal fade" id="creatPlanLayer" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                        <div className="modal-dialog creatPlanLayer" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                              <h4 className="modal-title">创建计划</h4>
                            </div>
                            <div className="createMain">
                                    <section>
                                          <span className="type-system">计划名称</span>
                                          <input type="text" name="" className="name form-control" placeholder="请输入计划名称" autofocus="true" accesskey="k"/>
                                    </section>
                                    <section className="template-short-list">
                                          <span className="type-system">计划模板</span>
                                          <div className="paln_wrapper clearfix">
                                              <ul className="fl plan_template">
                                                      <li className="cover-item selected" ref="selected" onMouseEnter={this.onmouseenter} onMouseLeave={this.onmouseleave}>
                                                             <div className="temp-img-box">
                                                                <img src="./src/images/modal1.png" alt="封面"/>
                                                             </div>
                                                            <span className="temp-name">工作计划</span>
                                                            <div className="select-box">
                                                                  <i className="icon2-selected fa fa-check-square-o"></i>
                                                            </div>
                                                            <span className="temp-preview">预览</span>
                                                      </li>
                                                      <li className="cover-item" ref="selected" onMouseEnter={this.onmouseenter} onMouseLeave={this.onmouseleave}>
                                                             <div className="temp-img-box">
                                                                <img src="./src/images/modal1.png" alt="封面"/>
                                                             </div>
                                                            <span className="temp-name">工作计划</span>
                                                            <div className="select-box">
                                                                  <i className="icon2-selected fa fa-check-square-o"></i>
                                                            </div>
                                                            <span className="temp-preview">预览</span>
                                                      </li>
                                                      <li className="cover-item" ref="selected" onMouseEnter={this.onmouseenter} onMouseLeave={this.onmouseleave}>
                                                             <div className="temp-img-box">
                                                                <img src="./src/images/modal1.png" alt="封面"/>
                                                             </div>
                                                            <span className="temp-name">工作计划</span>
                                                            <div className="select-box">
                                                                  <i className="icon2-selected fa fa-check-square-o"></i>
                                                            </div>
                                                            <span className="temp-preview">预览</span>
                                                      </li>

                                               </ul>
                                               <div className="show-more fl" data-toggle="modal" data-target="#createModal">
                                                  <div className="more-box">more</div>
                                                  <span className="type-caption">更多模板</span>
                                               </div>
                                          </div>
                                    </section>
                                    <section>
                                        <button type="button" className="btn" id="submitModal">创建计划</button>
                                    </section>

                              </div>

                          </div>
                        </div>
                    </div>
                    {/*创建模板弹框strat*/}
                      <div className="modal fade" id="createModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                            <div className="modal-dialog createModal" role="document">
                              <div className="modal-content">
                                      <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                        <h4 className="modal-title">创建模板</h4>
                                      </div>
                                      <div className="template-pannel">
                                            <ul className="clearfix">
                                                <li>
                                                    <Link to={`/board`}>
                                                      <div className="wrapper set">
                                                          <i className="fa fa-plus-circle"></i>
                                                       </div>
                                                       <span className="temp-name">创建模板</span>
                                                    </Link>
                                                </li>

                                            </ul>
                                      </div>
                              </div>
                            </div>
                      </div>
                    {/*创建模板弹框end*/}
                    {/*邀请好友 start*/}
                    <div className="modal fade" id="inviteFriends" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                          <div className="modal-dialog inviteFriends" role="document">
                            <div className="modal-content">
                                    <div className="modal-header">
                                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                      <h4 className="modal-title">邀请好友</h4>
                                    </div>
                                    <div className="invite-body">
                                        <div className="address-desc">您的专属邀请链接：</div>
                                                <div className="invite-address-box">
                                                   <input id="invite-address" value={this.state.value} size={10} onChange={this.onChange} className="form-control" readonly=""/>
                                                    <CopyToClipboard text={this.state.value} onCopy={this.onCopy}>
                                                        <span id="invite-copy-link">
                                                              复制
                                                        </span>
                                                    </CopyToClipboard>
                                                </div>
                                                <div className="qrcode-container clearfix">
                                                    <div id="invite-qrcode" className="fl invite-qrcode">
                                                        <img src="/src/images/code.jpg"/>
                                                    </div>
                                                    <div className="fl qrcode-desc">
                                                        您的专属邀请二维码
                                                        <div>手机扫一扫</div>
                                                    </div>
                                              </div>
                                        </div>
                            </div>
                          </div>
                    </div>
                    {/*邀请好友 end*/}
                    {/*账户设置START*/}
                    <div className="modal fade" id="accountSet" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                        <div className="modal-dialog accountSet" role="document">
                          <div className="modal-content">
                                <div className="accountSet-body clearfix">
                                      <div className="fl accountSet-l">
                                          <h4 className="appLeftHeader">个人设置</h4>
                                          <div className="leftWarp">
                                              <ul>
                                                    <li onMouseEnter={this.onmouseenter} onMouseLeave={this.onmouseleave}><i className="fa fa-user"></i>基本信息</li>
                                                    <li onMouseEnter={this.onmouseenter} onMouseLeave={this.onmouseleave}><i className="fa fa-lock"></i>账号密码</li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="fl accountSet-r">

                                            <div className="basicInfoDetail  basicAvatar clearfix">
                                                 <ul>
                                                    <li className="clearfix">
                                                       <span className="leftSpan myAvatar">头像</span>
                                                       <div className="rightContent">
                                                          <Upload action="//jsonplaceholder.typicode.com/posts/"
                                                             listType="picture-card"
                                                             fileList={fileList}
                                                             onPreview={this.handlePreview}
                                                             onChange={this.handleChange}
                                                           >
                                                             {fileList.length >= 3 ? null : uploadButton}
                                                           </Upload>
                                                           <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                             <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                                           </Modal>
                                                        </div>
                                                    </li>
                                                      <li className="clearfix">
                                                       <span className="leftSpan">姓名</span>
                                                       <div className="realName rightContent">
                                                       <input className="form-control" type="text"/>
                                                      </div>
                                                    </li>
                                                    <li className="clearfix">

                                                        <button type="button" className="btn  btn-primary"  id="saveAvater">保存</button>
                                                    </li>

                                                 </ul>
                                            </div>

                                            {/*账号密码设置*/}
                                            <div className="basicInfoDetail accountSetLogins">
                                                <div className="loginAccount clearfix">
                                                      <h5>登录账号</h5>
                                                      <ul>
                                                            <li className="phone">
                                                              <div className="leftSpan">手机</div>
                                                              <div className="rightContent">
                                                                <div className="showing">
                                                                  <span className="leftSpan">未绑定</span>
                                                                  <span className="btn-icon-blue modify" onClick={this.handleBindPhone}>绑定</span>
                                                                </div>
                                                                <div className="editing">
                                                                  <div className="phoneLine clearfix">
                                                                    <input type="text"  maxLength={11} defaultValue className="fl form-control phoneNumber" />
                                                                    <div className="fl buttonPlace">
                                                                      <span className="btn sendValiCode">短信验证</span>
                                                                    </div>
                                                                  </div>
                                                                  <div className="phoneLine clearfix">
                                                                    <input type="text" placeholder="输入短信验证码" className="fl form-control valiCode" maxLength={4} />
                                                                    <div className="fl buttonPlace">
                                                                      <span className="btn confirm">确定</span>
                                                                    </div>
                                                                  </div>
                                                                  <span className="btn btn-outline-danger cancel">取消</span>
                                                                </div>
                                                              </div>
                                                            </li>
                                                      </ul>
                                                    </div>

                                                    {/*登录密码*/}
                                                    <div className="loginPassword">
                                                        <h5 className="loginPsw">登录密码</h5>
                                                        <ul>
                                                            <li className="clearfix">
                                                                <div className="leftSpan">旧密码</div>
                                                                <input type="text" placeholder="输入短信验证码" className="fl form-control valiCode" maxLength={4} />
                                                            </li>
                                                            <li className="clearfix">
                                                                <div className="leftSpan">新密码</div>
                                                                <input type="text" placeholder="输入短信验证码" className="fl form-control valiCode" maxLength={4} />
                                                            </li>
                                                            <li className="clearfix">
                                                                <div className="leftSpan">确认密码</div>
                                                                <input type="text" placeholder="输入短信验证码" className="fl form-control valiCode" maxLength={4} />
                                                            </li>
                                                            <li className="clearfix">
                                                                  <span className="btn  login-save">保存</span>
                                                            </li>

                                                        </ul>
                                                    </div>
                                            </div>

                                      </div>
                                 </div>
                          </div>
                        </div>
                      </div>
                    {/*账户设置END*/}
               </div>
             )

      }




})

export default MaskLayer;

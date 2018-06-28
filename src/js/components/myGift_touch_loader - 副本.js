import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import {Modal} from 'antd';
import Tloader from 'react-touch-loader';
import Dirlog from './dirlog';
import Footer from './footer'

class MyGift_touch_loader  extends React.Component{
     constructor (){
        super();
        this.state = {
            isNavbarShow : false


        }
     }
     handleNavShow =(event) =>{

        this.setState({
                isNavbarShow:!this.state.isNavbarShow
        })
        if(this.state.isNavbarShow == false){

         $(".bg").show();

        } else {


        }
     }
      render(){
            return (
              <div className="mr10">
                  <div className="myGift_navbar">
                      <h4 className="h_title h_title_border">优惠劵
                      <button className="navbar-toggle collapsed" onClick={this.handleNavShow} type="button" data-toggle="collapse" data-target=".navbar-collapse">
                         <span className="sr-only">Toggle navigation</span>
                         <span className="icon-bar" />
                         <span className="icon-bar" />
                         <span className="icon-bar" />
                       </button>
                      </h4>

                    </div>
                    <section className="giftPanel">
                      <div className="couponPanel panel clearfix">
                        <div className="couponPanel_t clearfix">
                          <div className="coupon_info">
                            <span className="couponSource">理财红包</span>
                            <p className="couponNums"><b>100</b> 元</p>
                            <p className="timeLimt">仅限投资≥90天项目</p>
                          </div>
                          <div className="coupon_img">
                            <img src="./src/images/gift.png" />
                          </div>
                        </div>
                        <div className="couponPanel_b">
                          <span className="is_use">满2000元可用</span>
                          <span className="dead_line fr">2016.10.15到期</span>
                        </div>
                      </div>
                      <div className="couponPanel panel clearfix set_gray">
                        <div className="couponPanel_t clearfix">
                          <div className="coupon_info">
                            <span className="couponSource">理财红包</span>
                            <p className="couponNums"><b>100</b> 元</p>
                            <p className="timeLimt">仅限投资≥90天项目</p>
                          </div>
                          <div className="coupon_img">
                            <img src="./src/images/gift.png" />
                          </div>
                        </div>
                        <div className="couponPanel_b">
                          <span className="is_use">满2000元可用</span>
                          <span className="dead_line fr">2016.10.15到期</span>
                        </div>
                      </div>
                    </section>
                      <Dirlog ref="dirlog" />
                </div>

            )

      }




}

export default MyGift_touch_loader;

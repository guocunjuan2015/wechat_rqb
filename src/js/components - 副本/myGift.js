import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'antd';
import Footer from './footer'

var myGift = React.createClass({
      render(){

            return (

              <div className="mr10">
                    <h4 className="h_title h_title_border">优惠劵</h4>
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
                </div>

            )

      }




})

export default myGift;

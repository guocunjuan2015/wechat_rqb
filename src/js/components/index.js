import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './header';
import Footer from './footer';
import { BackTop ,Menu } from 'antd';
import {Link} from 'react-router';
/*import '../../css/index.scss';*/
class Index extends React.Component{
       constructor(){
            super();
            this.state = {

                totalTradingAmount: '',
                projectInfo_data: {projectInfo:[]},
                bannerList_data: {bannerList:[]}


            }
       }
       /**
        * 首页初始化接口
        * [componentDidMount description]
        * @return {[type]} [description]
        */
       componentDidMount(){

          $.ajax({

               url:'http://test.rqbao.com/rqb/project/getHomeInfo.do',
               type:'post',
               data:{

               },
               dataType:"json",
               success:(res)=>{
                  let infos = JSON.parse(res.result);
                  let _data = infos.resultObject;
                  this.setState({

                      totalTradingAmount:_data.totalTradingAmount,
                      projectInfo_data: _data.projectInfo,
                      bannerList_data : _data.bannerList

                  })

               },error:()=>{


               }

          })

       }
        render (){
          let bannerList =this.state.bannerList_data.length
          ?
           this.state.bannerList_data.map((bannerListItem,index)=>(
             <div className="swiper-slide">
               <p>{bannerListItem.webTitle} 1111</p>
               <img src={bannerListItem.bannerImageUrl} alt={bannerListItem.webTitle} />
             </div>
          ))
          : "";
          let projectInfo =this.state.projectInfo_data.length
          ?
           this.state.projectInfo_data.map((projectInfoItem,index)=>(
             <section className="bg-color my_project clearfix">
               <h4 className="porject_title">
                 <span className="fl project_span">{projectInfoItem.productCategoryName}</span>
                 <span className="project_rate_icon fl">全新上线</span>
                 <Link to={`/financeList`}>
                       <span className="project_arrow_right fr"> &gt;
                       </span>
                 </Link>
               </h4>
               <div className="home_projectInfo">
                 <div className="fl home_project_rate">
                   <b>{projectInfoItem.annualRate}<span>%</span></b>
                   <p>约定年化利率</p>
                 </div>
                 <div className="fl  home_project_time">
                   <b>{projectInfoItem.typeName} </b>
                   <p>{projectInfoItem.dueTime} | 每期30天</p>
                 </div>
               </div>
             </section>
          ))
          : "";


            return (
                <div className="home_area">
                        <div className="mr10">
                          <section className="homeTitle">
                            <b>早上好</b>
                            <span className="fa fa-commenting fr" />
                            <font></font>
                          </section>
                          {/* banner轮播图片效果 */}
                          <div className="banner_image">
                            <div className="swiper-container">
                              <div className="swiper-wrapper">
                                    {bannerList}
                              </div>
                              {/* Add Pagination */}
                              <div className="swiper-pagination" />
                            </div>
                          </div>
                        </div>
                        {projectInfo}
                        <section className="bg-color invest_amount_panel clearfix">
                          <div className="swiper-container">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <div className="fl invest_amount_span">
                                  <b>累计投资金额</b>
                                  <p>{this.state.totalTradingAmount}</p>
                                </div>
                                <img src="./src/images/group.png" alt="累计投资金额" />
                              </div>
                            </div>
                            {/* 如果需要分页器 */}
                            <div className="swiper-pagination" />
                          </div>
                        </section>
                        <Footer/>
                        <BackTop/>
                </div>
            )

        }
}
export default Index;

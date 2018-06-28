import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import {Modal} from 'antd';
import Tloader from 'react-touch-loader';
import Dirlog from './dirlog';
import Footer from './footer'

class MyGift_touch_loader  extends React.Component{

       constructor(props){
           super(props);
           this.state = {
               isNavbarShow : false,
               gift_data:{giftList:[]},
               pageSize:10,
               hasMore: 0,/*是否加载更多*/
               initializing: 1,/*组件初始化状态*/
               refreshedAt:Date.now(),
               tabs:[
                   {tabName:"全部",id:1},
                   {tabName:"红包",id:2},
                   {tabName:"加息劵",id:3},
                   {tabName:"奖品",id:4},
                   {tabName:"提现劵",id:5},
                   {tabName:"提现劵",id:6}
               ],
               isShowDirlog:false,
               currentIndex:1
       }
     }
     /**
      * 初始化页面加载我的优惠券数据
      * @return {[type]} [description]
      */
       componentDidMount(){
       $.ajax({
           url:'http://test.rqbao.com/rqb/userAward/getUserAwardList.do',
           type:'post',
           data:{
               userId:'06079fc1e4c6415b8684320fe926f5d3',
               awardType:1,
               current:1,
               pageSize:this.state.pageSize
           },
           dataType:'json',
           success:(res)=>{
             let info = JSON.parse(res.result);
             let _data = info.resultObject;
             console.log(_data);
               this.setState({
                 gift_data:_data,
                 hasMore:1,
                 initializing:2 //初始化完成
             })
           },error:(data)=>{

           }
       })
     }
     /**
      *分页加载更多
      * @param  {[type]} resolve [description]
      * @return {[type]}         [description]
      */
     loadMore(resolve){
         setTimeout(()=>{
             let pageSize = this.state.pageSize;
             this.setState({
                   pageSize: pageSize+5,
             });

             $.ajax({
                 url:'http://test.rqbao.com/rqb/userAward/getUserAwardList.do',
                 type:'post',
                 data:{
                     userId:'06079fc1e4c6415b8684320fe926f5d3',
                     awardType:1,
                     current:1,
                     pageSize:5
                 },
                 dataType:'json',
                 success:(res)=>{
                   let info = JSON.parse(res.result);
                   let _data = info.resultObject;
                     this.setState({
                       invest_data:_data,
                       hasMore : pageSize>0&& pageSize <50,

                   })
                 },error:(data)=>{

                 }
             });

             resolve();

         },2e3);
     }
     /**
      * 下拉标题展示按钮
      * @param  {[type]} event [description]
      * @return {[type]}       [description]
      */
     handleNavShow =(event) =>{

        this.setState({
                isNavbarShow:!this.state.isNavbarShow
        })
        if(this.state.isNavbarShow == false){

         $(".bg").hide();

        } else {

          $(".bg").show();
        }
     }
     /**
      * tab切换
      * @param  {[type]} id [description]
      * @return {[type]}    [description]
      */
     tabChoiced=(id)=>{
      //tab切换到方法
      this.setState({
          currentIndex:id
      });
      $(".collapse.in").hide();
      }

      /**
       * 关闭下拉标题按钮
       * @return {[type]} [description]
       */
      handleCloseDirlog(){

         this.setState({

             isShowDirlog:!this.state.isShowDirlog

         })
         if(this.state.isShowDirlog == false){
            $(".collapse.in").hide();
         } else {

            $(".collapse.in").show();
         }
     }
      render(){
              var _this = this;
              var {hasMore,initializing,refreshedAt}  = this.state;
              var isbox1Show=this.state.currentIndex==1 ? 'block' : 'none';
              var isbox2Show=this.state.currentIndex==2 ? 'block' : 'none';
              var isbox3Show=this.state.currentIndex==3 ? 'block' : 'none';
              var isbox4Show=this.state.currentIndex==4 ? 'block' : 'none';
              var isbox5Show=this.state.currentIndex==5 ? 'block' : 'none';
              var isbox6Show=this.state.currentIndex==6 ? 'block' : 'none';
              /**
               * 我的优惠券列表
               * @type {[type]}
               */
              let giftList =this.state.gift_data.giftList.map
              (function(myGiftItem, index){
              return (
                <div className="couponPanel panel clearfix">
                  <div className="couponPanel_t clearfix">
                    <div className="coupon_info">
                      <span className="couponSource">{myGiftItem.source}</span>
                      <p className="couponNums"><b>100</b> 元</p>
                      <p className="timeLimt">仅限投资≥90天项目</p>
                    </div>
                    <div className="coupon_img">
                      <img src={myGiftItem.imgUrl} />
                    </div>
                  </div>
                  <div className="couponPanel_b">
                    <span className="is_use">满2000元可用</span>
                    <span className="dead_line fr">{myGiftItem.validity}</span>
                  </div>
                </div>
              );
            })
            /**
             * [description]
             * @param  {[type]} res   [description]当前对象
             * @param  {[type]} index [description]下标
             * @return {[type]}       [description]
             */
            var tabList= this.state.tabs.map(function(res,index) {
                     // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
               var tabStyle= res.id == this.state.currentIndex ? 'subCtrl active' : 'subCtrl';

                   return  <li key={index} onClick={this.tabChoiced.bind(_this,res.id)} className={tabStyle}>
                        {res.tabName}
                   </li>
            }.bind(_this));
            return (
              <div className="demo">
              <div className="myGift_navbar">
                  <h4 className="h_title h_title_border">优惠劵
                  <button className="navbar-toggle collapsed" onClick={this.handleNavShow.bind(this)} type="button" data-toggle="collapse" data-target=".navbar-collapse">
                     <span className="sr-only">Toggle navigation</span>
                     <span className="icon-bar" />
                     <span className="icon-bar" />
                     <span className="icon-bar" />
                   </button>
                  </h4>
                  <div className="navbar-collapse collapse" role="navigation" aria-expanded="true" >
                      <h4 className="layer_title"><span onClick={this.handleCloseDirlog.bind(this)}   className="fa fa-times fr"></span> 筛选 </h4>
                   <ul>
                     {tabList}
                     <input type="text" className="form-control" />
                   </ul>
                 </div>
                </div>
                   <div className="giftPanel">
                           <Tloader className="main" onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
                                  <div  style={{"display":isbox1Show}} >
                                     {giftList}
                                  </div>
                                  <div style={{"display":isbox2Show}} >
                                     {giftList}
                                  </div>
                                  <div style={{"display":isbox3Show}} >
                                     {giftList}
                                  </div>
                                  <div style={{"display":isbox4Show}} >
                                     {giftList}
                                  </div>
                                  <div style={{"display":isbox5Show}} >
                                     {giftList}
                                  </div>
                                  <div style={{"display":isbox6Show}} >
                                     {giftList}
                                  </div>
                           </Tloader>
                   </div>
              </div>


            )

      }




}

export default MyGift_touch_loader;

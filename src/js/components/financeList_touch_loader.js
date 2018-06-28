import React from 'react';
import {Row,Col} from 'antd'
import {Router,Route,Link,hashHistory} from 'react-router';
import $ from 'jquery';
import {Tabs} from 'antd';
import Footer from './footer';
import Tloader  from 'react-touch-loader';
const TabPane = Tabs.TabPane;

class FinanceList_touch_loader extends React.Component{
      constructor(){
          super();
          this.state = {
              mySubject_data:{productsList:[]},
              pageSize:2,
              hasMore: 0,/*是否加载更多*/
              initializing: 1,/*组件初始化状态*/
              refreshedAt:Date.now(),
              productsList_data:{productsList:[]},
              subsidyRate : '0'

          }
      }

      componentDidMount(){
          /**
           * 初始化消息
           * @type {String}
           */
          $.ajax({
              url:'http://test.rqbao.com/rqb/project/getLoanList.do',
              type:'post',
              data:{
                  userId:'06079fc1e4c6415b8684320fe926f5d3',
                  projectType:1,
                  currentPage:1,
                  pageSize:this.state.pageSize,
                  form:''
              },
              dataType:'json',
              success:(res)=>{
                let info = JSON.parse(res.result);
                let _data = info.resultObject;
                console.log(_data);
                  this.setState({
                    productsList_data:_data,
                  })
              },error:()=>{
              }
          })
          setTimeout(()=>{
								this.setState({
												hasMore:1,
												initializing:2
								})

					},2e3);
      }
      /**
       * 加载更多数据
       * @param  {[type]} resolve [description]
       * @return {[type]}         [description]
       */
      loadMore(resolve){
          setTimeout(()=>{
              var pageSize = this.state.pageSize;
              this.setState({
                    pageSize: pageSize+5
              });
              $.ajax({
                  url:'http://test.rqbao.com/rqb/project/getLoanList.do',
                  type:'post',
                  data:{
                    projectType:'1',
                    currentPage:1,
                    pageSize:2,
                    from : ""
                  },
                  dataType:'json',
                  success:(res)=>{
                    let info = JSON.parse(res.result);
                    let _data = info.resultObject;
                      this.setState({
                        mySubject_data:_data,
                    })
                  },error:(data)=>{
                  }
              });
              this.setState({
              hasMore: pageSize>0&& pageSize<50
          });
              resolve();
          },2e3);
      }
      render(){
            const {hasMore,initializing,refreshedAt}  = this.state;
            let productsList =this.state.productsList_data.productsList.length
            ?
             this.state.productsList_data.productsList.map((financial,index)=>(
               <Link to={`/productDetails/` + financial.projectId + `/1`}>
                     <section className="panel my_subject_panel clearfix">
                     <h4 className="subject_title"><span className="subject_span">{financial.projectName}</span><span className="rate_icon">满标计息</span></h4>
                     <div className="subject_projectInfo">
                       <div className="fl subject_project_rate">
                         <b>
                            {financial.rate}<span>%</span>
                            <span className={financial.subsidyRate == '0' ? 'isHide' : 'isShow'}>+{financial.subsidyRate}%</span>
                         </b>
                         <p>年化收益率</p>
                       </div>
                       <div className="fl subject_project_time">
                         <b>{financial.projectPeriod}<span>天</span></b>
                         <p>投资期限</p>
                       </div>
                       <button type="button" className={financial.projectStatus == 2 ? 'fr grad goBuyIng' : 'fr set_gray goBuyIng'}>{financial.projectStatusDescName}</button>
                     </div>
                   </section>
                 </Link>
            ))
            : ($(".no_subject").show());
            return (

              <div className="mr10  resetBootrap">

              <Tabs defaultActiveKey="1"  className="finace_title">
                     <TabPane tab="分期" key="1">
                           <Tloader className="main" onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
                                    {productsList}
                            </Tloader>
                     </TabPane>
                     <TabPane tab="定期" key="2">

                     </TabPane>
                     <TabPane tab="债转" key="3">

                     </TabPane>
                  </Tabs>
                   <Footer/>
                </div>

            )
      }

}
export default FinanceList_touch_loader;

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Tabs } from 'antd';
/*import MyInvestList from './myInvestList';*/
import Tloader from 'react-touch-loader';
const TabPane =Tabs.TabPane;
class MyInvest extends React.Component{

        constructor(){
            super();
            this.state = {
                invest_data:{myInvestList:[]},
                pageSize:10,
                hasMore: 0,/*是否加载更多*/
                initializing: 1,/*组件初始化状态*/
                refreshedAt:Date.now()
            }
        }
          componentDidMount(){
          $.ajax({
              url:'http://test.rqbao.com/rqb/project/getMyInvestList.do',
              type:'post',
              data:{
                  userId:'06079fc1e4c6415b8684320fe926f5d3',
                  loanType:1,
                  currentPage:1,
                  pageSize:this.state.pageSize
              },
              dataType:'json',
              success:(res)=>{
                let info = JSON.parse(res.result);
                let _data = info.resultObject;
                console.log(_data);
                  this.setState({
                    invest_data:_data,
                    hasMore:1,
                    initializing:2 //初始化完成
                })
              },error:(data)=>{

              }
          })
        }
        loadMore(resolve){
            setTimeout(()=>{
                let pageSize = this.state.pageSize;
                this.setState({
                      pageSize: pageSize+5,
                });

                $.ajax({
                    url:'http://test.rqbao.com/rqb/project/getMyInvestList.do',
                    type:'post',
                    data:{
                        userId:'06079fc1e4c6415b8684320fe926f5d3',
                        loanType:1,
                        currentPage:20,
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


        render(){
          var {hasMore,initializing,refreshedAt}  = this.state;
          console.log(this.state.invest_data.myInvestList);
          console.log(this.state.pageSize);
          let bidList =  this.state.invest_data.myInvestList.map(function(investItem, index){
          return (
            <div className="panel my_subject_panel clearfix" key={index}>
                <h4 className="subject_title"><span className="subject_span">{investItem.projectName}</span></h4>
                <div className="subject_projectInfo my_investInfo clearfix">
                  <div className="fl subject_project_rate">
                    <b>{investItem.investMoney}<span>元</span></b>
                    <p>投资金额</p>
                  </div>
                  <div className="fl subject_project_time">
                    <b>{investItem.dueinMoney}<span>元</span></b>
                    <p>预计收益</p>
                  </div>
                </div>
                <p className="myinvest-icons"><span className="green-icons">满标记息</span><span className="red-icons">1%加息</span></p>
            </div>
          );
        })
            return (

              <div className="mr10">
                {  /*<MyInvestList ref="myInvestList" />*/}
                   <h4 className="h_title h_title_border">我的投资</h4>
                   <section className="incomes_panel">
                     <div className="total_assets">
                       <p><b>5,000.00</b> 元</p>
                       <p>待收收益</p>
                     </div>
                     <div className="total_assets">
                       <p><b style={{fontSize:'2rem'}}>5,000,324.00</b> 元</p>
                       <p>代收本金</p>
                     </div>
                   </section>
                   <Tabs defaultActiveKey="1"  className="invest_titile_list">
                      <TabPane tab="投标中" key="1">


                          <Tloader className="main" onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
								                {bidList}
							           </Tloader>

                      </TabPane>
                      <TabPane tab="回款中" key="2">

                      </TabPane>
                      <TabPane tab="已结清" key="3">

                      </TabPane>
                   </Tabs>

                </div>

            )

      }




}

export default MyInvest;

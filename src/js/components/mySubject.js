import React from 'react';
import {Row,Col} from 'antd'
import {Router,Route,Link,hashHistory} from 'react-router';
import $ from 'jquery';
import {Tabs} from 'antd';
import Tloader  from 'react-touch-loader';
const TabPane = Tabs.TabPane;

class MySubject extends React.Component{
      constructor(){
          super();
          this.state = {
              mySubject_data:{productsList:[]},
              pageSize:2,
              hasMore: 0,/*是否加载更多*/
              initializing: 1,/*组件初始化状态*/
              refreshedAt:Date.now()

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
                  userId:'36424a3505844be78c0583615bc46e18',
                  projectType:'1',
                  currentPage:1,
                  pageSize:2,
                  from : ""
              },
              dataType:'json',
              success:(res)=>{
                let info = JSON.parse(res.result);
                let _data = info.resultObject;
                console.log(_data);
                  this.setState({
                    mySubject_data:_data,
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
            let {mySubject_data} = this.state;
            console.log(this.state.pageSize);
            const {hasMore,initializing,refreshedAt}  = this.state;
            let mySubjectList =this.state.mySubject_data.productsList.length
            ?
             this.state.mySubject_data.productsList.map((mySubjectItem,index)=>(
              <section className="panel my_subject_panel clearfix">
                  <Link to={`/productDetails/` + mySubjectItem.projectId + `/1` }>
                      <h4 className="subject_title">
                        <span className="subject_span">{mySubjectItem.projectName}</span>
                       { mySubjectItem.subsidyDesc == "" ? <span/> :
                         <span  className="rate_icon">{mySubjectItem.subsidyDesc}</span>
                       }
                      </h4>
                      <div className="subject_projectInfo">
                        <div className="fl subject_project_rate">
                          <b>{mySubjectItem.rate}<span>%</span></b><font>+{mySubjectItem.subsidyRate}%</font>
                          <p>年化收益率</p>
                        </div>
                        <div className="fl subject_project_time">
                          <b>{mySubjectItem.projectPeriod}<span>{mySubjectItem.deadlineDetail}</span></b>
                          <p>投资期限</p>
                        </div>
                        <button type="button" className="fr grad goBuyIng">立即购买</button>
                      </div>
                  </Link>
              </section>
            ))
            : ($(".no_subject").show());
            return (

              <div className="mr10  resetBootrap">
                   <h4 className="h_title h_title_border">我的约标</h4>
                   <section className="panel my_subject_panel no_subject clearfix" >
                     <img className="fl subject_image" src="./src/images/my_subject_images.png" alt="" />
                     <div className="subject_info fl">
                       <h4>约标息加息，5万起约</h4>
                       <p>拨打客服电话 进行约标</p>
                       <p>400-919-8555</p>
                     </div>
                   </section>
                  <Tloader className="main" onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
                        {mySubjectList}
                    </Tloader>

                </div>

            )
      }

}
export default MySubject;

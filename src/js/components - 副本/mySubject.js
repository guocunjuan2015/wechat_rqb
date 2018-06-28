import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import $ from 'jquery';
import {Modal} from 'antd';
import Footer from './footer'

class MySubject extends React.Component{
      constructor(){
          super();
          this.state = {

              mySubject_data:{productsList:[]}

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
                  pageSize:10,
                  from : ""
              },
              dataType:'json',
              success:(res)=>{
                let info = JSON.parse(res.result);
                let _data = info.resultObject;
              console.log(info);
              console.log(_data);
                  this.setState({
                    mySubject_data:_data
                  })
              },error:()=>{


              }

          })
      }
      render(){
            let {mySubject_data} = this.state;
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

              <div className="mr10">
                   <h4 className="h_title h_title_border">我的约标</h4>
                   <section className="panel my_subject_panel no_subject clearfix" >
                     <img className="fl subject_image" src="./src/images/my_subject_images.png" alt="" />
                     <div className="subject_info fl">
                       <h4>约标息加息，5万起约</h4>
                       <p>拨打客服电话 进行约标</p>
                       <p>400-919-8555</p>
                     </div>
                   </section>

                      {mySubjectList}

                </div>

            )

      }




}

export default MySubject;

import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'antd';
import $ from 'jquery';
import Footer from './footer'

class  FinanceList extends React.Component{
      constructor(){
          super();
          this.state = {

                fundsDetails_data : {fundItemList:[]},
                userId:'06079fc1e4c6415b8684320fe926f5d3'

          }
      }

      componentDidMount (){

          $.ajax({

              url:'http://test.rqbao.com/rqb/account/getMyAccountList.do',
              type:'post',
              data:{
                  currentPage:1,
                  pageSize:'10',
                  type:1,
                  account:'06079fc1e4c6415b8684320fe926f5d3'

              },
              dataType:'json',
              success:(res)=>{
                  let infos = JSON.parse(res.result);
                  let _data = infos.resultObject;
                  this.setState({

                    fundsDetails_data:_data

                  })
              },error:()=>{


              }

          })

      }
      render(){
            let storage = window.sessionStorage;
            storage.setItem('userId',this.state.userId);
            let fundsDetailsList = this.state.fundsDetails_data.fundItemList.length
            ? this.state.fundsDetails_data.fundItemList.map((fundsItem,index)=>(

                <li><span className="fr">1.11</span>{fundsItem.type}{fundsItem.remarks}<font>{fundsItem.create_date}</font></li>

            ))
            :'暂无数据'
            return (
              <div className="mr10">
                      <h4 className="h_title h_title_border">资金明细</h4>
                      <div className="fundsDetails clearfix">
                          <ul>
                            {fundsDetailsList}

                          </ul>
                      </div>
              </div>
            )

      }




}

export default FinanceList;

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Tabs } from 'antd';
import Footer from './footer';
const TabPane =Tabs.TabPane;

var MyInvest = React.createClass({
      getInitialState(){
        return {
            invest_data:{myInvestList:[]}

        }

      },

      componentDidMount(){
          $.ajax({
              url:'http://test.rqbao.com/rqb/project/getMyInvestList.do',
              type:'post',
              data:{
                  userId:'06079fc1e4c6415b8684320fe926f5d3',
                  loanType:1,
                  currentPage:1,
                  pageSize:10

              },
              dataType:'json',
              success:(res)=>{
                let info = JSON.parse(res.result);
                let _data = info.resultObject;
                  this.setState({
                    invest_data:_data
                })
              },error:(data)=>{

              }

          })
      },
      render(){
            const {invest_data}  = this.state;
          //  console.log(this.state.invest_data);
            window.abc = this.state.invest_data.myInvestList;
            
            return (

              <div className="mr10">
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
                      {abc.map(function(data, i){
            return (
                <ul key={i}>
                    <li>{data.loanType}</li>
                      <li>{data.loanType}</li>
                </ul>
            );
        })}
                      </TabPane>
                      <TabPane tab="回款中" key="2">222</TabPane>
                      <TabPane tab="已结清" key="3">333</TabPane>
                   </Tabs>

                </div>

            )

      }




})

export default MyInvest;

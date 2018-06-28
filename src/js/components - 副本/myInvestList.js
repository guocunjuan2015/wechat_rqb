import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Tabs } from 'antd';
import Footer from './footer';
const TabPane =Tabs.TabPane;

class  MyInvestList extends React.Component{

   initMyInvest(){
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
      }
      render(){
          return (

              <div>

              </div>

          )


      }




}

export default MyInvestList;

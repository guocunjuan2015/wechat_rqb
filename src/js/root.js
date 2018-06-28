import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,browserHistory} from 'react-router';
import { HashRouter } from 'react-router-dom';
import {Button} from 'antd';
import Index from './components/index';
import Login from './components/login';
import Register from './components/register';
import UserCenter from './components/userCenter';
import MySubject from './components/mySubject';//我的约标
import FinanceList from './components/financeList';//理财列表
import ProductDetails from './components/productDetails';//投资详情
import ForgetPassword from './components/forgetPassword';
import SysSets from './components/sysSets';//系统设置
import SysInfos from './components/sysInfos';//系统信息
import RiskAssess from './components/riskAssess';
import MyGift from './components/myGift';
import MyInvest from './components/myInvest';
import MyInvestDetails from './components/myInvestDetails';
import Recharge from './components/recharge';
import Withdraw from './components/withdraw';
import RepayPlan from './components/repayPlan';
import FundsDetails from './components/fundsDetails';
import 'antd/dist/antd.css';

var Root = React.createClass ({

      render(){

              return (
                 <div>
                        <Router history={browserHistory}>
                                <Route path="/" component={Index} ></Route>
                                <Route path="/login" component={Login}></Route>
                                <Route path="/register" component={Register}></Route>
                                <Route path="/forgetPassword" component={ForgetPassword}></Route>
                                <Route path="/usercenter" component={UserCenter}></Route>
                                <Route path="/financeList" component={FinanceList}></Route>
                                <Route path="/productDetails/:id(/:projectType)" component={ProductDetails}></Route>
                                <Route path="/mySubject" component={MySubject}></Route>
                                <Route path="/sysSets" component={SysSets}></Route>
                                <Route path="/sysInfos" component={SysInfos}></Route>
                                <Route path="/riskAssess" component={RiskAssess}></Route>
                                <Route path="/myGift"  component={MyGift}></Route>
                                <Route path="/myInvest" component={MyInvest}></Route>
                                <Route path="/myInvestDetails" component={MyInvestDetails}></Route>
                                <Route path="/recharge" component={Recharge}></Route>
                                <Route path="/withdraw" component={Withdraw}></Route>
                                <Route path="/repayPlan" component={RepayPlan}></Route>
                                <Route path="/fundsDetails" component={FundsDetails}></Route>


                        </Router>

                </div>

            )



      }
})

ReactDOM.render(<Root/>,document.getElementById('mainContainer'));
export default Root;
